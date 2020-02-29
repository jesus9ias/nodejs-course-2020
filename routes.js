
module.exports = (APP, users) => {
  APP.get('/', (req, resp) => {
    console.log(req.query);
    resp.send('hola');
  })

  APP.get('/users/:id', (req, res) => {
    const id = req.params.id;
    users.push(id);
    console.log(users);
    res.send(`Search user ${id}`);
  });

  APP.post('/', (req, res) => {
    res.json({ status: 'success', result: {} });
  });
}
