import http from "../../../../lib/http";

export function updateUser(id, body){
    return http.put(`http://localhost:8050/api/v1/users/${id}`, body)
}