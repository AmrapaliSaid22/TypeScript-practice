"use strict";
function combine1(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine1(10, 20, "as-number"));
console.log(combine1("Amrapali", "said", "as-string"));
