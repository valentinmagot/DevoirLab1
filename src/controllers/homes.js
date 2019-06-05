/**
 * Controller for all home page related actions
 */
const { render, json } = require('server/reply');
const home = require('../models/home');

// Gets citys 
exports.getCitys = async () => {
    // let arr = context.query.name;
    let result = home.getCitys();
    return json(result);
};

// Gets Meals
exports.getMeals = async() => {
    let result = home.getMeals();
    return json(result);
}

// Gets Restaurants
exports.getRestaurants = async() => {
    let result = home.getRestaurants();
    return result;
}

// Gets Selected Restaurants
exports.getSelectedRestaurant = async() => {
    let result = home.getSelectedRestaurant();
    return json(result);
}

// Gets Selected Restaurants
exports.setSelectedRestaurant = async(context) => {
    let result = home.setSelecedRestaurant(context.query.name);
    return result;
}