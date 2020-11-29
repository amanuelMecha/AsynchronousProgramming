class baseObject{ 
	 width:number; 
     length:number; 
    constructor(width:number=0, length:number=0){
        this.width =width;
        this.length = length;
    }
}; 
class Rectangle extends baseObject{
    constructor(width:number, length:number){
       super(width,length);
    }
    calcSize():number { 
        return this.width * this.length; 
    }
} 

let rectangleA = new Rectangle(5,2);
console.log("Homework 3 question number 4 solution number 2" )
console.log(rectangleA.calcSize()); // 10