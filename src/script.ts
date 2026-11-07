// Basic type
let myStirng: string = "MH Faisal";
let myNUber: number = 412321;
let myBoolean: boolean = false;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

// type safe function
const addTow = (a: number, b: number) => {
  return a + b;
};

console.log(addTow(1000, 1000));

// Array and tuple an readonly modifier
// const arr: Array<string> = ["Programing", "Hero"];
const arr2: string[] = ["Programing", "Hero"];
const numArr: number[] = [1, 2, 3];

// tuple
const dhakaLatLang: readonly [number, number] = [23.8103, 90.4125];

// optional, defult and rest parameters (...args)
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + "" + lastName;
};

const greetings = (fullname: string, greeting: string = "Hello") => {
  console.log(greeting + "" + fullname);
};
greetings("Faisal");

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};
sum(1, 2, 3, 4, 5, 6);

const logUserAction = (...args: [name: string, age: number, boolean]) => {
  const [name, age, isActive] = args;
  console.log(name + " is " + age);
};
logUserAction("Faisal", 23, false);

// Object type, type alias and interface
type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
};

const user1: User = {
  name: "Mir",
  age: 123,
  isActive: true,
  action: () => {
    console.log("Hello");
  },
  badge: ["abc", "def"],
};

const user2 = {};

// object type, type alias and interface

const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badage: string[];
} = {
  name: "Faisal",
  age: 23,
  isActive: true,
  action: () => console.log("hello"),
  badage: ["abc", "def"],
};
