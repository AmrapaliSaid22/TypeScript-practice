class User2{
    name1='ABCD';

}
 const u2 = new User2();

 u2.name1 = 'Test';
 console.log(u2.name1);

 class createAccount{
    makeEmail(email){
        return `${email}@example.in`
    }
 }

 class Admin extends createAccount{
    addAdmin(admin){
        return `${admin} added as an Admin`;
    }
 }
 
 const a = new Admin();

 console.log(a.addAdmin("Peter"));
 console.log(a.makeEmail("peter"));
 
 