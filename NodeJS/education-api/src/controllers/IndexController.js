const knex = require('../databases/knex');

exports.index = async (req, res) => {
  try {
    await knex.select('*').from('knex_migrations');
    return res.send('API education is available');
  } catch (err) {
    return res.status(500).send(err.message);
  }
}