const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks")
    return tasks
}

const addTask = async (task) => {
    const { title, category, status, priority, expiration } = task
    const now = new Date()
    const createdAt = now.toLocaleString('sv-SE').replace(' ', ' ')

    const query = 'INSERT INTO tasks (title, status, category, priority, createdAt, expiration) VALUES (?, ?, ?, ?, ?, ?)'
    const [createdTask] = await connection.execute(query, [title, status, category, priority, createdAt, expiration])

    return {insertId: createdTask.insertId}
}

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}

const updateTask = async (id, task) => {
    const { status} = task

    const query = 'UPDATE tasks SET status = ? WHERE id = ?'

    const updatedTask = await connection.execute(query, [status, id])
    return updatedTask
}

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
}