export default interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

function printTeacher(firstname:string, lastname:string) : string {
    return firstname + lastname
}

class StudentClass {
    private firstname: string;
    private lastname: string;

    constructor(firstname:string, lastname:string) {
        this.firstname = firstname;
        this.lastname = lastname
    }

    workOnHomework() {
        return "Currently Working"
    }

    displayName() {
        return this.firstname
    }
}