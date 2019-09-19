
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('friends')
    .truncate()
    .then(function() {
      return knex('friends').insert([
        { name: 'Omar' },
        { name: 'Steve' },
        { name: 'Bob' },
        { name: 'Jose' },
      ]);
    });
};
