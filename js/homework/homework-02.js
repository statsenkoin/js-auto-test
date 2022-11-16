// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для
// замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних
// пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його
// підтвердження та основну інформацію: "що замовив, вартість та
// час доставки".

const restaurants = [
  {
    order: [],
    brand: 'KFC',
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: 'Burger King',
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];
const services = {
  showMenu(menu, brand) {
    // const menu = this.getMenu(restaurant);

    let menuMessage = `Choose items from ${brand} menu:\n`;
    menu.forEach((menuItem) => {
      menuMessage = menuMessage.concat(
        menuItem[0],
        ': ',
        menuItem[1],
        ' credits',
        '\n'
      );
    });
    console.log(menuMessage);
    return prompt(menuMessage);
  },

  getMenu({ menu }) {
    return Object.entries(menu);
  },

  addOrder(menu, order) {
    // console.log(menu, order);
    const orderStr = order.split(' ');
    // console.log(orderStr);
    let newOrder = [];
    orderStr.forEach((element) => {
      menu.forEach((menuItem) => {
        if (menuItem[0].localeCompare(element)) newOrder.push(menuItem);
      });
    });
    // console.log(newOrder);
    return newOrder;
  },

  confirmOrder() {},
};
const torpedaDelivery = {
  order: [],
  chosenBrand: '',
  chosenRestaurant: {},
  chooseMessage:
    'Choose your restaurant from the list.\nAvialable restaurants are:',

  getAvailableRestaurants(restaurants) {
    return restaurants.map((restaurant) => restaurant.brand);
  },

  chooseRestaurant() {
    const restaurantsList = this.getAvailableRestaurants(restaurants);
    // ------------------------------
    console.log(restaurantsList);
    // ------------------------------
    this.chosenBrand = prompt(
      this.chooseMessage + ` ${restaurantsList.join(', ')}`
    );

    return restaurants.find(
      (restaurant) => restaurant.brand === this.chosenBrand
    );
  },

  chooseDishes(restaurant) {
    const menu = services.getMenu(restaurant);

    // console.log('restaurant: ', restaurant);
    const orderStr = services.showMenu(menu, this.chosenBrand);
    // console.log(orderStr);
    this.order = services.addOrder(menu, orderStr);
    console.log(this.order);
  },

  chooseYourMeal() {
    this.chosenRestaurant = this.chooseRestaurant();
    this.chooseDishes(this.chosenRestaurant);
  },
};
torpedaDelivery.chooseYourMeal();
