// && 語法範例
let a = true;
let b = false;

if (a && b) {  //需所有條件
    console.log("兩者皆為真");
} else {
    console.log("至少有一個為假");
}

// || 語法範例
let x = true;
let y = false;

if (x || y) {  //滿足其1條件
    console.log("至少有一個為真");
} else {
    console.log("兩者皆為假");
}


// switch判斷式
let toyChoice = "汽車";

switch (toyChoice) {
    case "汽車":  // 條件
        console.log("你選擇了汽車！");  // 執行
        break;
    case "洋娃娃":  // 條件
        console.log("你選擇了洋娃娃！");  // 執行
        break;
    case "球":  // 條件
        console.log("你選擇了球！");  // 執行
        break;
    default:  //等同於else
        console.log("請選擇一個有效的玩具：汽車、洋娃娃或球。");
        break;
}

// if 判斷式
if (toyChoice === "汽車") {  // 條件
    console.log("你選擇了汽車！");  // 執行
} else if (toyChoice === "洋娃娃") {  // 條件
    console.log("你選擇了洋娃娃！");  // 執行
} else if (toyChoice === "球") {  // 條件
    console.log("你選擇了球！");  // 執行
} else {  //等同於else
    console.log("請選擇一個有效的玩具：汽車、洋娃娃或球。");
}