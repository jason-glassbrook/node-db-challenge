module.exports = (object, key) => ({
  ...object,
  [key] : Boolean (object[key]),
})
