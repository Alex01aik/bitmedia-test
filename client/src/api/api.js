export const API = {
    getUsers: async(page) => {
        return await fetch(`http://localhost:4200/users?page=${page}`)
        .then(response => response.json())
    },
    getUserStatistics: async(userId) => {
        return await fetch(`http://localhost:4200/user/${userId}`)
        .then(response => response.json())
    }
}