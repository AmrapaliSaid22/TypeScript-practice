"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Read_Only_User"] = 2] = "Read_Only_User";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.Admin);
