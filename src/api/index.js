// import axios from 'axios'

const axios = require('axios')
const url = 'https://covid19.mathdro.id/api'
const urlCountries = 'https://covid19.mathdro.id/api/countries'
const fetchAPI = async () => {
    try {
        const response = await axios.get(url)
        // console.log("fetchData -> response", response)
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
        const response = await axios.get(urlCountries)
        const nameCountries = response.data.countries.map(item => item.name)
        return nameCountries
    } catch (error) {
        console.log(error)
    }

}


module.exports = { fetchAPI, fetchAPIDataCountries }