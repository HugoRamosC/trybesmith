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

const getAllOrdersQuery = `
  SELECT
    O.id,
    O.user_id AS userId,
    JSON_ARRAYAGG(P.id) AS productsIds
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products AS P
    ON O.id = P.order_id
  GROUP BY O.id
  ORDER BY O.id;
`;

const getByUsernameQuery = `
  SELECT * FROM Trybesmith.users
  WHERE username = ?;
`;

const createOrderQuery = `
  INSERT INTO Trybesmith.orders AS O
  (user_id)
  VALUES (?);
`;

const updateProductOrderQuery = `
  UPDATE Trybesmith.products P
  INNER JOIN Trybesmith.orders O
    ON P.order_id = O.id
  SET P.order_id = MAX(O.id)
  WHERE P.id = ?;
`;

export default {
  createProductQuery,
  getAllProductsQuery,
  createUserQuery,
  getAllOrdersQuery,
  getByUsernameQuery,
  createOrderQuery,
  updateProductOrderQuery,
};