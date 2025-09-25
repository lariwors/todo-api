const connection = require('./connection')

const getAll = async () => {
    const tasks =  await connection.execute("SELECT * FROM tasks")
        return tasks
}

const addTask = async (task) => {
    const { title, category, priority } = task

    const query = 'INSERT INTO tasks (title, status, category, priority) VALUES (?, ?, ?, ?)'
    const createdTask = await connection.execute(query, [title, 'Incomplete', category, priority])

    return {insertId: createdTask.insertId}
}

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}

const updateTask = async (id, task) => {
    const { title, status, category, priority } = task

    const query = 'UPDATE tasks SET title = ?, status = ?, category = ?, priority = ? WHERE id = ?'

    const updatedTask = await connection.execute(query, [title, status, category, priority, id])
    return updatedTask    
}

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
}