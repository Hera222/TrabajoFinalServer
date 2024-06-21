const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    celular: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    curso: { type: String, required: true },
    message: { type: Date, required: true },
    condicion: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contacts", ContactsSchema);
