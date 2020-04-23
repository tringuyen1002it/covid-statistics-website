import axios from 'axios'

// const axios = require('axios')

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const response = await axios.get(url)
        const { data: { confirmed, deaths, recovered } } = response
        // const { confirmed, deaths, recovered } = data
        const newData = {
            confirmed,
            deaths,
            recovered
        }
        console.log("fetchData -> newData", newData)
        // return newData
        return newData
    } catch (error) {
        console.log(error)
    }
}
