import http from "../../lib/http";

export function signUp(body){
    return http.post('http://localhost:8050/api/v1/users', body)
}