const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

let tasks = [
  { id: 1, name: 'Complete the project', status: 'Ongoing', deadline: '2024-10-10T12:00' },
  { id: 2, name: 'Submit homework', status: 'Pending', deadline: '2024-10-11T15:00' }
];

// Render the to-do list
app.get('/', (req, res) => {
  res.render('index', { tasks });
});

// Add a new task
app.post('/add', (req, res) => {
  const newTask = {
    id: tasks.length + 1, // Simple auto-increment ID
    name: req.body.name,
    status: req.body.status,
    deadline: req.body.deadline
  };
  tasks.push(newTask);
  res.redirect('/');
});

// Edit an existing task
app.post('/edit', (req, res) => {
  const taskId = parseInt(req.body.id);
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      task.name = req.body.name;
      task.status = req.body.status;
      task.deadline = req.body.deadline;
    }
    return task;
  });
  res.redirect('/');
});

// Delete a task
app.post('/delete', (req, res) => {
  const taskId = parseInt(req.body.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});