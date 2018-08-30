/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint linebreak-style: ["error", "windows"] */

class Hamburger {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    }
  }

  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    const newToppings = this._toppings.filter(item => item !== topping);
    this._toppings = newToppings;
  }

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   */
  get toppings() {
    return this._toppings;
  }

  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   */
  get size() {
    return this._size;
  }

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   */
  get stuffing() {
    return this._stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   */
  get price() {
    const hamburgerBreadPrice = Hamburger.SIZES[this._size].price;
    const hamburgerStuffingPrice = Hamburger.STUFFINGS[this._stuffing].price;
    const hamburgerToppingPrice = Object.entries(Hamburger.TOPPINGS)
      .reduce((acc, curr) => acc + curr[1].price * Number(this._toppings.includes(curr[0])), 0);
    return hamburgerBreadPrice + hamburgerStuffingPrice + hamburgerToppingPrice;
  }

  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   */
  get calories() {
    const hamburgerBreadCalories = Hamburger.SIZES[this._size].calories;
    const hamburgerStuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
    const hamburgerToppingCalories = Object.entries(Hamburger.TOPPINGS)
      .reduce((acc, curr) => acc + curr[1].calories * Number(this._toppings.includes(curr[0])), 0);
    return hamburgerBreadCalories + hamburgerStuffingCalories + hamburgerToppingCalories;
  }
}

Hamburger.SIZESMALL = 'SIZESMALL';
Hamburger.SIZELARGE = 'SIZELARGE';

Hamburger.SIZES = {
  [Hamburger.SIZESMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZELARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFINGCHEESE = 'STUFFINGCHEESE';
Hamburger.STUFFINGSALAD = 'STUFFINGSALAD';
Hamburger.STUFFINGMEAT = 'STUFFINGMEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFINGCHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFINGSALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFINGMEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPINGSPICE = 'TOPPINGSPICE';
Hamburger.TOPPINGSAUCE = 'TOPPINGSAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPINGSPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPINGSAUCE]: {
    price: 15,
    calories: 5,
  },
};

const hamburger = new Hamburger(
  Hamburger.SIZESMALL,
  Hamburger.STUFFINGCHEESE,
);

hamburger.addTopping(Hamburger.TOPPINGSPICE);

console.log('Calories: ', hamburger.calories);

console.log('Price: ', hamburger.price);

hamburger.addTopping(Hamburger.TOPPINGSAUCE);

console.log('Price with sauce: ', hamburger.price);

console.log('Is hamburger large: ', hamburger.size === Hamburger.SIZELARGE);

hamburger.removeTopping(Hamburger.TOPPINGSPICE);

console.log('Hamburger has %d toppings', hamburger.toppings.length); // 1

const largeGamburger = new Hamburger(
  Hamburger.SIZELARGE,
  Hamburger.STUFFINGMEAT,
);

largeGamburger.addTopping(Hamburger.TOPPINGSAUCE);
console.log('Calories: ', largeGamburger.calories);
console.log('Price: ', largeGamburger.price);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length);
largeGamburger.removeTopping(Hamburger.TOPPINGSPICE);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length);
largeGamburger.removeTopping(Hamburger.TOPPINGSAUCE);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length);
largeGamburger.addTopping(Hamburger.TOPPINGSPICE);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length);
console.log('Calories: ', largeGamburger.calories);
console.log('Price: ', largeGamburger.price);
largeGamburger.addTopping(Hamburger.TOPPINGSAUCE);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length);
console.log('Calories: ', largeGamburger.calories);
console.log('Price: ', largeGamburger.price); //
