import axios from "axios";

export default function NewUser(email, senha) {
    return axios({
        method: "POST",
        url: "http://200.100.0.4:80/api/v2/user/registration",
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