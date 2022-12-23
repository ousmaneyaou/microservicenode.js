const express = require('express');
const app = express();
const port = 3000;

// une collection d'utilisateurs
let users = [
  { id: 1, name: 'ali' },
  { id: 2, name: 'souley' },
  { id: 3, name: 'ousmane' }
];

// GET /api/users - Retourne la liste des users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Retourne la list un seul user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST /api/users - Crée un nouveau user
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.json(user);
});

// PUT /api/users/:id - Modifie un user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  user.name = req.body.name;
  res.json(user);
});

// DELETE /api/users/:id - Supprime un user
app.delete('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

app.listen(port, () => console.log(`Listening on port ${port}`));