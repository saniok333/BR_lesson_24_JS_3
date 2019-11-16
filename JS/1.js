let start = +(prompt("Enter the start of range as an integer"));
console.log("start=" + start);
if ((isNaN(start)) || (start % 1)) {
    console.log("Incorrectly entered data!");
} else {
    let end = +(prompt("Enter the end of range as an integer"));
    console.log("end=" + end);
    if ((isNaN(end)) || (end % 1) || (end < start)) {
        console.log("Incorrectly entered data!");
    } else {
        let sum = 0;
        for (let i = start; i <= end; i++) sum += i;
        console.log("sum=" + sum);
    }
}