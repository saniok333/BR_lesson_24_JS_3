let myMin = 1;
let myMax = 101;
let myMid;
alert("Choose a number from 1 to 100")
while (true) {
    myMid = parseInt((myMax + myMin) / 2);
    if (confirm(`Is your number = ${myMid}?`)) {
        break;
    } else if (confirm(`Is your number < ${myMid}?`)) {
        myMax = myMid;
    } else {
        myMin = myMid;
    }
}