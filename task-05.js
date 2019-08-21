let userChoice = prompt("Введите страну доставки");
let deliveryCountry;
let cost;
const china = "Китай";
const chili = "Чили";
const australia = "Австралия";
const india = "Индия";
const jamaiсa = "Ямайка";

if (userChoice) {
  switch (userChoice.toLowerCase()) {
    case china.toLowerCase():
      deliveryCountry = china;
      cost = 100;
      break;

    case chili.toLowerCase():
      deliveryCountry = chili;
      cost = 250;
      break;

    case australia.toLowerCase():
      deliveryCountry = australia;
      cost = 170;
      break;

    case india.toLowerCase():
      deliveryCountry = india;
      cost = 80;
      break;

    case jamaiсa.toLowerCase():
      deliveryCountry = jamaiсa;
      cost = 120;
      break;

    default:
      console.log("В вашей стране доставка не доступна");
      deliveryCountry = false;
  }
  if (deliveryCountry != false) {
    console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
  }
} else {
  console.log("Страна не выбрана");
}
