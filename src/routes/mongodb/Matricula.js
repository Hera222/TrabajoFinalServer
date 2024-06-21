const express = require("express");
const router = express.Router();
const {
  getMatriculas,
  getMatricula,
  getMatriculaDni,
  AddMatricula,
  delMatricula,
  updateMatricula,
} = require("../../controller/mongodb/matriculas");
//
/* *******************************************************  */
/*             Ruta de acceso a archivos Matriculas           */
/* *******************************************************  */

router.get("/matriculas", getMatriculas);
router.get("/matricula/:id", getMatricula);
router.get("/matricula/:dni", getMatriculaDni);
router.post("/matricula", AddMatricula);
router.put("/matricula/:id", updateMatricula);
router.delete("/matricula/:id", delMatricula);

module.exports = router;
