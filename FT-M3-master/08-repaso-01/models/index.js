let contacts = [];
let prevId = 0;

const addContact = (name, lastName) => {
  if (typeof name !== "string" || typeof lastName !== "string")
    throw new TypeError(
      "Los argumentos enviados no son del tipo esperado, deben ser de tipo string"
    );
  if (name.length < 3 || lastName < 3)
    throw new Error(
      "El nombre y/o apellido deben contener al menos 3 caracteres"
    );
  if (contacts.find((e) => e.name === name && e.lastName === lastName))
    throw new Error("El contacto ya existe");
  const contact = {
    id: ++prevId,
    name,
    lastName,
  };

  contacts.push(contact);
  return contact;
};

//JSON.parse convierte un string en un objeto
//JSON.stringify convierte un objeto en un string
// return JSON.parse(JSON.stringify(contacts));
const getContacts = (query) => {
  if (query) {
    const contact = contacts.filter(
      (e) =>
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.lastName.toLowerCase().includes(query.toLowerCase())
    );
    return contact;
  }
  return contacts;
};

const getContactById = (id) => {
  if (typeof id !== "number")
    throw new TypeError("El id debe ser de tipo 'number'");
  const contact = contacts.find((e) => e.id === id);
  if (!contact) return false;
  return contact;
};

const deleteContact = (id) => {
  const deletedContact = contacts.filter((e) => e.id === id);
  if (!deletedContact.length) return false;
  contacts = contacts.filter((e) => e.id !== id);
  return deletedContact;
};

const addPhone = (id, phone) => {
  try {
    const contact = getContactById(id);
    if (!contact) return false;
    console.log(contact)
    contact.phones ? contact.phones.push(phone) : (contact.phones = [phone]);
    return contact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addContact,
  getContacts,
  getContactById,
  deleteContact,
  addPhone,
};
