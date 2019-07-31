module.exports = app => {
  app.post('/api/add-thread', async (req, res) => {
    console.log(req.body);
  });
};
