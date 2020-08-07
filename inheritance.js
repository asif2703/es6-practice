class Parents{
    constructor(){
        this.fatherName = "Holu Lala";
        this.motherName = "Soli Bema";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' '+ this.fatherName + ' ' + this.motherName;
    }
}
const baby = new Child("Arona");
const baby2 = new Child('Suko');
console.log(baby.getFullName());
console.log(baby2.getFullName());