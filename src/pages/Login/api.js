import http from "../../lib/http";

export function LoginUser(credentials){
    return http.post('http://localhost:8050/api/v1/users/auth', credentials)
}