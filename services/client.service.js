const conexion = require("../config/database.util");
const service = {
  client: {
    listClients(req, res) {
      conexion.query(
        "SELECT * FROM clientes",
        function (error, results, fields) {
          if (error) res.send(error);

          res.status(200).send({ results });
        }
      );
    },
    kpiclients(req, res) {
      var kpi = {
        average: 0.0,
        standardDeviation: 0.0,
      };

      let years = 0.0;
      let standardDeviation = 0.0;
      let variance = 0.0;

      conexion.query(
        "SELECT * FROM clientes",
        function (error, results, fields) {
          if (error) res.send(error);

          results.forEach((client) => {
            years = years + client.Edad;
          });

          kpi.average = years / results.length;

          for (var i = 0; i < results.length; i++) {
            var range;
            range = Math.pow(results[i].Edad - kpi.average, 2);
            variance = variance + range;
          }
          
          variance = variance / results.length;
          kpi.standardDeviation = Math.sqrt(variance);
          res.status(200).send({ kpi });
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
