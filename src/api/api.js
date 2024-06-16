import axios from "axios"

export default axios.create({
    baseURL: 'https://sequencia-rapida-server.onrender.com/',
    headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
})