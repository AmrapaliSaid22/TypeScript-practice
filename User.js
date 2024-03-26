var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is Added");
    };
    Users.prototype.removeUser = function (user) {
        console.log("".concat(user, " is Removed"));
    };
    return Users;
}());
var User1 = new Users();
var result2 = User1.addUser('Admin');
User1.removeUser('Peter');
console.log(result2);
