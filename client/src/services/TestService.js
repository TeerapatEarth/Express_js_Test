import axios from 'axios'

const hello = 'http://localhost:8888/hello'

class Services {
    static getMsg(){
        return axios.get(hello).then(response => {
            return response
        })
    }
}

export default Services