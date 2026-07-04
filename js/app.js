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
console.log("second item variant price:", customer2.items[0].variants[1].price); // nested object property access using dot notation

//------DOM Manipulation (Document Object Model) using JavaScript----//


console.log(document);

//document.write("<h1>Hello, JavaScript!</h1>");

let heading = document.getElementById("heading");

heading.innerText="Hello, Pathum!";
console.log(heading);
let number = 0;
function changeIncrement() {
    heading.innerText="pathum"+(++number);
    
}

function changeDecrement() {
    heading.innerText="pathum"+(--number);
    
}

function changeTitle() {
    let input = document.getElementById("inputText");
    let heading = document.getElementById("heading");
    heading.innerText = input.value;
}
    


function add() {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    document.getElementById("result").innerText = "Result: " + result;
}

function subtract() {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    document.getElementById("result").innerText = "Result: " + result;
}
*/

let customerList = []

function addCustomerOnAction() {
    let name = document.getElementById("txtcustomerName").value;
    let address = document.getElementById("txtAddress").value;
    let age = document.getElementById("txtAge").value;
    let email = document.getElementById("txtEmail").value;
    let salary = document.getElementById("txtSalary").value;

    let customer = {
        name: name,
        address: address,
        age: age,
        email: email,
        salary: salary
    };

    customerList.push(customer);
    loadCustomersOnAction();
    document.getElementById("txtcustomerName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSalary").value = "";
    console.log(customerList);
}

function loadCustomersOnAction() {
    let tblCustomers = document.getElementById("tblCustomer");

    let body = "";

    for (let i = 0; i < customerList.length; i++) {
        body += `<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr> `;

        tblCustomers.innerHTML = body;
    }
        console.log(tblCustomers);

}
