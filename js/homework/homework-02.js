// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для
// замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних
// пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його
// підтвердження та основну інформацію: "що замовив, вартість та
// час доставки".

// const restaurants = [
//   {
//     order: [],
//     brand: 'KFC',
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: 'mcDonalds',
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: 'Burger King',
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];
// const services = {
//   showMenu(menu, brand) {
//     let menuMessage = `Choose items from ${brand} menu:`;
//     // menu.forEach((menuItem) => {
//     //   menuMessage = menuMessage.concat(
//     //     menuItem[0],
//     //     ': ',
//     //     menuItem[1],
//     //     ' credits',
//     //     '\n'
//     //   );
//     // });

//     // const menuItems = Object.keys(menu);
//     // console.log('menuItems: ', menuItems);

//     // menuItems.forEach(
//     //   (item) =>
//     //     (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
//     // );
//     // console.log('showMenu menuMessage:', menuMessage);

//     Object.keys(menu).forEach(
//       (item) =>
//         (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
//     );

//     return prompt(menuMessage).split(' ');
//   },

//   getMenu(restaurant) {
//     return (this.chosenMenu = { ...restaurant.menu });
//   },

//   addOrder(menu, orderedItems) {
//     let newOrder = [];
//     orderedItems.forEach((item) => {
//       newOrder = { ...newOrder, [item]: menu[item] };
//     });
//     return newOrder;
//   },

//   confirmOrder({ order, deliveryTime }) {
//     const menuItems = Object.keys(order).join(' and ');
//     const totalCost = Object.values(order).reduce((a, b) => a + b);

//     const confirmMessage = 'Your order is confirmed';
//     const priceMessage = `Your ${menuItems} costs ${totalCost} credits`;
//     const deliveryMessage = `Expected delivery time is ${deliveryTime} minutes`;
//     alert(`${confirmMessage}\n${priceMessage}\n${deliveryMessage}`);
//   },
// };
// const torpedaDelivery = {
//   order: [],
//   chosenBrand: '',
//   chosenRestaurant: {},
//   chosenMenu: {},
//   chooseMessage:
//     'Choose your restaurant from the list.\nAvialable restaurants are:',

//   getAvailableRestaurants(restaurants) {
//     return restaurants.map((restaurant) => restaurant.brand);
//   },

//   chooseRestaurant() {
//     const restaurantsList = this.getAvailableRestaurants(restaurants);
//     // ------------------------------
//     console.log(restaurantsList);
//     // ------------------------------
//     this.chosenBrand = prompt(
//       this.chooseMessage + ` ${restaurantsList.join(', ')}`
//     );

//     this.chosenRestaurant = restaurants.find(
//       (restaurant) => restaurant.brand === this.chosenBrand
//     );
//   },

//   chooseDishes(restaurant) {
//     this.chosenMenu = services.getMenu(restaurant);
//     console.log('chosenMenu: ', this.chosenMenu);

//     const orderedItems = services.showMenu(this.chosenMenu, this.chosenBrand);
//     console.log('orderedItems: ', orderedItems);

//     // this.order = services.addOrder(this.chosenMenu, orderedItems);
//     // console.log('order: ', this.order);
//     // this.chosenRestaurant.order = this.order;

//     this.chosenRestaurant.order = services.addOrder(
//       this.chosenMenu,
//       orderedItems
//     );
//     console.log('this.chosenRestaurant: ', this.chosenRestaurant);
//   },

//   chooseYourMeal() {
//     this.chooseRestaurant();
//     console.log('chosenBrand: ', this.chosenBrand);
//     console.log('choosenRestaurant: ', this.chosenRestaurant);

//     this.chooseDishes(this.chosenRestaurant);

//     services.confirmOrder(this.chosenRestaurant);
//   },
// };
// // torpedaDelivery.chooseYourMeal();

// ----------------------------------------------------------------------------
// ----- regular expressions --------------------------------------------------
// const str1 = 'qwe wer,dsa   dfr ; $: hyt';
// console.log(str1.split(/\W+/));
// ----------------------------------------------------------------------------

// ============================================================================
// ===== version 2 ============================================================
// ============================================================================

