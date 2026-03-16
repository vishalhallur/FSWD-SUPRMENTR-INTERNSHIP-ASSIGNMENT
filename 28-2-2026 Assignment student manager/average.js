
let students = [
    {
        name: "Rahul",
        marks: [80, 75, 90]
    },
    {
        name: "Anita",
        marks: [85, 70, 95]
    },
    {
        name: "Vikram",
        marks: [60, 65, 70]
    }
];
students.forEach(function(student){
    let total = 0;
    student.marks.forEach(function(mark){
        total += mark;
    }); 
    let average = total / student.marks.length;
    console.log("Student Name:", student.name);
    console.log("Average Marks:", average);
    console.log("----");
});