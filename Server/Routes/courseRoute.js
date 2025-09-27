const express = require("express");
const Course = require("../Models/Course");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { departmentName, semesterNo, courseName, pdf_url , instructor } = req.body;
    const course = new Course({ departmentName, semesterNo, courseName, pdf_url, instructor });
    await course.save();
    res.status(201).json({ message: "Course added successfully", course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
