const controller = require('./controller');
module.exports = (app) => {
    app.get('/api/todo', controller.getAllTodo);
    // app.get('/api/todo/:id', controller.getTodoById);
    app.put('/api/todo/:id', controller.updateTodoById);
    app.post('/api/todo', controller.createTodo);
    app.delete('/api/todo/:id', controller.deleteTodoById);
};
