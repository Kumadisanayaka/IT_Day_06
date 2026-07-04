/*console.log("Hello, JavaScript!");
//------Object creation using class syntax----//
class Customer {
    name;
    age;
    email;
    phone;

    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }
}

let customer1 = new Customer("John Doe", 30, "john.doe@example.com", "123-456-7890");
console.log(customer1);
//------Object creation using object literal syntax----//
let customer2 =  {
    name: "Pathum",
    age: 25,
    email: "kuma@example.com",
    phone: "555-1234",
    items: [{
        id:1,
        name: "item1",
        price: 100,
        variants: [{
            id: 1,
            name: "variant1",
            price: 150
        },
        {
            id: 2,
            name: "variant2",
            price: 200
        },
        {
            id: 3,
            name: "variant3",
            price: 250
        }
        ],
    }, {
        id:2,
        name: "item2",
        price: 200
    }, {
        id:3,
        name: "item3",
        price: 300
    }],
    father:{
        name: "Kumara",
        age: 50,
        email: "kumara@example.com"
    }
};

console.log(customer2);
console.log("Customer Name:", customer2.name); // property access using dot notation
console.log("Item",customer2.items); // property access using dot notation
console.log("Father Name:", customer2.father.name); // nested object property access using dot notation
console.log("second item:", customer2.items[1]); // nested object property access using dot notation
console.log("second item name:", customer2.items[1].name); // nested object property access using dot notation
console.log("second item price:", customer2.items[1].price); // nested object property access using dot notation
console.log("second item variant price:", customer2.items[0].variants[1].price); // nested object property access using dot notation*/

//------DOM Manipulation (Document Object Model) using JavaScript----//


console.log(document);

//document.write("<h1>Hello, JavaScript!</h1>");

let heading = document.getElementById("heading");

heading.innerHTML="Hello, Pathum!";
console.log(heading);