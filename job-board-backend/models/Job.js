const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);