var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.displayValue = function () {
        console.log(this.name, this.email, this.age);
    };
    return User;
}());
var u1 = new User('admin', 25, 'example@gmail.com');
u1.displayValue();
