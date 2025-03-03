const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const users = Object.values(data);

        return users;
    },
    async getOne(id) {
        const response = await fetch(`${baseUrl}/${id}`);
        const user = await response.json();

        return user;
    },
    async create(data) {
        const postData = transformUserData(data);

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const result = await response.json();

        return result;
    },
    async delete(id) {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();

        return result;
    },
    async update(id, data) {
        const postData = transformUserData(data);
        postData._id = id;

        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        const result = await response.json();

        return result;
    }
}

function transformUserData(data) {
    const { country, city, street, streetNumber, ...transformedData} = data;

    transformedData.address = { country, city, street, streetNumber };
    transformedData.createdAt = new Date().toISOString();
    transformedData.updatedAt = new Date().toISOString();

    return transformedData;
}