// const restaurants = [
//   {
//     order: {},
//     brand: 'KFC',
//     menu: {
//       chicken: 50,
//       burger: 50,
//       cola: 27,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: {},
//     brand: 'mcDonalds',
//     menu: {
//       cola: 25,
//       sprite: 22,
//       cheeseburger: 30,
//       humburger: 37,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: {},
//     brand: 'Burger King',
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//       sprite: 25,
//     },
//     deliveryTime: 20,
//   },
// ];
// const services = {
//   showMenu(menu) {
//     let menuMessage = `Choose items from menu:`;
//     Object.keys(menu).forEach(
//       (item) =>
//         (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
//     );
//     const userMenu = prompt(menuMessage);

//     if (!torpedaDelivery.checkUserInput(userMenu)) return;

//     return userMenu;
//   },

//   getMenu(restaurant) {
//     return (this.chosenMenu = restaurant.menu);
//   },

//   addOrder(menu, orderedItems) {
//     // const myMenu = Object.keys(menu).filter((item) =>
//     //   orderedItems.toLowerCase().includes(item.toLowerCase())
//     // );
//     let newOrder = {};
//     Object.keys(menu)
//       .filter((item) => orderedItems.toLowerCase().includes(item.toLowerCase()))
//       .forEach((item) => {
//         newOrder = { ...newOrder, [item]: menu[item] };
//       });
//     return newOrder;
//   },

//   confirmOrder({ order, deliveryTime }) {
//     const menuItems = Object.keys(order).join(' and ');
//     const totalCost = Object.values(order).reduce((a, b) => a + b);

//     const confirmMessage = 'Your order is confirmed';
//     const priceMessage = `Your ${menuItems} costs ${totalCost} credits`;
//     const deliveryMessage = `Expected delivery time is ${deliveryTime} minutes`;
//     alert(`${confirmMessage}\n${priceMessage}\n${deliveryMessage}`);
//   },
// };
// const torpedaDelivery = {
//   order: {},
//   chosenRestaurant: {},
//   chosenMenu: {},

//   getAvailableRestaurants(restaurants) {
//     return restaurants.map((restaurant) => restaurant.brand);
//   },

//   chooseRestaurant() {
//     const restaurantsList = this.getAvailableRestaurants(restaurants);
//     // ------------------------------
//     console.log('restaurantsList: ', restaurantsList);
//     // ------------------------------

//     const chooseMessage =
//       'Choose your restaurant from the list.\nAvialable restaurants are:';
//     let userInput = prompt(`${chooseMessage} ${restaurantsList.join(', ')}`);

//     if (!this.checkUserInput(userInput)) return;

//     const chosenBrand = restaurantsList.find((item) =>
//       userInput.toLowerCase().includes(item.toLowerCase())
//     );

//     this.chosenRestaurant = restaurants.find(
//       (restaurant) => restaurant.brand === chosenBrand
//     );

//     // ---------------------------------------------------------
//     console.log('chosenBrand: ', chosenBrand);
//     console.log('choosenRestaurant: ', this.chosenRestaurant);
//     // ---------------------------------------------------------
//   },

//   chooseDishes(restaurant) {
//     this.chosenMenu = services.getMenu(restaurant);
//     console.log('chosenMenu: ', this.chosenMenu);

//     const orderedItems = services.showMenu(this.chosenMenu);
//     console.log('orderedItems: ', orderedItems);

//     if (orderedItems) {
//       this.chosenRestaurant.order = services.addOrder(
//         this.chosenMenu,
//         orderedItems
//       );
//       console.log('this.chosenRestaurant: ', this.chosenRestaurant);
//     }
//   },

//   checkUserInput(input) {
//     if (input === null) {
//       alert('Cancelled by user');
//       return null;
//     }

//     if (input === '') {
//       alert('Invalid input. Try again...');
//       this.chooseRestaurant();
//       return null;
//     }

//     return true;
//   },

