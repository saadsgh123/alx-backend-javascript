interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const students: Student[] = []

const student1: Student = {firstName: "saad", lastName: "sghouri", age: 24, location: "Sale"};
const student2: Student = {firstName: "med", lastName: "bouch", age: 27, location: "Sale"};

students.push(student1);
students.push(student2);

let table = document.createElement('table');

let headerRow = document.createElement('tr');
let headerCell = document.createElement('th');

headerCell.textContent = 'Student';
headerRow.appendChild(headerCell);
table.appendChild(headerRow);

students.forEach(student =>{
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.textContent = student.firstName;

    row.appendChild(cell)
    table.appendChild(row)
})

document.body.appendChild(table);
