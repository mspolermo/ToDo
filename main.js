function getMiddle(s)
{
let sArr = s.split("");
console.log(sArr);
if (sArr.length % 2 == 0) {
    let res1 = (sArr[(sArr.length/2)-1]) + (sArr[(sArr.length/2)]);
    return res1;
} else {
    let res2=sArr[Math.floor(sArr.length/2)];
        return res2;
}
}
getMiddle('A');