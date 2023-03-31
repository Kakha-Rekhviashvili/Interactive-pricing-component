let range = "";
let quantity = "";
let price = "";
let checkBox = "";

function zmna() {
  checkBox = document.getElementById("check");
  range = document.getElementById("range").value;
  switch (range) {
    case "0":
      quantity = "10K";
      price = 8;
      break;
    case "1":
      quantity = "50K";
      price = 12;
      break;
    case "2":
      quantity = "100K";
      price = 16;
      break;
    case "3":
      quantity = "500K";
      price = 24;
      break;
    case "4":
      quantity = "1M";
      price = 36;
      break;
  }
  if (checkBox.checked == true) {
    document.getElementById("price").innerHTML = price * 12 * 0.75;
  } else {
    document.getElementById("price").innerHTML = price;
  }

  document.getElementById("viewer").innerHTML = quantity;
}

// const node = document.getElementById("mze");
// const list = document.getElementById("myList1");
// function myFunction() {
//   list.insertBefore(node, list.children[1]);
// }
// function myFunction1() {
//   document.getElementById("myList2").appendChild(node);
// }
