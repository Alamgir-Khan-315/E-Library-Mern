const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    departmentName: { type: String, required: true, unique: true },
    hod: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
