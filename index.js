/** A simple HTTP server */
const server = require('server');
const { get, post } = server.router;
const { render } = server.reply;
const home = require('./src/controllers/homes')

// Server options
const options = {
    port: 8081,
    public: 'src/assets',   // static assets
    views: 'src/views'      // views used to render the response
};

// Launch the server
server(
    options,
    [        
        get('/', ctx => render('home.html')),// homepage
        get('/restaurantList.html', ctx => render('restaurantList.html')),// restaurantpage
        get('/menuPage.html', ctx => render('menuPage.html')),// menupage
        get('/orderSummary.html', ctx => render('orderSummary.html')),// summary page
        get('/orderConfirmation.html', ctx => render('orderConfirmation.html')),// confirmation page
        get('/home/getCitys', home.getCitys),
        get('/home/getMeals', home.getMeals),
        get('/home/getRestaurants', home.getRestaurants),
        get('/home/getSelectedRestaurant', home.getSelectedRestaurant),
        get('/home/setSelectedRestaurant', home.setSelectedRestaurant),
        get('/home/addToOrder', home.addToOrder),
        get('/home/getOrder', home.getOrder),
        get('/home/emptyOrder', home.emptyOrder),
        get('/home/getTotalPrice', home.getTotalPrice),
        get('/home/setTotalPrice', home.setTotalPrice),
        get('/home/getOrdered', home.getOrdered),
        get('/home/setOrdered', home.setOrdered),
        get('/home/setSelectedCity', home.setSelectedCity),
        get('/home/getSelectedCity', home.getSelectedCity)
    ]
).then(ctx => {
    console.log(`Server is running on port ${ctx.options.port}`);
});