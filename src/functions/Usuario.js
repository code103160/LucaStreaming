import axios from "axios";

export default function Usuario(email, senha) {
    return axios({
        method: "POST",
        url: "http://200.100.0.11:80/api/v2/session/create",
        params: {
            "data":{
                "user":{
                    "email": email,
                    "password": senha
                }
            }
        }
    })
}