//   chooseYourMeal() {
//     this.chooseRestaurant();
//     console.log('this.chosenRestaurant: ', this.chosenRestaurant);
//     if (this.chosenRestaurant) this.chooseDishes(this.chosenRestaurant);
//     services.confirmOrder(this.chosenRestaurant);
//     this.order = {};
//     console.log('order: ', this.order);
//   },
// };
// torpedaDelivery.chooseYourMeal();
// // torpedaDelivery.chooseRestaurant();

// ============================================================================
// ===== version 3 ============================================================
// ============================================================================

const restaurants = [
  {
    order: {},
    brand: 'KFC',
    menu: {
      chicken: 50,
      burger: 50,
      cola: 27,
    },
    deliveryTime: 60,
  },
  {
    order: {},
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      sprite: 22,
      cheeseburger: 30,
      humburger: 37,
    },
    deliveryTime: 30,
  },
  {
    order: {},
    brand: 'BurgerKing',
    menu: {
      burgerXXL: 170,
      burger: 70,
      sprite: 25,
    },
    deliveryTime: 20,
  },
];
const services = {
  showMenu(menu) {
    let menuMessage = `Choose items from menu:`;
    Object.keys(menu).forEach(
      (item) =>
        (menuMessage = menuMessage + `\n ${item}: ${menu[item]} credits`)
    );
    torpedaDelivery.userInput = torpedaDelivery.getUserInput(menuMessage);
  },

  getMenu(restaurant) {
    return (this.chosenMenu = restaurant.menu);
  },

  addOrder(menu, orderedItems) {
    // const myMenu = Object.keys(menu).filter((item) =>
    //   orderedItems.toLowerCase().includes(item.toLowerCase())
    // );
    let newOrder = {};
    Object.keys(menu)
      .filter((item) => orderedItems.toLowerCase().includes(item.toLowerCase()))
      .forEach((item) => {
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
  order: {},
  chosenRestaurant: {},
  chosenMenu: {},
  userInput: '',

  getAvailableRestaurants(restaurants) {
    return restaurants.map((restaurant) => restaurant.brand.toLowerCase());
  },

  chooseRestaurant() {
    const restaurantsList = this.getAvailableRestaurants(restaurants);
    // ------------------------------
    console.log('restaurantsList: ', restaurantsList);
    // ------------------------------

    const chooseMessage = `Choose your restaurant from the list.\nAvialable restaurants are: ${restaurantsList.join(
      ', '
    )}`;

    this.userInput = this.getUserInput(chooseMessage);
    // --------------------------------
    console.log('userInput: ', this.userInput);
    // --------------------------------
    if (!this.userInput) return;

    const chosenBrand = this.userInput.find((item) =>
      restaurantsList.includes(item)
    );

    this.chosenRestaurant = restaurants.find(
      (restaurant) => restaurant.brand.toLowerCase() === chosenBrand
    );

    // ---------------------------------------------------------
    console.log('chosenBrand: ', chosenBrand);
    console.log('choosenRestaurant: ', this.chosenRestaurant);
    // ---------------------------------------------------------
  },

  chooseDishes(restaurant) {
    this.chosenMenu = services.getMenu(restaurant);
    console.log('chosenMenu: ', this.chosenMenu);

    const orderedItems = services.showMenu(this.chosenMenu);
    console.log('orderedItems: ', orderedItems);

    if (orderedItems) {
      this.chosenRestaurant.order = services.addOrder(
        this.chosenMenu,
        orderedItems
      );
      console.log('this.chosenRestaurant: ', this.chosenRestaurant);
    }
  },

  getUserInput(message) {
    let input = '';
    while (!input) {
      input = prompt(message);
      if (input === null) {
        alert('Cancelled by user');
        return;
      }

      if (input === '') {
        alert('Invalid input. Try again...');
        continue;
      }
      return input.toLowerCase().split(/\W+/);
    }
  },

  chooseYourMeal() {
    this.chooseRestaurant();
    if (!this.userInput) return;

    this.chooseDishes(this.chosenRestaurant);

    services.confirmOrder(this.chosenRestaurant);
    this.order = {};
    console.log('order: ', this.order);
  },
};
torpedaDelivery.chooseYourMeal();
// torpedaDelivery.chooseRestaurant();
