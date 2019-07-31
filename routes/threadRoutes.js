const mongoose = require('mongoose');
const Thread = mongoose.model('threads');

module.exports = app => {
  app.get('/api/threads', async (req, res) => {
    const threads = await Thread.find({ _user: req.user.id });
    res.send(threads);
  });

  app.post('/api/add-thread', async (req, res) => {
    const { code } = req.body;

    const thread = new Thread({
      code: code,
      _user: req.user.id
    });

    try {
      await thread.save();
      res.send(thread);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post('/api/delete-thread', async (req, res) => {
    const { code, _user } = req.body;

    try {
      const thread = await Thread.deleteOne({ code, _user });
      res.send(thread);
    } catch (err) {
      if (err) console.log(err);
      res.send(err);
    }
  });
};
