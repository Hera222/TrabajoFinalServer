const Matriculas = require("../../models/mongodb/contacts");

//**************************************************** */
//     Busca de datos generales de la base de datos    //
//**************************************************** */

const getContacts = async (req, res) => {
  try {
    await Contacts.find().then((data) => {
      res.status(200).json({ data: data, message: "Consulta exitosa" });
      return;
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**************************************************** */
//     Busca de registro por id base de datos          //
//**************************************************** */

const getContact = async (req, res) => {
  try {
    const existeItem = await Contacts.findOne({
      where: { id: req.params.id },
    });
    if (existeItem) {
      res.status(200).json({ data: existeItem, message: "Consulta exitosa" });
      return;
    }
    if (!existeItem) {
      res.status(400).json({ message: "El ID indicado no está registrado" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**************************************************** */
//     Eliminación de registro por id en la BD          //
//**************************************************** */

const delContact = async (req, res) => {
  const existeItem = await Contacts.findByIdAndDelete(req.params.id);
  if (!existeItem) {
    res.status(400).json({ message: "El ID indicado no está registrado" });
    return;
  }
  try {
    await Contacts.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Registro Eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//**************************************************** */
//          Se crea registro en la BD                 //
//**************************************************** */

const AddContact = async (req, res) => {
  const existeItem = await Contacts.findOne(req.params.id);
  if (existeItem) {
    return res
      .status(400)
      .json({ message: "El Contacto ya está registrado" });
  }

  const contact = new Contacts({
    id: req.body.id,
    nombre: req.body.nombre,
    email: req.body.email,
    celular: req.body.celular,
    city: req.body.city,
    curso: req.body.curso,
    message: req.body.message,
    condicion: req.body.condicion,
  });
  try {
    const registro = await contact.save();
    res.status(201).json({
      status: "201",
      data: registro,
      message: "El registro fue creado",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**************************************************** */
//          Se actualiza registro en archivo json           //
//**************************************************** */

const updateContact = async (req, res) => {
  const id = req.params.id;
  const existeItem = await Contacts.findOne({ id: req.params.id });
  try {
    if (existeItem.contact !== req.body.contact) {
      const existeItem = await Contacts.findOne({ id: req.params.id });
      if (existeItem) {
        return res
          .status(400)
          .json({ message: "El Mensaje ya está registrado" });
      }
    }
    const contact = await Contacts.findByIdAndUpdate(id, {
      id: req.body.id,
      nombre: req.body.nombre,
      email: req.body.email,
      celular: req.body.celular,
      city: req.body.city,
      curso: req.body.curso,
      message: req.body.message,
      condicion: req.body.condicion,
    });

    res.json({
      data: contact,
      message: "El registro fue Actualizado",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContacts,
  getContact,
  delContact,
  AddContact,
  updateContact,
};
