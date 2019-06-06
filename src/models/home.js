/**
 * Home model object
 */

// Test data
// TODO: move this into a database

let selected_restaurant = "";

let selected_city= "";

let selected_meal = "";

let  totalPrice = "";

let order = [];

let ordered;

let citys = [
    "Toronto",
    "Ottawa",
    "Hamilton",
    "Oshawa",
    "Kitchener",
    "London",
    "Windsor",
    "Barrie",
    "Sudbury",
    "Sarnia",
    "Kingston",
    "Thunder Bay",
    "Peterborough",
    "North Bay",
    "Cornwall",
    "Belleville",
    "Orillia",
    "Timmins",
    "Orangeville",
    "Brockville",
    "Owen Sound",
    "Pembroke",
    "Kenora",
    "Kapuskasing",
    "Dryden",
    "Parry Sound",
    "New Liskeard",
    "Hearst",
    "Marathon",
    "Cochrane",
    "Deer Lake",
    "Atikokan",
    "Chapleau",
    "Wiarton",
    "Wawa",
    "Attawapiskat", 
    "Red Lake",
    "Moosonee",
    "Little Current",
    "Thessalon",
    "Cobalt",
    "Geraldton",
    "Nipigon",
    "Cat Lake",
    "Fort Severn",
    "Lansdowne House",
    "Big Beaverhouse",

];
let meals = [
    "Breakfast",
    "Lunch",
    "Diner",
];

