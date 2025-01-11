function MyNumberType(n) {
    this.number = n + 1;
}

const obj1 = new MyNumberType(5);

console.log(obj1.number);

console.log(obj1.valueOf());

//  ----

const object1 = {
    a: "somestring asf",
    b: 42,
    c: false,
};

console.log(Object.values(object1));
// Expected output: Array [""somestring", 42, false]

