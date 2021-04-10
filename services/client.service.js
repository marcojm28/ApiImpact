const conexion = require("../config/database.util");
const service = {
  client: {
    listClients(req, res) {
      conexion.query(
        "SELECT * FROM clientes",
        function (error, results, fields) {
          if (error) res.send(error);

          results.forEach((result) => {
            // console.log(result);
          });

          res.status(200).send({ results });
        }
      );
    },
    kpiclients(req, res) {
        conexion.query(
          "SELECT * FROM clientes",
          function (error, results, fields) {
            if (error) res.send(error);
  
            results.forEach((result) => {
              // console.log(result);
            });
  
            res.status(200).send({ results });
          }
        );
      },
    createClient(req, res) {
      conexion.query(
        "INSERT INTO clientes SET ?",
        [req.body],
        function (error, result) {
          if (error) res.send(err);
        }
      );

      res.status(200).send("Client Added");
    },
  },
};

export default service;
