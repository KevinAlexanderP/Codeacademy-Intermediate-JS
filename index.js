// class created , constructor receives the arguments, then we call the method this

class Surgeon {
    constructor(name, department) {
            this.name = name;
            this.department = department;
        }
        //  getters go inside the constructor
        // check it
    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

class Doctor {
    constructor(name, remainingVacationDays, insurance) {
        this._name = name;
        this._remainingVacationDays = 20
        this._insurance = insurance;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

}
class Nurse {
    constructor(name, remainingVacationDays, insurance) {
        this._name = name;
        this._remainingVacationDays = 20
        this._certifications = certifications;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    addCertification() {
        this._certifications = certifications;
    }

}

//GETTERS



// INSTANCE = is an object that contains the property names and methods of a class, but with unique property values.

// const "name" = new(we use the new keyword to create a new instance of our "name"
//     class)
// the the new keyword calls the constructor

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular')
const surgeonDurant = new Surgeon('Durant', 'Orthopedics')

// Herencia