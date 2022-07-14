/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table
    .integer('authorId') // tipo do campo
    .unsigned() // precisa ser numero inteiro
    .notNullable()  // nao pode ser nulo
    .references('id')  // referencia no campo na tabela pai
    .inTable('authors') // nome da tabela pai
    .onDelete('CASCADE'); // executa um comando quando o registro pai for deletado
  });
 };
    table.increments();
    table.string('authorsId').

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex,schema.alterTable('authors', function(table) {
    table.dropForeign('authorId')
    table.dropColumn('authorsId')
  })
}