let credits = 23580;
let creditsBalance;
const pricePerDroid = 3000;
let quantityDroid = prompt("Введите кол-во дроидов");
if (quantityDroid === null) {
  console.log("Отменено пользователем!");
} else {
  if (quantityDroid * pricePerDroid > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    creditsBalance = credits - quantityDroid * pricePerDroid;
    console.log(
      `Вы купили ${quantityDroid} дроидов, на счету осталось ${creditsBalance} кредитов.`
    );
  }
}
