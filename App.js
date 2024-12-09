// let btn = document.querySelectorAll("button");
// let str = "";
// let input = document.querySelector(".inp");

// btn.forEach((btns) => {
//   btns.addEventListener("click", (a) => {
//     if (a.target.innerHTML == "=") {
//       str = eval(str);
//     } else if (a.target.innerHTML == "AC") {
//       str = "";
//     } else if (a.target.innerHTML == "D") {
//       str = str.slice(0, -1);
//     } else {
//       str += a.target.innerHTML;
//     }
//     input.value = str;
//     console.log(cal());
//   });
// });

// let btn = document.querySelectorAll("button");
// let str = "";
// let myInputField = document.querySelector(".inp");
// let myhistory = document.querySelector(".History-list");
// let clarBtn = document.querySelector(".bt-clear");

// clarBtn.addEventListener("click", () => {
//   myhistory.innerHTML = "";
// });

// btn.forEach((btns) => {
//   btns.addEventListener("click", (a) => {
//     if (a.target.innerHTML == "=") {
//       str = eval(str);
//       History(myInputField.value + "=" + str);
//     } else if (a.target.innerHTML == "AC") {
//       str = "";
//     } else if (a.target.innerHTML == "D") {
//       str = str.slice(0, -1);
//     } else {
//       str += a.target.innerHTML;
//     }

//     console.log(btns);

//     myInputField.value = str;
//   });
// });

// const History = (res) => {
//   let NewHistory = document.createElement("li");
//   NewHistory.innerHTML = res;

//   myhistory.append(NewHistory);
// };
let btns = document.querySelectorAll("button");
let str = "";
let myInputField = document.querySelector(".inp");
let myhistory = document.querySelector("ul");
let clarBtn = document.querySelector(".bt-clear");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      History(myInputField.value + "=" + str);
    } else if (e.target.innerHTML == "AC") {
      str = "";
    } else if (e.target.innerHTML == "D") {
      str = str.slice(0, -1);
    } else {
      str += e.target.innerHTML;
    }

    myInputField.value = str;
  });
});

let History = (result) => {
  let ele = document.createElement("li");
  ele.innerHTML = result;
  myhistory.append(ele);

  clarBtn.addEventListener("click", () => {
    ele.innerHTML = "";
  });
};
