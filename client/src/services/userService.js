const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const users = Object.values(data);

        return users;
    },
    async create(data) {
        const { country, city, street, streetNumber, ...postdata} = data;

        postdata.address = { country, city, street, streetNumber };
        postdata.createdAt = new Date().toISOString();
        postdata.updatedAt = new Date().toISOString();

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postdata),
        });

        const result = await response.json();

        return result;
    }
}