let numb = +(prompt("Enter the number as an integer"));
console.log("numb=" + numb);
if ((isNaN(numb)) || (numb % 1)) {
    console.log("Incorrectly entered data!");
} else {
    for (let i = 1; i <= numb; i++)
        if (!(numb % i)) console.log("divider=" + i);
}