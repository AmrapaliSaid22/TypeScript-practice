class User{
    constructor(public name, public email, public age){}

    displayValue(){
        console.log(this.name, this.email, this.age);
        
    }
}
const u1 = new User('admin', 25 ,'example@gmail.com');

u1.displayValue();