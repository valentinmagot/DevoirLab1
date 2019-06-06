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

// Adds to order
exports.addToOrder = (context) =>{
    let name = context.query.name;
    let price = context.query.price;

    let result = home.addToOrder(name, price);

    return result;
}

// Gets current order
exports.getOrder = () => {
    let result = home.getOrder();
    return json(result);
}

// Deletes current order
exports.emptyOrder = () => {
    let result = home.emptyOrder();
    return result;
}

exports.getTotalPrice = async() => {
    let result = home.getTotalPrice();
    return json(result);
}

exports.setTotalPrice = async(context) => {
    let result = home.setTotalPrice(context.query.price);
    return result;
}

exports.setOrdered = async(context) => {
    let result = home.setOrdered(context.query.value);
    return result;
}

exports.getOrdered = async() => {
    let result = home.getOrdered();
    return json(result);
}