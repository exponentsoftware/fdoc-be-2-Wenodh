const Todo = require('./model');

//add todo
exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).json({ success: true, data: todo });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
//show all
exports.getAllTodo = async (req, res) => {
    try {
        const { title, category, id, taskstatus } = req.query;
        var condition = {};
        if (title) {
            condition.title = title.toLowerCase();
        }
        if (category) {
            condition.category = category.toLowerCase();
        }
        if (id) {
            condition._id = id;
        }
        if (taskstatus) {
            condition.taskstatus = taskstatus;
        }
        const todo = await Todo.find(condition).sort({ modifiedAt: -1 });
        res.status(200).json({ success: true, data: todo });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
// get by id,
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json({ success: true, data: todo });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
//add, update by id and
exports.updateTodoById = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ success: true, message: 'updated' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
//delete by id
exports.deleteTodoById = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'deleted' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
