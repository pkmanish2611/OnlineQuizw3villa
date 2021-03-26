window.onload = function(){
     show(0);
}


// we are  taking javascript objects for questions 

let questions = [
    {
        id: 1,
        question: "Which of those doesn’t have an index based structure?",
        answer: "Set",
        option: [
            "List",
            "Set",
            "Map",
            "Queue"
        ]
    },

    {
    id: 1,
    question:"What is the full form of e-mail",
    answer:"Electronic Mail",
    option:[
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
    ]
    },
     
    {
    id: 3,
    question:"What is the size of byte variable?",
    answer:"8 bit",
    option:[
        "8 bit",
        "16 bit",
        "32 bit",
        "64 bit"
    ]
    },
    {
        id: 4,
        question: "What is the size of char variable?",
        answer: "16 bit",
        option: [
            "8 bit",
            "16 bit",
            "32 bit",
            "64 bit"
        ]
    },
    {
        id: 5,
        question: "What is the default value of short variable?",
        answer: "0",
        option: [
            "0.0",
            "0",
            "Null",
            "Not defined"
        ]
    }
];










function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome"]["name"].value;

    //store in user name into session storage to delete all data after session ends

    sessionStorage.setItem("name",name);
    //to go from start to quiz page
    location.href = "quiz.html";

}


let question_count = 0;
let point = 0;

function next(){
    //to increase score we are creating variable user_answer
    let user_answer = document.querySelector("li.option.active").innerHTML;
    //check answer by user and set result according to that it will done after user finishes its quiz before time and click on last next button
    if (user_answer == questions[question_count].answer) {
        point += 1;
        sessionStorage.setItem("points", point);
    }else{
    
        sessionStorage.setItem("points", point);
    }
    //if question ends jumps to result page
    if(question_count== questions.length -1){
        //seting elements to session storage
        sessionStorage.setItem("time", ` ${seconds} seconds`);
        clearInterval(myTime);
        location.href = "end.html";
        return;
    } 
     
     
    
    question_count++;
    show(question_count);

}
function show(count){
    //to display the question and options
    let question = document.getElementById("questions");
    question.innerHTML=  `
    <h2>Q${question_count+1}. ${questions[count].question} </h2>
    <ul class="option_group">
        <li class="option">${questions[count].option[0]}</li>
        <li class="option">${questions[count].option[1]}</li>
        <li class="option">${questions[count].option[2]}</li>
        <li class="option">${questions[count].option[3]}</li>
    </ul>
     `;
     //calling toggleActive function
     toggleActive();
}
     //we are using this function to make option active on click 
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                //it will check for active if true then it will remove active before assigning active to another option
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");

        }
    }
}