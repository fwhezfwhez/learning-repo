var c = 5;
if (c == 5) {
    console.log(c);
}
else if (c == 6) {
    console.log(c);
}
switch (c) {
    case 5:
        console.log(c);
        break;
    case 6:
        console.log(c);
        break;
    default:
        console.log("default");
}
for (c = 0; c < 3; c++) {
    console.log(c);
}
var v;
var arr = [1, 2, 3];
for (v in arr) {
    console.log(arr[v]);
    arr[v] = 9;
}
console.log(arr);
function hello() {
    console.log("hello");
}
function returnValue(x) {
    return x;
}
hello();
console.log(returnValue(8));
