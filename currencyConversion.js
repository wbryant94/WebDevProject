// USD conversion vals
let dollarToYuan = 6.32;
let dollartoEuro = 0.91;
let dollarToRupee = 76.43;
// Yuan conversion vals
let yuanToDollar = 0.16;
let yuanToEuro = 0.14;
let yuanToRupee = 12.1;
// Rupee conversion vals
let rupeeToDollar = 0.013;
let rupeeToEuro = 0.012;
let rupeeToYuan = 0.083;
// Euro conversion vals
let euroToDollar = 1.09;
let euroToYuan = 6.9;
let euroToRupee = 83.51;
var fromSelect = document.getElementById('fromCurrencies');
var fromValue = fromSelect.options[fromSelect.selectedIndex].value;
console.log(fromValue)

var toSelect = document.getElementById('toCurrencies');
var toValue = toSelect.options[toSelect.selectedIndex].value;
console.log(toValue)



function convert() {
  var fromSelect = document.getElementById('fromCurrencies');
  var fromValue = fromSelect.options[fromSelect.selectedIndex].value;
  var toSelect = document.getElementById('toCurrencies');
  var toValue = toSelect.options[toSelect.selectedIndex].value;
 let amount = document.getElementById('currencyAmount').value;

 // console.log("within convert function");

  //console.log("Converting: " + amount + " Original currency:" + fromValue);
 // console.log("Target currency:" + toValue);


  switch (fromValue) {

    case "usd":
     // console.log("in switch from::usd");
     // console.log("result of conversion:" + convertUSD(toValue))
      document.getElementById("convertedCurrency").value = convertUSD(toValue,amount);

      break;
    case "yuan":
     // console.log("in switch, from: :yuan");
      document.getElementById("convertedCurrency").value = convertYuan(toValue,amount);
      break;
    case "rupee":
    //  console.log("in switch from: :rupee");
      document.getElementById("convertedCurrency").value = convertRupee(toValue,amount);
      break;
    case "euro":
     // console.log("in switch from:euro");
      document.getElementById("convertedCurrency").value = convertEuro(toValue,amount);
      break;
  }
}



function convertUSD(targetCurrency, amount) {
  //console.log("within convertUSD function");
  switch (targetCurrency) {
    case "euro":
      return amount * dollartoEuro;
    case "yuan":
      return amount * dollarToYuan;
    case "rupee":
      return amount * dollarToRupee;
    default:
     return amount;
  }

}

function convertEuro(targetCurrency, amount) {
  //console.log("within convertEuro function");
  switch (targetCurrency) {
    case "yuan":
    console.log("amount = "+amount)
      return amount * euroToYuan;
    case "usd":
    	console.log("amount = "+amount)
      return amount * euroToDollar;
    case "rupee":
      return amount * euroToRupee;
    default:
      return amount;
  }
}

function convertRupee(targetCurrency, amount) {
 // console.log("within convertRupee function");
  switch (targetCurrency) {
    case "euro":
      return amount * rupeetoEuro;
    case "usd":
      return amount * rupeeToDollar;
    case "yuan":
      return amount * rupeeToYuan;
    default:
      return amount;
  }
}

function convertYuan(targetCurrency, amount) {
//  console.log("within convertYuan function");
  switch (targetCurrency) {
    case "euro":
      return amount * yuanToEuro;
    case "usd":
      return amount * yuanToDollar;
    case "rupee":
      return amount * yuanToRupee;
    default:
      return amount;
  }
}
