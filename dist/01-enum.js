"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
const hernanEnum = {
    username: 'hernán',
    role: ROLES.ADMIN,
};
const hernanLiteralType = {
    username: 'hernán',
    role: 'admin',
};
console.log(hernanEnum);
console.log(hernanLiteralType);
