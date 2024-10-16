const Str = "1234";
const Numstr = 1234;

if (Str == Numstr) {
  // == 檢查值做比較
  console.log("值相等");
} else {
  console.log("值不相等");
}
if (Str === Numstr) {
  //  檢查值與(型別或類型)
  console.log("值相等");
} else {
  console.log("值不相等");
}

// else if

// 錢包有150元

// 錢包有150元

const walletAmount = 150;
const dinnerCost = 300;


if (walletAmount > dinnerCost) {
  console.log("可以享用大餐");
} else if (walletAmount < dinnerCost) {
  console.log("只能啃麵包");
} else {
  console.log("錢包變成0");
}
