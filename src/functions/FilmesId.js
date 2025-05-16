import axios from "axios";

export default function FilmesId(mail, token, id) {
    return axios({
        method: "GET",
        url: `http://200.100.0.4:80/api/v2/movies/${id}`,
        params: {
            "data":{
                "session":{
                    "email": mail[0],
                    "access_token": token[0]
                }
                
            }
        }
    })
}