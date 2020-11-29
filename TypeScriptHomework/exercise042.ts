interface IbaseObject{
    width: number;
    length:number;
}
class Rectangle implements IbaseObject{
    constructor(public width:number,public length:number){

    }
    calcSize():number{
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(5,2);
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize())