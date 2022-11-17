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
    let menuMessage = `Choose items from ${brand} menu:`;
    // menu.forEach((menuItem) => {
    //   menuMessage = menuMessage.concat(
    //     menuItem[0],
    //     ': ',
    //     menuItem[1],
    //     ' credits',
    //     '\n'
    //   );
    // });

    // const menuItems = Object.keys(menu);
    // console.log('menuItems: ', menuItems);

    // menuItems.forEach(
    //   (item) =>
    //     (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
    // );
    // console.log('showMenu menuMessage:', menuMessage);

    Object.keys(menu).forEach(
      (item) =>
        (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
    );

    return prompt(menuMessage).split(' ');
  },

  getMenu(restaurant) {
    return (this.chosenMenu = { ...restaurant.menu });
  },

  addOrder(menu, orderedItems) {
    let newOrder = [];
    orderedItems.forEach((item) => {
      newOrder = { ...newOrder, [item]: menu[item] };
    });
    return newOrder;
  },

  confirmOrder({ order, deliveryTime }) {
    const menuItems = Object.keys(order).join(' and ');
    const totalCost = Object.values(order).reduce((a, b) => a + b);

    const confirmMessage = 'Your order is confirmed';
    const priceMessage = `Your ${menuItems} costs ${totalCost} credits`;
    const deliveryMessage = `Expected delivery time is ${deliveryTime} minutes`;
    alert(`${confirmMessage}\n${priceMessage}\n${deliveryMessage}`);
  },
};
const torpedaDelivery = {
  order: [],
  chosenBrand: '',
  chosenRestaurant: {},
  chosenMenu: {},
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

    this.chosenRestaurant = restaurants.find(
      (restaurant) => restaurant.brand === this.chosenBrand
    );
  },

  chooseDishes(restaurant) {
    this.chosenMenu = services.getMenu(restaurant);
    console.log('chosenMenu: ', this.chosenMenu);

    const orderedItems = services.showMenu(this.chosenMenu, this.chosenBrand);
    console.log('orderedItems: ', orderedItems);

    // this.order = services.addOrder(this.chosenMenu, orderedItems);
    // console.log('order: ', this.order);
    // this.chosenRestaurant.order = this.order;

    this.chosenRestaurant.order = services.addOrder(
      this.chosenMenu,
      orderedItems
    );
    console.log('this.chosenRestaurant: ', this.chosenRestaurant);
  },

  chooseYourMeal() {
    this.chooseRestaurant();
    console.log('chosenBrand: ', this.chosenBrand);
    console.log('choosenRestaurant: ', this.chosenRestaurant);

    this.chooseDishes(this.chosenRestaurant);

    services.confirmOrder(this.chosenRestaurant);
  },
};
torpedaDelivery.chooseYourMeal();
