const quizData =[
    {
        question: " 1) What is the primary function of an operating system?",
        options: [
            "Perform arithmetic operations",
            "Manage computer resources",
            "Compile code",
            "Write software programs",
        ],
        correct: 1,
    },
    {
        question: "2) Which of the following is not a type of operating system?",
        options: [
            "Batch OS",
            "Real-time OS",
            "Network OS",
            "File system OS",
        ],
        correct: 3,
    },
    {
        question: "3) A deadlock in an operating system refers to:",
        options: [
            "The process waiting for an event",
            "The system crashing",
            "Multiple processes waiting indefinitely for resources",
            "A memory allocation issue",
        ],
        correct: 2,
    },
    {
        question: "4) What is a context switch in an operating system?",
        options: [
            "Switching from one kernel to another",
            "Switching between user and system modes",
            "Switching from one hardware device to anothe",
            "Saving the state of one process and loading the state of another",
        ],
        correct: 3,
    },
    {
        question: "5) Virtual memory is:",
        options: [
            "Part of the CPU",
            "A method of using disk storage as additional RAM",
            "Physical memory",
            "A file system method",
        ],
        correct: 1,
    },
    {
        question: "6) Which of the following is a process synchronization mechanism?",
        options: [
            "Semaphore",
            "Paging",
            "Fragmentation",
            "Defragmentation",
        ],
        correct: 0,
    },
    
];
const answerElm = document.querySelectorAll(".answer");
const questionElm = document.querySelector("#question");
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const submitbtn = document.querySelector("#submit");

let currentquiz =0;
let score =0;

const loadQuiz = () =>{
    const { question, options } =quizData[currentquiz];
    questionElm.innerText = question;
    
   scores.innerText = `Score: ${score}/${quizData.length}`;
    options.forEach((curOption, index) => {
        document.getElementById(`option-${index + 1}`).innerText = curOption;
      });
      
};
loadQuiz();
const getSelectedOption =() =>{
let ans_index;
answerElm.forEach((curOption, index) => {
       if(curOption.checked){
        ans_index=index;
       }
});
return ans_index;
};

const deselectedAnswer = () => {
   return answerElm.forEach((curElem) => curElem.checked = false);
};

submitbtn.addEventListener("click",()=>{
    const selectedOpttionIndex =getSelectedOption();
       console.log(selectedOpttionIndex);
    if(selectedOpttionIndex == quizData[currentquiz].correct){
        score=score+1;
    }
       currentquiz++;
       if(currentquiz < quizData.length){
        deselectedAnswer();
        loadQuiz();
       }
       else{
          quiz.innerHTML = `
          <div class = "result">
          <h2> Your Score: ${score}/${quizData.length} correct Answers</h2>
         <p> Congratulation on completing the quiz! 🎉🎉</p>
         
         
    <button class ="reload-button" onclick ="location.reload()">Play Again </button>
    </div>
          `;
       }
});


