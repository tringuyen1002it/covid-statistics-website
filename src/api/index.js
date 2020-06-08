// import axios from 'axios'
import Geocode from "react-geocode";
import Promise from 'bluebird';
const axios = require('axios')
const _ = require('lodash')
// const setApiKey  = require('react-geocode')
const url = 'https://covid19.mathdro.id/api'
const urlCountries = 'https://covid19.mathdro.id/api/confirmed'
const urlCountry = 'https://covid19.mathdro.id/api/countries'

export const fetchAPI = async () => {
    try {
        const response = await axios.get(url)
        console.log("fetchData -> response", response)
        const { data: { confirmed, deaths, recovered, lastUpdate } } = response
        const newData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        return newData
    } catch (error) {
        console.log(error)
    }
}
export const fetchAPIDataCountries = async () => {
    try {
        const response = await axios.get(urlCountry);
        const { data } = response
        const { countries } = data
        const newData = _.map(countries, item => ({ name: item.name }))
        // console.log("fetchAPIDataCountries -> newData", newData)
        return newData
    } catch (error) {
        return error;
    }
}

export const fetchAPIDataCountryCovid = async (country) => {
    let changeableUrl = urlCountry;
    if (country) {
        changeableUrl = `${urlCountry}/${country}`;
    }
    try {
        const response = await axios.get(changeableUrl)
        const { data: { confirmed, deaths, recovered, lastUpdate } } = response
        const newData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        return newData
    } catch (error) {
        return console.log(error);
    }
}

export const fetchDataAPICountriesCovid = async () => {
    try {
        const response = await axios.get(url)

        // console.log("fetchData -> response", response)
        const { data: { confirmed, deaths, recovered, lastUpdate } } = response
        const newData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
        return newData
    } catch (error) {
        console.log(error)
    }


}
export const fetchDataMapCovid = async () => {
    try {
        const response = await axios.get(urlCountry)
        const { data } = response
        const { countries } = data
        const newData = _.map(countries, 'name')
        console.log("fetchDataMapCovid -> newData", newData)
        const array = await _.forEach(newData, country => axios.get(`${urlCountry}/${country}`))
        // const array = await `${urlCountry}/${USA}`;
        console.log("fetchDataMapCovid -> array", array)
        return response
    } catch (error) {
        console.log(error)
    }
}