const {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: (request, h) => {
      return addBookHandler(request, h);
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: (request, h) => {
      return getAllBookHandler(request, h);
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: (request, h) => {
      return getBookByIdHandler(request, h);
    },
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: (request, h) => {
      return editBookByIdHandler(request, h);
    },
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: (request, h) => {
      return deleteBookByIdHandler(request, h);
    },
  },
];

module.exports = routes;
