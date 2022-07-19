const knex = require('../databases/knex');
const fieldValidator = require('../utils/filedValiadator');

exports.create = async (req, res) => {
  try {
    const invalidFields = fieldValidator(req.body, ['fullName', 'avatarUrl']);

    if (invalidFields.length) {
      return res.status(400).send({
        status: 'invalid request',
        invalidFields
      });
    }

    const [instructorId] = await knex.insert(req.body).into('instructors');

    const [instructorCreated] = await knex.select('*').from('intructors').where({id: instructorId});

    return res.status(200),send({status: 'success', data: instructorCreated});
  } catch (err) {
    return res.status(500).send({ error: err.message || err});
  }
}