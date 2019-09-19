const db = require('../data/dbConfig.js')

module.exports = {
    add,
    update,
    remove,
    getAll,
    findById,
};


async function add(friend) {
    return db('friends').insert(friend, 'id')
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return db('friends')
        .del()
        .where({id})
}

function  getAll(){
    return db('friends');
}

function findById(id) {
    return db('friends').where({id})
}