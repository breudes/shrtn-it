const knex = require('../../database');

class UrlRepository {
  async findById(id) {
    const url = await knex('urls')
      .where('id', id)
      .first();

    return url;
  }

  async findByUserId(id) {
    const urls = await knex('urls')
      .where('user_id', id);

    return urls;
  }

  async findBySlug(slug) {
    const url = await knex('urls')
      .where('slug', slug)
      .first();

    return url;
  }

  async create(urlData) {
    const url = await knex('urls')
      .returning(['id', 'title', 'slug'])
      .insert(urlData);

    return url;
  }

  async delete(id) {
    await knex('urls').where('id', id).del();
  }
}

module.exports = new UrlRepository();