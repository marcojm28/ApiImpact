const infrastructure = {
  client: {
    getAllClients(req, res) {
      req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query("SELECT * FROM clientes", (err, data) => {
          if (err) return res.send(err);

          res.json(data);
        });
      });
    },
    createClient(req, res) {
      req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query("INSERT INTO clientes SET ?", [req.body], (err, data) => {
          if (err) return res.send(err);

          res.status(200).send("client added");
        });
      });
    },
  },
};

export default infrastructure;
