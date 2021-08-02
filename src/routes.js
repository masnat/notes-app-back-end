const { addNoteHanlder, getAllNotesHandler, getNoteByIdHanlder, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHanlder
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHanlder
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
    // {
    //     method: 'GET',
    //     path: '/notes',
    //     handler: () => {}
    // }
];

module.exports = routes;
