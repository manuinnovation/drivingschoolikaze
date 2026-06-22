const questions = [
{
question:"What does a red traffic light mean?",
answers:["Go","Stop","Turn Left","Speed Up"],
correct:1
},
{
question:"What should you wear while driving?",
answers:["Hat","Seat Belt","Jacket","Gloves"],
correct:1
},
{
question:"Maximum attention should be given to?",
answers:["Phone","Passengers","Road","Radio"],
correct:2
},
{
question:"What color means go?",
answers:["Yellow","Blue","Green","Red"],
correct:2
},
{
question:"Before changing lanes you should?",
answers:["Accelerate","Check Mirrors","Stop","Honk"],
correct:1
}
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");

function loadQuestion(){

question.innerText =
questions[currentQuestion].question;

answers.innerHTML = "";

questions[currentQuestion].answers.forEach(
(answer,index)=>{

const btn = document.createElement("button");

btn.innerText = answer;

btn.classList.add("answer-btn");

btn.onclick = ()=>{

if(index === questions[currentQuestion].correct){
score++;
}

nextQuestion();
};

answers.appendChild(btn);

});
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

localStorage.setItem("score",score);

alert(
"You scored " +
score +
"/" +
questions.length
);

window.location="dashboard.html";
}
}

loadQuestion();
let studentCount = 0;

function addStudent() {

    let name = document.getElementById("studentName").value;
    let phone = document.getElementById("studentPhone").value;
    let email = document.getElementById("studentEmail").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    studentCount++;

    let tbody = document.getElementById("studentList");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${studentCount}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>
            <button onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    tbody.appendChild(row);

    document.getElementById("studentName").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentEmail").value = "";
}

function deleteStudent(button) {
    button.closest("tr").remove();
}