import http from "../../../../lib/http";

export function loadUsers(page=0){
    return http.get("http://localhost:8050/api/v1/users", {params: {page:page, size:10}})
}