/**Si hay un cabio en los roles, con enum se modificaría una vez y con literal types 2 (?) */

type roles = 'admin' | 'seller' | 'customer'; //literal types

enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES | roles;
};

const hernanEnum: User = {
  username: 'hernán',
  role: ROLES.ADMIN,
};
const hernanLiteralType: User = {
  username: 'hernán',
  role: 'admin',
};

console.log(hernanEnum);
console.log(hernanLiteralType);
