function getShippingCost(country) {
  let message;
  // Change code below this line

  let price;

  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  // Change code above this line
  return message;
}

// ----------------------------------
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
