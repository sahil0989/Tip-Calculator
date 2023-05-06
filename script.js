const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let numbOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  let bill = Number(billInput.value);

  let tip = Number(tipInput.value);

  let totalTip = (tip * bill) / 100;

  let totalAmount = totalTip + bill;

  let perPerson = totalAmount / numbOfPeople;

  perPersonTotal.innerHTML = `₹ ${perPerson.toFixed(2)}`;

}

const increasePeople = () => {
  numbOfPeople++;

  numberOfPeopleDiv.innerHTML = numbOfPeople;

  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if (numbOfPeople <= 1) {
    return;
  }

  numbOfPeople--;

  numberOfPeopleDiv.innerHTML = numbOfPeople;

  calculateBill();

}