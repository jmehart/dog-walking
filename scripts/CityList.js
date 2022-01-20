
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}


const walkerCities = getWalkerCities()


// The function needs the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []
    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {
    // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
    // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }
    // After the loop is done, return the assignments array
    return assignments
}

// Define a function that builds a string of city names. Needs a parameter for assignments array.
export const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""

    // Iterate the array of assignment objects
    for (const assignment of assignments) {

        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                // Add the name of the matching city to the string of city names
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }

    // After the loop is done, return the string
    return cityNames
}