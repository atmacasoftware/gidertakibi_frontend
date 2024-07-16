import http from "../../lib/http";

export function Login(){
    return http.post('http://localhost:8050/api/v1/users/auth', body)
}