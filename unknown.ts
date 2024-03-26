let data2:unknown;
data2 = 10;
data2 = "Data2";

let item : string;
//item = data2;   it's not possible

if (typeof data2 === "string"){
    item = data2;
}
