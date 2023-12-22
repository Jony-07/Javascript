let person = {
    name: 'John',
    lastname: 'Morales',
    age: 22,
    language: 'ES',
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    email: 'jony25lopezml@gmail.com',
    get fullName(){
       return this.name + ' ' + this.lastname;
    }
}
console.log(person.fullName);
console.log(person.lang);
person.lang = 'EN';
console.log(person.lang);
console.log(person.language);