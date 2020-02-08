// class created , constructor receives the arguments, then we call the method this

class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

// INSTANCE = is an object that contains the property names and methods of a class, but with unique property values.

// const "name" = new(we use the new keyword to create a new instance of our "name"
//     class)
// the the new keyword calls the constructor

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular')