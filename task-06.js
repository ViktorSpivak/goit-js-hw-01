let input;
let total = 0;

do {
  input = prompt("Введите число");
  if (input != null) {
    if (Number(input)) {
      total = total + Number.parseInt(input);
      console.log(total);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
} while (input != null);

alert(`Общая сумма чисел равна ${total}`);
