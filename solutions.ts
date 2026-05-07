// Problem 1:
function filterEvenNumbers(input: Array<number>): Array<number> {
  return input.filter((num: number) => num % 2 == 0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2:
function reverseString(input: string): string {
  let result: string = "";
  let right: number = input.length - 1;

  while (right >= 0) {
    result += input[right];
    --right;
  }

  return result;
}
// console.log(reverseString("typescript"));

// Problem 3:
type StringOrNumber = string | number;
function checkType(input: StringOrNumber): string {
  return typeof input == "string" ? "String" : "Number";
}
// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

// Problem 5:
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}

interface IBookRead extends IBook {
  isRead: boolean;
}

function toggleReadStatus(input: IBook): IBookRead {
  return {
    ...input,
    isRead: true,
  };
}
// Sample Input:
const myBook: IBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
// console.log(toggleReadStatus(myBook));

// Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.age}`;
  }
}

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

// Problem 7:
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
	let result: number[] = [];

	let firstSet = new Set(firstArray);
	firstArray = Array.from(firstSet);

	let secondSet = new Set(secondArray);
	secondArray = Array.from(secondSet);

	for(let i = 0; i < firstArray.length; i++) {
		for(let j = 0; j < secondArray.length; j++) {
			if(firstArray[i] == secondArray[j]) {
				result.push(firstArray[i]);
				break;
			}
		}
	}

	return result;
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))