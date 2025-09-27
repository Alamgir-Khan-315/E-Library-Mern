const express = require("express");
const Department = require("../Models/Depart");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { departmentName, hod } = req.body;
    const department = new Department({ departmentName: departmentName.toLowerCase(), hod });
    await department.save();
    res.status(201).json({ message: "Department added successfully", department });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Department.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Department not found" });
    res.json({ message: "Department deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
