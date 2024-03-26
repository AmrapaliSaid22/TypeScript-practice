class Users{
    name:'';
    email:'admin@example.com';

    addUser(user){
        return `${user} is Added`;
    }

    removeUser(user){
        console.log(`${user} is Removed`);
        
    }
}

const User1 = new Users();
const result2 = User1.addUser('Admin');

User1.removeUser('Peter');
console.log(result2);
