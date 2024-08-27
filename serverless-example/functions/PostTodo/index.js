const { sendResponse } = require('../../responses/index');

const todos = [
  { id: 1, todo: 'Köp kaffe' },
  { id: 1, todo: 'Köp kaka' },
  { id: 1, todo: 'Brygg kaffe' },
  { id: 1, todo: 'Drick kaffe' },
];

module.exports.handler = async (event) => {
  const todo = JSON.parse(event.body);

  todos.push(todo);

  return sendResponse(todos);
};
