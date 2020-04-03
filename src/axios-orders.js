import axios from 'axios'

const instance = axios.create ({

    baseURL: process.env.DBLINK
})

export default instance;