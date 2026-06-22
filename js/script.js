function checkAnswer(answer){

let result=document.getElementById("result");

if(answer==="correct"){
result.innerHTML="✅ Correct Answer!";
result.style.color="green";
}
else{
result.innerHTML="❌ Wrong Answer!";
result.style.color="red";
}

}
// ===============================
// IKAZE DRIVING SCHOOL - CRUD JS
// ===============================

let editIndex = -1;

// ===============================
// ADD STUDENT (button onclick)
// ===============================
function addStudent() {

    const name = document.getElementById("studentName").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const email = document.getElementById("studentEmail").value.trim();

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    let students = getStudents();

    if (editIndex === -1) {
        // CREATE
        students.push({ name, phone, email });
    } else {
        // UPDATE
        students[editIndex] = { name, phone, email };
        editIndex = -1;
    }

    saveStudents(students);
    clearForm();
    displayStudents();
}

// ===============================
// READ (DISPLAY TABLE)
// ===============================
function displayStudents() {

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    let students = getStudents();

    students.forEach((student, index) => {

        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="editStudent(${index})" 
                        style="background:green;color:white;padding:5px;border:none;cursor:pointer;">
                        Edit
                    </button>

                    <button onclick="deleteStudent(${index})" 
                        style="background:red;color:white;padding:5px;border:none;cursor:pointer;">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        list.innerHTML += row;
    });
}

// ===============================
// EDIT STUDENT
// ===============================
function editStudent(index) {

    let students = getStudents();
    let student = students[index];

    document.getElementById("studentName").value = student.name;
    document.getElementById("studentPhone").value = student.phone;
    document.getElementById("studentEmail").value = student.email;

    editIndex = index;
}

// ===============================
// DELETE STUDENT
// ===============================
function deleteStudent(index) {

    let students = getStudents();

    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        saveStudents(students);
        displayStudents();
    }
}

// ===============================
// LOCAL STORAGE - GET
// ===============================
function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

// ===============================
// LOCAL STORAGE - SAVE
// ===============================
function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

// ===============================
// CLEAR FORM
// ===============================
function clearForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentEmail").value = "";
}

// ===============================
// AUTO LOAD WHEN PAGE OPENS
// ===============================
window.onload = function () {
    displayStudents();
};