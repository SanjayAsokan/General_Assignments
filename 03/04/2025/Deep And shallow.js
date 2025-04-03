const original = { name: "Alice", hobbies: ["reading", "traveling"] }
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.hobbies.push("coding");

console.log("Original :",original);
console.log("Clone :",deepCopy);

// Output:

// Original : { name: 'Alice', hobbies: [ 'reading', 'traveling' ] }
// Clone : { name: 'Alice', hobbies: [ 'reading', 'traveling', 'coding' ] }