class University{ 
    name;
    dept;
    constructor(name:string, dept:string){
        this.name = name; 
        this.dept = dept; 
    }
	
	graduation(year:number):void { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
var miu = new University("MIU", "Computer Science"); 
console.log("Homework 3 question number 1")
miu.graduation(2019);

//////////////////////////////////

interface IbankAccount {
    money: number;
    deposit(value:number):void
}
interface Imyself extends IbankAccount {
    name: string;
    hobbies: string[]
} 
let myself: Imyself = {
    name: "Amanuel",
    hobbies: ["violine", "cooking"],
    money: 2000,
    deposit(value) {
        this.money += value;
    }
 
}
myself.deposit(3000); 
console.log("Homework 3 question number 2")
console.log(myself);

////////////////////////////


class Car {
    name;
    acceleration;
    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk(): void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
	accelerate(speed:number) {
    this.acceleration = this.acceleration + speed;
} 
}
var car = new Car("BMW");
console.log("Homework 3 question number 3")
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60

///////////////////////////////



class rectangle{ 
	static width: number = 0;
    static length1: number = 0; 
    static calcSize():number { 
        return this.width * this.length1; 
    }; 
}; 
rectangle.width = 5; 
rectangle.length1 = 2; 
console.log("Homework 3 question number 4 solution number 1")
console.log(rectangle.calcSize()); // 10