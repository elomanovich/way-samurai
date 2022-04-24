import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '434b361a-846a-4ba6-beeb-f4bcdd2d7383'
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {})
            .then(response => response.data)
    }
}
