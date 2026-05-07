// Problem 1:
function filterEvenNumbers(input: Array<number>): Array<number> {
  return input.filter((num: number) => num % 2 == 0);
}

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

// Problem 3:
type StringOrNumber = string | number;
function checkType(input: StringOrNumber): string {
  return typeof input == "string" ? "String" : "Number";
}

// Problem 4:
function getProperty<T, K extends keyof T>(inputObj: T, key: K): T[K] {
  return inputObj[key];
}

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
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7:
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
	let result: number[] = [];

	let firstSet = new Set(firstArray);

	let secondSet = new Set(secondArray);

	firstSet.forEach((value: number) => {
		if(secondSet.has(value)) {
			result.push(value);
		}
	})

	return result;
}
