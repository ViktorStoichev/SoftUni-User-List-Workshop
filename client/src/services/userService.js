export default {
    async getAll() {
        const response = await fetch("http://localhost:3030/jsonstore/users");
        const data = await response.json();
        const users = Object.values(data);

        return users;
    }
}