/**
 * Metodo para obtener un usuario a partir de su id.
 * @param {String | Number} id Identificador unico del usuario 
 * @returns user
 */
exports.getUserById = (id) => {
  if (typeof id === String) id = Number(id)
  const result = data.users.find(user=> user.id === Number(id))
  return result
}
