function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    const framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello from ${compiler} and ${framework}!`;
}

// Lists
let foo = ["a", "b", "c"]
foo.forEach((item) => console.log(item))
let foofoo = foo.map((item) => item + item)
foofoo.forEach((item) => console.log(item))

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = {firstName: "jane", lastName: "user"};
console.log(greeter(user));

// Type
let isDone: boolean = false;
let decimal: number = 6;
let big: bigint = 100e6;
let x: [string, number];
x = ["a", 1];

// Enum
enum Color {
    Red = 1,
    Green,
    Blue
}
let c: Color = Color.Green;

// Dict / Map
let count: {[key: string]: number} = {};
count["a"] = 5;
console.log(count["a"])
