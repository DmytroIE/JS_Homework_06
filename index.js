/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint linebreak-style: ["error", "windows"] */

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
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
    if (this._toppings.includes(topping)) {
      this._toppings.splice(this._toppings.indexOf(topping), 1);
    }
  }

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   *
   * Попробуйте сделать это геттером
   * чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
   */
  get toppings() {
    return this._toppings;
  }

  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
   */
  get size() {
    return this._size;
  }

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   *
   * Попробуйте сделать это геттером
   * чтобы можно было обращаться как obj.stuffing и нам вернет начинку
   */
  get stuffing() {
    return this._stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
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
   *
   * Попробуйте сделать это геттером
   * чтобы можно было обращаться как obj.calories и нам вернет сумму.
   */
  get calories() {
    const hamburgerBreadCalories = Hamburger.SIZES[this._size].calories;
    const hamburgerStuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
    const hamburgerToppingCalories = Object.entries(Hamburger.TOPPINGS)
      .reduce((acc, curr) => acc + curr[1].calories * Number(this._toppings.includes(curr[0])), 0);
    return hamburgerBreadCalories + hamburgerStuffingCalories + hamburgerToppingCalories;
  }
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/
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

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZESMALL,
  Hamburger.STUFFINGCHEESE,
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPINGSPICE);

// Спросим сколько там калорий
console.log('Calories: ', hamburger.calories);

// Сколько стоит?
console.log('Price: ', hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPINGSAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ', hamburger.price);

// Проверить, большой ли гамбургер?
console.log('Is hamburger large: ', hamburger.size === Hamburger.SIZELARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPINGSPICE);

// Смотрим сколько добавок
console.log('Hamburger has %d toppings', hamburger.toppings.length); // 1

// Дополнительные проверки

// Большой гамбургер с мясом
const largeGamburger = new Hamburger(
  Hamburger.SIZELARGE,
  Hamburger.STUFFINGMEAT,
);

largeGamburger.addTopping(Hamburger.TOPPINGSAUCE);
console.log('Calories: ', largeGamburger.calories); // 120
console.log('Price: ', largeGamburger.price); // 100
console.log('Hamburger has %d toppings', largeGamburger.toppings.length); // 1
largeGamburger.removeTopping(Hamburger.TOPPINGSPICE);// Нет такого топпинга, ничего не удаляется
console.log('Hamburger has %d toppings', largeGamburger.toppings.length); // 1
largeGamburger.removeTopping(Hamburger.TOPPINGSAUCE);// А такой есть
console.log('Hamburger has %d toppings', largeGamburger.toppings.length); // 0
largeGamburger.addTopping(Hamburger.TOPPINGSPICE);// Добавляем другой топпинг
console.log('Hamburger has %d toppings', largeGamburger.toppings.length); // 1
console.log('Calories: ', largeGamburger.calories); // 115
console.log('Price: ', largeGamburger.price); // 95
largeGamburger.addTopping(Hamburger.TOPPINGSAUCE);
console.log('Hamburger has %d toppings', largeGamburger.toppings.length); // 2
console.log('Calories: ', largeGamburger.calories); // 120
console.log('Price: ', largeGamburger.price); // 110
