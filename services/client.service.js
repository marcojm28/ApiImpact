import infrastructureClient from '../infrastructure/client.infrastructure'

const service = {
  client: {
    listClients(req, res) {
      infrastructureClient.client.getAllClients(req, res);
    },

    createClient(req, res) {
        infrastructureClient.client.createClient(req, res);
    },
  },
};

export default service;

