'use strict';
const total = 100;
let ordered = prompt("Введите заказ");
if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
