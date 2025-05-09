import axios from "axios";

export default function Filmes(mail, toke) {
    console.log(mail)
    console.log(toke)
    return axios({
        method: "GET",
        url: "http://200.100.0.11:80/api/v2/movies",
        params: {
            "data": {
                "session":{
                    "email": mail[0],
                    "access_token": toke[0]
                }
            }
        }
    })
}