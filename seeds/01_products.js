
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'JuaJua', description: 'chiste local', price: 100},
        {name: 'Lobo', description: 'colmillo blanco', price: 340},
        {name: 'Yona', description: 'princesa roja', price: 89}
      ]);
    });
};
