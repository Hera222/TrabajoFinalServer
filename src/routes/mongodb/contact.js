const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  AddContact,
  delContact,
  updateContact,
} = require("../../controller/mongodb/contacts");
//
/* *******************************************************  */
/*             Ruta de acceso a archivos Contacts           */
/* *******************************************************  */

router.get("/contacts", getContacts);
router.get("/contact/:id", getContact);
router.post("/contact", AddContact);
router.put("/contact/:id", updateContact);
router.delete("/contact/:id", delContact);

module.exports = router;
