const validateBody = (request, response, next) => {
    const { body } = request

function validateField(field, fieldName) {
    if (!field || field === '') {
        return response.status(400).json({ message: `The field "${fieldName}" is required and cannot be empty.` });
    }
}

validateField(body.title, 'title');
validateField(body.category, 'category');
validateField(body.priority, 'priority');

next()
}

module.exports = {
    validateBody,
}