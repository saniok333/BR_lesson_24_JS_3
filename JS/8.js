for (let i = 1;; i++) {
    if (i == 8) i = 1;
    switch (i) {
        case 2:
            dayOfWeek = "Monday";
            break;
        case 3:
            dayOfWeek = "Teusday";
            break;
        case 4:
            dayOfWeek = "Wednesday";
            break;
        case 5:
            dayOfWeek = "Thursday";
            break;
        case 6:
            dayOfWeek = "Friday";
            break;
        case 7:
            dayOfWeek = "Saturday";
            break;
        case 1:
            dayOfWeek = "Sunday";
            break;
    }
    let checkContinue = confirm(`${dayOfWeek}.\nDo You want to see the next day of the week?`);
    if (!checkContinue) break;
}