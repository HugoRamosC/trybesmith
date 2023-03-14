const createProductQuery = `
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);
`;

const getAllProductsQuery = `
  SELECT * FROM Trybesmith.products;
`;

const createUserQuery = `
  INSERT INTO Trybesmith.users
  (username, vocation, level, password)
  VALUES (?, ?, ?, ?);
`;

export default {
  createProductQuery,
  getAllProductsQuery,
  createUserQuery,
};