import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lead from './models/Lead.js';
import Admin from './models/Admin.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/syntaxim';

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data (optional - comment out if you want to keep existing data)
    await Lead.deleteMany({});
    await Admin.deleteMany({});
    console.log('Cleared existing data');

    // Create Admin User
    const admin = new Admin({
      username: 'admin',
      email: 'admin@syntaxim.com',
      password: 'admin123', // Will be hashed automatically
      role: 'admin',
    });
    await admin.save();
    console.log('✅ Admin user created:');
    console.log('   Username: admin');
    console.log('   Password: admin123');

    // Create Sample Leads
    const leads = [
      {
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@example.com',
        phone: '9876543210',
        course: 'Full Stack Development',
        message: 'Interested in learning MERN stack',
        status: 'new',
        source: 'website',
      },
      {
        name: 'Priya Sharma',
        email: 'priya.sharma@example.com',
        phone: '9876543211',
        course: 'Data Science',
        message: 'Want to start my career in data science',
        status: 'contacted',
        source: 'website',
      },
      {
        name: 'Amit Patel',
        email: 'amit.patel@example.com',
        phone: '9876543212',
        course: 'Machine Learning',
        message: 'Looking for ML course with hands-on projects',
        status: 'new',
        source: 'website',
      },
      {
        name: 'Sneha Reddy',
        email: 'sneha.reddy@example.com',
        phone: '9876543213',
        course: 'React Native',
        message: 'Interested in mobile app development',
        status: 'enrolled',
        source: 'website',
      },
      {
        name: 'Vikram Singh',
        email: 'vikram.singh@example.com',
        phone: '9876543214',
        course: 'DevOps',
        message: 'Want to learn cloud and DevOps tools',
        status: 'contacted',
        source: 'website',
      },
    ];

    const createdLeads = await Lead.insertMany(leads);
    console.log(`✅ Created ${createdLeads.length} sample leads`);

    console.log('\n🎉 Seeding completed successfully!');
    console.log('\nYou can now login with:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();

