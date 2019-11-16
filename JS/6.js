while (true) {
    let first = +(prompt("Enter the first number"));
    console.log("first=" + first);
    if (isNaN(first)) {
        console.log("Incorrectly entered data!");
    } else {
        let action = (prompt("Enter the action ( +, -, *, / )"));
        console.log("action=" + action);
        if ((action != "+") && (action != "-") && (action != "*") && (action != "/")) {
            console.log("Incorrectly entered data!");
        } else {
            let second = +(prompt("Enter the second number"));
            console.log("second=" + second);
            if (isNaN(second)) {
                console.log("Incorrectly entered data!");
            } else {
                let result = undefined;
                switch (action) {
                    case "+":
                        result = first + second;
                        break;
                    case "-":
                        result = first - second;
                        break;
                    case "*":
                        result = first * second;
                        break;
                    case "/":
                        result = first / second;
                        break;
                }
                console.log("result=" + result);
                alert("result=" + result);
                let exit = (prompt("DoYou want to exit? ( y / n )"));
                console.log("exit=" + exit);
                if (exit == "y") break;
            }
        }
    }
}