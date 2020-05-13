// import axios from 'axios'
const axios = require('axios')
const url = 'https://covid19.mathdro.id/api'
const urlCountries = 'https://covid19.mathdro.id/api/confirmed'
const fetchAPI = async () => {
    try {
        const response = await axios.get(url)
        console.log("fetchData -> response", response)
        const { data: { confirmed, deaths, recovered, lastUpdate } } = response
        // const { confirmed, deaths, recovered } = data
        const newData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        // return newData
        return newData
    } catch (error) {
        console.log(error)
    }
}
const fetchAPIDataCountries = async () => {
    try {
        const { data } = await axios.get(urlCountries)
        return data
    } catch (error) {
        console.log(error)
    }
}


module.exports = { fetchAPI, fetchAPIDataCountries }