 class Animal {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
     sing(){
        return 'Alarm';
     }

     eat(){
         return Boolean(Math.round(Math.random()));
     }
}

module.exports = Animal;
