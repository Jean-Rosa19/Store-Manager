const connection = require('./connection');

async function selectAllProducts() {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
}

async function selectProductById(id) {
  const [[result]] = await connection.execute(
    `
    SELECT * FROM StoreManager.products
    WHERE id = ?
    `, [id],
  );  
  return result;
}

module.exports = {
  selectAllProducts,
  selectProductById,
};