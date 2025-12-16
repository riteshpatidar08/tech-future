import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    trim: true,
    default: '',
  },
  message: {
    type: String,
    trim: true,
    default: '',
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'enrolled', 'rejected'],
    default: 'new',
  },
  source: {
    type: String,
    default: 'website',
  },
}, {
  timestamps: true,
});

// Index for faster queries
leadSchema.index({ createdAt: -1 });
leadSchema.index({ email: 1 });
leadSchema.index({ status: 1 });

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;

