// 1.
const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`;
// console.log(bondCode);      // 0010

// 2.
const data = {
    result: [{
        userName: {
            title: 'Mr.',
            name: "sakib khan"
        }
    }]
};
// console.log(data.result[0].userName.name);  // sakib khan

// 3. Which array method will you use to obtain an array containing the cubes of array p?
const p = [1, 2, 3];
const q = p.map(n => Math.pow(n, 3));
// console.log(q);     // 1, 8, 27

// 4. How to set image src dynamically?
// const sectionContainer = document.getElementById('section-container');
// const path = "images/cat.jpg";
// const div = document.createElement('div');
// div.innerHTML = `<img src=${path} alt="">`;
// sectionContainer.appendChild(div);

// 5. What is textContent in javascript? (google it and read the wikipedia page) 
// https://www.w3schools.com/jsref/prop_node_textcontent.asp#:~:text=The%20textContent%20property%20sets%20or,node%2C%20and%20all%20its%20descendants.
// All the text contents of a node and all its descendants

// 8. How will you dynamically pass the name variable as a parameter to the loadDetail function?
// `<div onclick="loadDetail('${name}')>Biriyani</div>"`

// 11. What would be the output?
const info = {
    name: "",
    phoneNumberf: null
};
// console.log(JSON.stringify(info));      // {"name":"","phoneNumberf":null}

// Which one is a proper JSON output?
const array = {
    hobbies: ["dancing", "singing", "acting"]
};
console.log(JSON.stringify(array));     // {"hobbies":["dancing","singing","acting"]}

// 13. Which one will throw error?
// console.log(JSON.stringify({
//     eventName: "birthday",
//     date: Date().tomorrow()
// }));                             // TypeError
console.log(JSON.stringify({
    eventName: "birthday",
    date: new Date()
}));                             // Showing Current date
console.log(JSON.stringify({
    eventName: "birthday",
    date: Date()
}));                             // Showing Current date with region
console.log(JSON.stringify({
    eventName: "birthday",
    date: "2022-02-21"
}));                             // Showing String

// console.log({date: Date()});     // testing object

// 14. Which one is the correct way to comment in JSON?
// JSON does not support comments

// 15. Which one is not true?
// JSON is based on a subset of the Java Programming Language.(false)
// JSON is based on a subset of the JavaScript Programming Language.(true)

// 16. How will you clear the contents from the div?
// const p = document.getElementById('p');
// p.innerHTML = "";     // Working but SyntaxError
// p.innerText = "";     // Working but SyntaxError
// p.reset();            // Not working (TypeError and SyntaxError)
