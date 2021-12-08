//04-clases.ts

class Persona{
    public name:string;
    public lastname:string
    static referential: string = "Human";
    protected fullname = " "; //Duck Typing -> String

    constructor(
        nameParameter:string,
        lastnameParameter: string,
    ) {
        this.name = nameParameter;
        this.lastname = lastnameParameter;
        this.fullname = nameParameter + " " + lastnameParameter;
    }

    private showData() : string {
        return this.fullname;
    }
}


class User extends Persona{
    constructor(
        nameParameter:string,
        lastnameParameter: string,
        public identificationCard: string, //Access modifier --> Class properties
        public maritalStatus: string //Access modifier --> Class properties
    ) {
        super(nameParameter,lastnameParameter);
    }
}

const person = new User(
    "Diana",
    "Lopez",
    "1234567890",
    "Singer"
);
/*
person.name;
person.lastname;
person.identificationCard;
person.maritalStatus;
*/