let restaurants = [
    {   
        id: 0,
        name: "Nandos",
        location:"90 Elgin Street Unit 3, Ottawa, K1P 5E9",
        min_price: "02.00$", 
        max_price: "65.00$",
        score:"5",
        typeOfFood:"Chiken, grill", 
        hours: [
          {day:"Lundi: ", hour:"11:00 am-11:00 pm"}, 
          {day:"Mardi: ", hour:"11:00 am-11:00 pm"}, 
          {day:"Mercredi: ", hour:"11:00 am-11:00 pm"}, 
          {day:"Jeudi: ", hour:"null"}, 
          {day:"Vendredi: ", hour:"11:00 am-12:00 am"}, 
          {day:"Samedi: ", hour:"11:00 am-12:00 am"}, 
          {day:"Dimanche: ", hour:"11:00 am-11:00 pm"}
        ], 
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Nandos_logo.svg", 
        menu: {
            appetizers:[
                {id: 0, name: "Garlic Bread", meal:"lunch, diner", description: "Stone-baked Portuguese roll smothered in garlic and herb spread.", price: "450.25$",  img: null },
                {id: 1, name: "Hummus with PERi-PERi Drizzle", meal:"lunch, diner", description: "Tangy PERi-PERi infused oil poured over creamy hummus. Dig in with chunks of warm pita. ", price: "6.25", img: null },
                {id: 2, name: "PERi-PERi Nuts", meal:"lunch, diner", description: "Almonds, cashews, macadamias - crunch with a punch. ", price: "4.25",  img: null},
            ],
            mains: [
                {id: 0, name: "1/2 Chicken", meal:"lunch, diner", description: "First time at Nando's? Look no further than our signature 1/2 chicken. ", price: "14.45$",  img: null },
                {id: 1, name: '1/4 Chicken – Breast', meal:"lunch, diner", description: "Succulent and saucy.", price: "11.85$", img: null },
                {id: 2, name: "Double Skewers", meal:"lunch, diner", description: "Two skewers of marinated chicken tenders.", price: "11.85", img: null},
                {id: 3, name: "Chicken Sandwich", meal:"lunch, diner", description: "Grilled chicken breast served with crispy leaf lettuce, tomato and PERinaise on a stone-baked Portuguese roll.", price: "11.25$", img: null },
                {id: 4, name: 'Chicken Wrap', meal:"lunch, diner", description: "Grilled chicken tenders with leaf lettuce, tomato, cucumber, sweet chilli jam and our tangy cilantro yogurt.", price: "11.25$", img: null },
            ],
            dessert: [
                {id: 0, name: "Naughty Natas", meal:"lunch, diner", description: "Traditional Portuguese custard tart",  price: '2.65$',   img: null },
                {id: 1, name: "Nando's Kisses", meal:"lunch, diner", description: "Dark chocolate ice cream centered in milk chocolate ice cream, rolled in chocolate shavings",  price: "4.25$",   img: null },
                {id: 2, name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "6.25$",   img: null },
            ]

        },
    },
    {   
        id: 1,
        name: "Pizza Hut",
        location:"855 Bank St Ottawa, ON K1S 3W2",
        min_price: "03.00$", 
        max_price: "60.00$",
        score:"3", 
        typeOfFood:"Pizza",
        hours: [
            {day:"Lundi: ", hour:"11:00 am-11:00 pm"}, 
            {day:"Mardi: ", hour:"11:00 am-11:00 pm"}, 
            {day:"Mercredi: ", hour:""}, 
            {day:"Jeudi: ", hour:""}, 
            {day:"Vendredi: ", hour:"11:00 am-12:00 am"}, 
            {day:"Samedi: ", hour:"11:00 am-12:00 am"}, 
            {day:"Dimanche: ", hour:"11:00 am-11:00 pm"}
          ],  
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/Pizza_Hut_logo.svg", 
        menu: {
            appetizers:[
                {id: 0, name: "Garlic Bread", meal:"lunch, diner", description: "Stone-baked Portuguese roll smothered in garlic and herb spread.", price: "4.25$",  img: null },
                {id: 1, name: "Hummus with PERi-PERi Drizzle", meal:"lunch, diner", description: "Tangy PERi-PERi infused oil poured over creamy hummus. Dig in with chunks of warm pita. ", price: "6.25", img: null },
                {id: 2, name: "PERi-PERi Nuts", meal:"lunch, diner", description: "Almonds, cashews, macadamias - crunch with a punch. ", price: "4.25",  img: null},
            ],
            mains: [
                {id: 0, name: "1/2 Chicken", meal:"lunch, diner", description: "First time at Nando's? Look no further than our signature 1/2 chicken. ", price: "14.45$",  img: null },
                {id: 1, name: '1/4 Chicken – Breast', meal:"lunch, diner", description: "Succulent and saucy.", price: "11.85$", img: null },
                {id: 2, name: "Double Skewers", meal:"lunch, diner", description: "Two skewers of marinated chicken tenders.", price: "11.85", img: null},
                {id: 3, name: "Chicken Sandwich", meal:"lunch, diner", description: "Grilled chicken breast served with crispy leaf lettuce, tomato and PERinaise on a stone-baked Portuguese roll.", price: "11.25$", img: null },
                {id: 4, name: 'Chicken Wrap', meal:"lunch, diner", description: "Grilled chicken tenders with leaf lettuce, tomato, cucumber, sweet chilli jam and our tangy cilantro yogurt.", price: "11.25$", img: null },
            ],
            dessert: [
                {id: 0, name: "Naughty Natas", meal:"lunch, diner", description: "Traditional Portuguese custard tart",  price: '2.65$',   img: null },
                {id: 1, name: "Nando's Kisses", meal:"lunch, diner", description: "Dark chocolate ice cream centered in milk chocolate ice cream, rolled in chocolate shavings",  price: "4.25$",   img: null },
                {id: 2, name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "6.25$",   img: null },
            ]

        },
    },
    {   
        id: 2,
        name: "Chipotle",
        location:"201C-50 Rideau Rue, Ottawa, ON K1N 9J7",
        min_price: "05.00$", 
        max_price: "50.00$",
        score:"4", 
        typeOfFood:"Mexican",
        hours: [
            {day:"Lundi: ", hour:"11:00 am-11:00 pm"}, 
            {day:"Mardi: ", hour:"11:00 am-11:00 pm"}, 
            {day:"Mercredi: ", hour:""}, 
            {day:"Jeudi: ", hour:"11:00 am-11:00 pm"}, 
            {day:"Vendredi: ", hour:"11:00 am-12:00 am"}, 
            {day:"Samedi: ", hour:"11:00 am-12:00 am"}, 
            {day:"Dimanche: ", hour:"11:00 am-11:00 pm"}
          ], 
        logo: "https://www.fnasafety.com/wp-content/uploads/2018/10/chipotle-mexican-grill-logo-png-transparent.png", 
        menu: {
            appetizers:[
                {id: 0, name: "Garlic Bread", meal:"lunch, diner", description: "Stone-baked Portuguese roll smothered in garlic and herb spread.", price: "4.25$",  img: null },
                {id: 1, name: "Hummus with PERi-PERi Drizzle", meal:"lunch, diner", description: "Tangy PERi-PERi infused oil poured over creamy hummus. Dig in with chunks of warm pita. ", price: "6.25", img: null },
                {id: 2, name: "PERi-PERi Nuts", meal:"lunch, diner", description: "Almonds, cashews, macadamias - crunch with a punch. ", price: "4.25",  img: null},
            ],
            mains: [
                {id: 0, name: "1/2 Chicken", meal:"lunch, diner", description: "First time at Nando's? Look no further than our signature 1/2 chicken. ", price: "14.45$",  img: null },
                {id: 1, name: '1/4 Chicken – Breast', meal:"lunch, diner", description: "Succulent and saucy.", price: "11.85$", img: null },
                {id: 2, name: "Double Skewers", meal:"lunch, diner", description: "Two skewers of marinated chicken tenders.", price: "11.85", img: null},
                {id: 3, name: "Chicken Sandwich", meal:"lunch, diner", description: "Grilled chicken breast served with crispy leaf lettuce, tomato and PERinaise on a stone-baked Portuguese roll.", price: "11.25$", img: null },
                {id: 4, name: 'Chicken Wrap', meal:"lunch, diner", description: "Grilled chicken tenders with leaf lettuce, tomato, cucumber, sweet chilli jam and our tangy cilantro yogurt.", price: "11.25$", img: null },
            ],
            dessert: [
                {id: 0, name: "Naughty Natas", meal:"lunch, diner", description: "Traditional Portuguese custard tart",  price: '2.65$',   img: null },
                {id: 1, name: "Nando's Kisses", meal:"lunch, diner", description: "Dark chocolate ice cream centered in milk chocolate ice cream, rolled in chocolate shavings",  price: "4.25$",   img: null },
                {id: 2, name: "Chocolate Cake", meal:"lunch, diner", description: "Dark chocolate cake and chocolate fudge nestled between layers of decadent chocolate icing.",  price: "6.25$",   img: null },
            ]

        },
    },
    
];


// Gets list of citys
exports.getCitys = () => {
    return citys;
};

// Gets list of meals
exports.getMeals = () => {
    return meals;
};

// Gets list of restaurants
exports.getRestaurants = () => {
    return restaurants;
};

exports.getSelectedRestaurant = () => {

    return selected_restaurant;
}

exports.setSelecedRestaurant = (restoname) => {
    selected_restaurant = restoname;
    
    return true;
}

exports.addToOrder = (name, price) =>{
    order.push({itemName: name, itemPrice: price });
    return true;
}

exports.getOrder = () => {
    return order;
}

exports.emptyOrder = () => {
    order = [];
    return true;
}

exports.setTotalPrice = (price) => {
    totalPrice = price;

    return true;
}

exports.setSelectedMeal = (meal) => {
    selected_meal = meal;

    return true;
}

exports.setSelectedCity = (city) => {
    selected_city = city;

    return true;
}



exports.getTotalPrice = () => {
    return totalPrice;
}

exports.getSelectedCity = () => {
    return selected_city;
}

exports.getSelectedMeal= () => {
    return selected_meal;
}

exports.setOrdered = (value) => {
    ordered = value;

    return true;
}

exports.getOrdered = () => {
    return ordered;
}


