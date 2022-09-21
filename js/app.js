const express = require("express");
const app = express();
const connect = require("./mysql").connection;

app.use(express.json());
app.listen(8080, () => {
  console.log("Server in running on localhost:8080");
});

app.get("/book", (_, res) => {
  const query = "SELECT * FROM livro;";
  executeQuery(query, res);
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM livro where id = ${id} ;`;
  executeQuery(query, res);
});

app.post("/book", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;

  if (title.length == 0 || author.length == 0) {
    res
      .status(400)
      .json({ message: "Um dos campos necessários não foi preenchido" });
  } else {
    const querySelect = `SELECT * FROM livro where title = '${title}' and author = '${author}'`;
    const queryInsert = `INSERT INTO livro(title, author) VALUES('${title}', '${author}')`;
    validateQuery(querySelect, queryInsert, res);
  }
});

app.put("/book", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const query = `UPDATE livro SET title ='${title}', author = '${author}' where id = ${id}`;
  executeQuery(query, res);
});

app.delete("/book/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM livro where id = ${id}`;
  executeQuery(query, res);
});

const executeQuery = (query, res) => {
  connect.query(query, (err, rows, _) => {
    if (err) res.json(err);
    res.json(rows);
  });
};

const validateQuery = (querySelect, queryInsert, res) => {
  connect.query(querySelect, (err, results, _) => {
    if (err) res.json(err);
    else if (results.length > 0)
      res.status(409).json({ message: "Este livro já está cadastrado" });
    else executeQuery(queryInsert, res);
  });
};
