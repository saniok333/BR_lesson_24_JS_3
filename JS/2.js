let first = +(prompt("Enter the first number as an integer"));
console.log("first=" + first);
if ((isNaN(first)) || (first % 1)) {
    console.log("Incorrectly entered data!");
} else {
    let second = +(prompt("Enter the second number as an integer"));
    console.log("end=" + second);
    if ((isNaN(second)) || (second % 1)) {
        console.log("Incorrectly entered data!");
    } else {
        let nod = 1;
        for (let i = 2;
            ((i <= first) && (i <= second)); i++)
            if ((!(first % i)) && (!(second % i))) nod = i;
        console.log("nod=" + nod);
    }
}