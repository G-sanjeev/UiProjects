var uprod_id;
let upnos;
var checkArray = [];
var checkId = [];
var finalarr = [];
var final_price = false;

function getCube() {
  //user data input
  uprod_id = parseInt(document.getElementById("prdid").value);
  // console.log(uprod_id);
  upqnos = parseInt(document.getElementById("qnos").value);
  // console.log(upqnos)
  // product details stored initially
  let product_details = [
    { prdid: 101, prname: "apple", price: 100 },
    { prdid: 102, prname: "orange", price: 50 },
    { prdid: 103, prname: "banana", price: 30 },
    { prdid: 104, prname: "graphes", price: 40 },
    { prdid: 105, prname: "leechi", price: 10 },
  ];
  // checking wheather the length is > 5
  if (checkArray.length > 5) {
    alert("limit exceded");
    // var final_price = true;

    // window.finalprice = final_price;
    return;
  }
  product_details.forEach(function (i) {
    var flag = false;

    if (checkArray.find((p) => p.prdid == uprod_id)) {
      flag = true;
    }
    // console.log(flag);

    if (uprod_id == i.prdid && flag) {
      checkArray.forEach(function (j) {
        if (j.prdid == uprod_id) {
          upqnos = j.quantity + upqnos;
          // console.log(upqnos);
          res = upqnos * j.price;
          // console.log(res);
          // console.log(j.quantity);

          let ind = checkArray.findIndex((obj) => obj.prdid == uprod_id);
          console.log("spliced objects");
          // checkArray.pop(ind, 1);
          console.log(checkArray.pop(ind));

          function pushelement() {
            const group = {
              prdid: j.prdid,
              prname: j.prname,
              quantity: upqnos,
              price: res,
            };
            checkArray.push(group);
            // console.log(checkArray);
            // console.log("found the product");
          }
          pushelement();
        }
      });
      printDetails();
    } else {
      if (uprod_id == i.prdid) {
        checkId.push(uprod_id);
        // console.log(checkId);

        // pushing element into the check Array
        function pushelement() {
          const group = {
            prdid: i.prdid,
            prname: i.prname,
            quantity: upqnos,
            price: i.price,
          };
          checkArray.push(group);
          // console.log(checkArray);
          // console.log("found the product");
        }
        pushelement();
        window.pushElement = pushelement;

        // displaying the elements of array
        function printDetail() {
          const body = document.querySelector("#table tbody");

          body.innerHTML = "";
          checkArray.forEach((item) => {
            const row = document.createElement("tr");
            for (let value in item) {
              const cell = document.createElement("td");
              cell.textContent = item[value];
              row.appendChild(cell);
            }
            body.appendChild(row);
          });
        }
        printDetail();
        window.printDetails = printDetail;
      }
    }
  });
  // inserting elements of check array into the finalarr
  checkArray.forEach(function (i) {
    finalarr.push(i);
  });
}
// output call on the click of final price to print details
function finalPrice() {
  let sum = 0;
  // console.log(checkArray);
  // console.log(finalarr);
  checkArray.forEach(function (i) {
    sum = sum + i.price;
    // console.log(sum);
  });
  let res = Math.round(sum * 0.18 + sum);
  // console.log(sum);

  //function for number to word
  function numtowords(n) {
    if (n < 0) return false;
    single_digit = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    double_digit = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    below_hundred = [
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];
    if (n === 0) return "Zero";
    function translate(n) {
      word = "";
      if (n < 10) {
        word = single_digit[n] + " ";
      } else if (n < 20) {
        word = double_digit[n - 10] + " ";
      } else if (n < 100) {
        rem = translate(n % 10);
        word = below_hundred[(n - (n % 10)) / 10 - 2] + " " + rem;
      } else if (n < 1000) {
        word =
          single_digit[Math.trunc(n / 100)] + " Hundred " + translate(n % 100);
      } else if (n < 1000000) {
        word =
          translate(parseInt(n / 1000)).trim() +
          " Thousand " +
          translate(n % 1000);
      } else if (n < 1000000000) {
        word =
          translate(parseInt(n / 1000000)).trim() +
          " Million " +
          translate(n % 1000000);
      } else {
        word =
          translate(parseInt(n / 1000000000)).trim() +
          " Billion " +
          translate(n % 1000000000);
      }
      return word;
    }
    result = translate(n);
    return result.trim() + ".";
  }
  // var a = prompt("enter the number:");
  // alert(numtowords(a));
  var a = numtowords(res);
  document.getElementById("gstamount").innerHTML = res;
  document.getElementById("gstword").innerHTML = a;
}
