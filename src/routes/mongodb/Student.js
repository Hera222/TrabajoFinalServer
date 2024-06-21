const express = require("express");
const router = express.Router();
const {
  getStudents,
  getStudent,
  getStudentDni,
  AddStudent,
  delStudent,
  updateStudent,
} = require("../../controller/mongodb/students");

/* *******************************************************  */
/*             Ruta de acceso a archivos Students           */
/* *******************************************************  */

router.get("/students", getStudents);
router.get("/student/:id", getStudent);
router.get("/studentdni/:dni", getStudentDni);
router.post("/student", AddStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", delStudent);

module.exports = router;