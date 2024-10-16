// 取得DOM元素 Class

const H1Class = document.querySelector(".H1Class");
console.log("querySelector尋找Class", H1Class);
// 返回匹配的第一個元素。如果沒有找到任何元素，則返回 null。
// 例如，const H1Class = document.querySelector(".H1Class"); 會返回第一個具有 H1Class 類別的元素。

const H1 = document.getElementsByClassName("H1Class");
console.log("getElementsByClassName", H1);
// 返回一個 HTMLCollection，這是一種類陣列的集合，包含所有匹配的元素。如果沒有找到任何元素，則返回一個空的 HTMLCollection。
// 例如，const H1 = document.getElementsByClassName("H1Class"); 會返回所有具有 H1Class 類別的元素，並且即使沒有找到元素，仍然會返回一個空集合。

// 取得DOM元素 ID
const H2ID = document.querySelector("#H2_ID");
console.log("querySelector尋找ID", H2ID);

const H2_ID = document.getElementById("H2_ID");
console.log("getElementById尋找ID", H2_ID);

//取得DOM元素 tag

console.log(document.querySelector(".Btn"));
console.log(document.getElementsByTagName("a"));


