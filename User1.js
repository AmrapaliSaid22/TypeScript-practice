var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2 = /** @class */ (function () {
    function User2() {
        this.name1 = 'ABCD';
    }
    return User2;
}());
var u2 = new User2();
u2.name1 = 'Test';
console.log(u2.name1);
var createAccount = /** @class */ (function () {
    function createAccount() {
    }
    createAccount.prototype.makeEmail = function (email) {
        return "".concat(email, "@example.in");
    };
    return createAccount;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.addAdmin = function (admin) {
        return "".concat(admin, " added as an Admin");
    };
    return Admin;
}(createAccount));
var a = new Admin();
console.log(a.addAdmin("Peter"));
console.log(a.makeEmail("peter"));
