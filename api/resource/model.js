const db = require('../../data/dbConfig');

function getAllResources() {
    return db('resources');
}

async function postResource(resource) {
    const [resource_id] = await db('resources')
        .insert(resource);

    return getAllResources()
        .where({ resource_id })
        .first();
}

module.exports = {
    getAllResources,
    postResource,
};