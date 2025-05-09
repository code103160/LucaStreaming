import axios from "axios";

export default function Generos(mail, token) {
    return axios({
        method: "GET",
        url: "http://200.100.0.10:80/api/v2/movies",
        params: {
            "data":{
                "user":{
                    "email":mail,
                    "access_token": token
                },

                "q":{
                    "title" : "",
                    "genre" : "",
                    "realease_date" : ""
                }
            }
        }
    })
}