import express from 'express';
import Lead from '../models/Lead.js';
import { authenticateToken } from './admin.js';

const router = express.Router();

// Create a new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Name, email, and phone are required' 
      });
    }

    // Check if lead already exists with same email
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ 
        error: 'Lead with this email already exists' 
      });
    }

    const lead = new Lead({
      name,
      email,
      phone,
      course: course || '',
      message: message || '',
      status: 'new',
      source: 'website',
    });

    await lead.save();
    res.status(201).json({ 
      success: true, 
      message: 'Lead created successfully',
      lead 
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all leads (protected - admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 50, status, startDate, endDate } = req.query;
    
    const query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) {
        query.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        query.createdAt.$lte = new Date(endDate);
      }
    }

    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Lead.countDocuments(query);

    res.json({
      success: true,
      leads,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get lead statistics
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const { period = 'all' } = req.query;
    
    let dateFilter = {};
    const now = new Date();
    
    if (period === 'today') {
      const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      dateFilter = { createdAt: { $gte: startOfDay } };
    } else if (period === 'week') {
      const startOfWeek = new Date(now.setDate(now.getDate() - 7));
      dateFilter = { createdAt: { $gte: startOfWeek } };
    } else if (period === 'month') {
      const startOfMonth = new Date(now.setMonth(now.getMonth() - 1));
      dateFilter = { createdAt: { $gte: startOfMonth } };
    }

    const total = await Lead.countDocuments(dateFilter);
    const newLeads = await Lead.countDocuments({ ...dateFilter, status: 'new' });
    const contacted = await Lead.countDocuments({ ...dateFilter, status: 'contacted' });
    const enrolled = await Lead.countDocuments({ ...dateFilter, status: 'enrolled' });
    const rejected = await Lead.countDocuments({ ...dateFilter, status: 'rejected' });

    // Get daily leads for the last 7 days
    const dailyLeads = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const startOfDay = new Date(date.setHours(0, 0, 0, 0));
      const endOfDay = new Date(date.setHours(23, 59, 59, 999));
      const count = await Lead.countDocuments({
        createdAt: { $gte: startOfDay, $lte: endOfDay }
      });
      dailyLeads.push({
        date: startOfDay.toISOString().split('T')[0],
        count
      });
    }

    res.json({
      success: true,
      stats: {
        total,
        new: newLeads,
        contacted,
        enrolled,
        rejected,
        dailyLeads,
      },
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update lead status
router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['new', 'contacted', 'enrolled', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const lead = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete lead
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByIdAndDelete(id);

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

