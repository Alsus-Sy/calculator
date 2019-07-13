console.log("CONNECTED!");

function getSum(total, num) {
  return total + num;
}

var number = [];

var newValue;

var amount;

var _15Percent = 15 / 100;

var _18Percent = 18 / 100;

var _20Percent = 20 / 100;

var sixFour =  60 / 100;

var totalEarned;

// document.querySelector(".text-box").addEventListener("keydown", function() {
//   console.log("test");
// })


document.querySelector(".amount").addEventListener("keyup", function() {
  // document.querySelector(".amount").textContent = "";
  amount = document.querySelector(".amount").value;
});

document.querySelector(".total-earned").addEventListener("keyup", function() {
  totalEarned = document.querySelector(".total-earned").value;
  // document.querySelector(".display-text").append(totalEarned);
});

document.querySelector(".fifteen-percent").addEventListener("click", function() {
  // document.querySelector(".tip-amount").innerHTML = "";
  var tip  = Number(amount * _15Percent).toFixed(2);
  document.querySelector(".tip-amount").value = tip;
});

document.querySelector(".sum").addEventListener("click", function() {
  // debugger;
  document.querySelector(".display-text").append(totalEarned + " + ");
  // Number(totalEarned) + Number(totalEarned);
  // // document.query
  // // var total = Number(totalEarned) + Number(totalEarned);
  number.push(Number(totalEarned));
  newValue = document.querySelector(".total-earned").value = number.reduce(getSum, 0);
    // document.querySelector(".total-earned").value="";
    return newValue;
});

document.querySelector(".eighteen-percent").addEventListener("click", function() {
  var tip  = Number(amount * _18Percent).toFixed(2);
  document.querySelector(".tip-amount").value = tip;
});

document.querySelector(".twenty-percent").addEventListener("click", function() {
  var tip  = Number(amount * _20Percent).toFixed(2);
  document.querySelector(".tip-amount").value = tip;
});

document.querySelector(".display-text").addEventListener("keydown", function() {
  // document.querySelector(".tip-amount").innerHTML = "";
  // var tip  = Number(amount * _15Percent).toFixed(2);
  document.querySelector(".display-text").innerHTML = value;
});


document.querySelector(".six-four").addEventListener("click", function() {
  debugger;
  var remainingAmout  = newValue * sixFour.toFixed(2);
  document.querySelector(".sharing-amount").value = remainingAmout;
});

