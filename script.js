// ===========================================================
// DOM ELEMENT SELECTION
// ===========================================================
const confContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const quizQuestion = document.querySelector(".quiz-que");
const nextQuestionBtn = document.querySelector(".next-que-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// ===========================================================
// QUIZ STATE VARIABLES
// ===========================================================
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQue = 5;
let currentQuestion = null;

const questionsIndexHistory = [];
let correctAnsCount = 0;

// ===========================================================
// HELPER FUNCTIONS
// ===========================================================

// Show quiz result
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnsCount}</b> out of <b>${numberOfQue}</b> questions correctly. Great effort!`;
    document.querySelector(".result-msg").innerHTML = resultText;
};

// Reset timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
};

// Start quiz timer
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
            highlightAnswer();
            nextQuestionBtn.style.visibility = "visible";
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
};

// Get a random question from selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(
        cat => cat.category.toLowerCase() === quizCategory.toLowerCase()
    )?.questions || [];

    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQue)) {
        return showQuizResult();
    }

    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));

    if (categoryQuestions.length === 0) return null;

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion;
};

// Highlight correct answer
const highlightAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
};

// Handle answer selection
const handleAnswer = (option, answerIndex) => {
    const isCorrect = currentQuestion.correctAnswer === answerIndex;

    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightAnswer() : correctAnsCount++;

    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
};

// Render a question on UI
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) {
        console.log("No question found in this category");
        return;
    }

    resetTimer();
    clearInterval(timer);
    startTimer();

    // Update UI
    answerOptions.innerHTML = ""; // Clear old options
    quizQuestion.textContent = currentQuestion.question;
    nextQuestionBtn.style.visibility = "hidden";
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQue}</b>`;

    // Display options
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
};

// ===========================================================
// BUTTON CLICK HANDLERS
// ===========================================================

// Category buttons
const categoryButtons = document.querySelectorAll('.category-buttons .category-butt');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Age buttons
const ageButtons = document.querySelectorAll('.age-buttons .category-butt');
ageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        ageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Start Quiz
const startQuiz = () => {
    const selectedCategoryBtn = confContainer.querySelector(".category-buttons .category-butt.active");
    if (!selectedCategoryBtn) {
        alert("Please select a category!");
        return;
    }
    quizCategory = selectedCategoryBtn.textContent.toLowerCase();

    const selectedAgeBtn = confContainer.querySelector(".age-buttons .question-btn.active");
    if (!selectedAgeBtn) {
        alert("Please select your age group!");
        return;
    }
    numberOfQue = parseInt(selectedAgeBtn.textContent);

    confContainer.style.display = "none";
    quizContainer.style.display = "block";

    renderQuestion();
};

// Reset Quiz (Try Again)
const resetQuiz = () => {
    resetTimer();
    correctAnsCount = 0;
    questionsIndexHistory.length = 0;

    confContainer.style.display = "block";
    quizContainer.style.display = "none";
    resultContainer.style.display = "none";

    // Remove any active button
    document.querySelector(".category-buttons .active")?.classList.remove("active");
    document.querySelector(".age-buttons .active")?.classList.remove("active");
};

// ===========================================================
// EVENT LISTENERS
// ===========================================================
nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz").addEventListener("click", startQuiz);

// // agar koi cheez samajh na aaye toh koi fayada nahi hai usko padhne ka ... 


// // select DOM elements
// const confContainer = document.querySelector(".config-container");
// const quizContainer = document.querySelector(".quiz-container");
// const answerOptions = document.querySelector(".answer-options");
// const quizQuestion = document.querySelector(".quiz-que");
// const nextQuestionBtn = document.querySelector(".next-que-btn");
// const questionStatus = document.querySelector(".question-status");
// const timerDiaplay = document.querySelector(".time-duration");
// const resultContainer = document.querySelector(".result-container");


// // document.querySelector(".category-buttons .category-butt").classList.add("active");
// // document.querySelector(".age-buttons .question-btn").classList.add("active");
// // quiz state variables
// const QUIZ_TIME_LIMIT = 15;
// let currentTime=QUIZ_TIME_LIMIT;
// let timer = null;
// let quizCategory = "programming";
// let numberOfQue = 5;
// let currentQuestion = null;

// const questionsIndexHistory = [];
// let correctAnsCount = 0;

// // Result container

// const showQuizResult=()=>{
//     quizContainer.style.display ="none";
//     resultContainer.style.display="block";

//     const resultText = `You answered <b>${correctAnsCount}</b> out of <b>${numberOfQue}</b> questions correctly. Great effort!`
//     document.querySelector(".result-msg").innerHTML = resultText;
// }

// //clear and reset timer
// const resetTimer = ()=>{
// clearInterval(timer);
// currentTime=QUIZ_TIME_LIMIT;
// timerDiaplay.textContent=`${currentTime}s`;
// }



// // Quix timer 
// const startTimer = () => {
//     timer = setInterval(() => {
//         currentTime--;
//         timerDiaplay.textContent = `${currentTime}s`;
//         if (currentTime<=0){

//             clearInterval(timer);
//             HighlightAns();
//             nextQuestionBtn.style.visibility="visible";
//              answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

//         }
//     },1000);

// }



// // function getRandomQuestion() {
// //     const categoryObj = questions.find(
// //         cat => cat.category.toLowerCase() === quizCategory.toLowerCase()
// //     )?.questions || [];

// //     if (!categoryObj) return null;

// //     const categoryQuestions = categoryObj.questions;  
// //     const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
// //     return randomQuestion;
// // }

// function getRandomQuestion() {
//     const categoryQuestions = questions.find(
//         cat => cat.category.toLowerCase() === quizCategory.toLowerCase()
//     )?.questions || [];

//     if(questionsIndexHistory.length>=Math.min(categoryQuestions.length,numberOfQue)){
//         return showQuizResult();
//     }

//     const availableQuestion = categoryQuestions.filter((_, index) =>!questionsIndexHistory.includes(index) );

//     if (categoryQuestions.length === 0) return null;

//     const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestions.length)];
    
//     questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
//     return randomQuestion;
// }


// const HighlightAns=()=>{
//     const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
//     correctOption.classList.add("correct");

//     const iconHTML = `<span class = "material-symbols-rounded">check_circle</span>`;
//     correctOption.insertAdjacentHTML("beforeend",iconHTML);


// }


// // answers handle

// const handleAnswer = (option, answerIndex) => {
    
//     const isCorrect = currentQuestion.correctAnswer === answerIndex;
   
//     option.classList.add(isCorrect ? 'correct' : 'incorrect' );
//     !isCorrect ? HighlightAns() : correctAnsCount++;

//     const iconHTML = `<span class = "material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
//     option.insertAdjacentHTML("beforeend",iconHTML);


//     answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

//     nextQuestionBtn.style.visibility="visible";
    
    
// }

// const renderQuestion = () => {
//      currentQuestion = getRandomQuestion();

//     if (!currentQuestion) {
//         console.log("No question found in this category");
//         return;
//     }
//     resetTimer();
//     clearInterval(timer);
//     startTimer();

//     console.log(currentQuestion);


//     //   UPDATE THE UI

//     // clear old options
//     answerOptions.innerHTML = ""; 
//     // display question
//     quizQuestion.textContent = currentQuestion.question;
//     nextQuestionBtn.style.visibility="hidden";   
//     document.querySelector(".quiz-que").textContent = currentQuestion.question;
//     questionStatus.innerHTML=`<b>${questionsIndexHistory.length}</b> of <b>${numberOfQue}</b>`;



//     // display options
//     currentQuestion.options.forEach((option,index) => {
//         const li = document.createElement("li");
//         li.classList.add("answer-option");
//         li.textContent = option;
//         answerOptions.appendChild(li);
//         li.addEventListener("click", ()=> handleAnswer(li,index));

//     });
// }

// // category selection
// // document.querySelectorAll(".category-options, .question-btn").forEach(option => {
// //     option.addEventListener("click",()=>{

// //     option.parentNode.querySelector(".active").classList.remove("active");
// //     option.classList.add("active");
// //     });
// // });

// // Category buttons
// // Category buttons
// // document.querySelectorAll(".category-buttons .category-butt").forEach(button => {
// //     button.addEventListener("click", ()=> {
// //         document.querySelector(".category-buttons .active")?.classList.remove("active");
// //         button.classList.add("active");
// //     });
// // });

// // // Age buttons
// // document.querySelectorAll(".age-buttons .question-btn").forEach(button => {
// //     button.addEventListener("click", ()=>{
// //         document.querySelector(".age-buttons .active")?.classList.remove("active");
// //         button.classList.add("active");
// //     });
// // });

// // Category buttons
// const categoryButtons = document.querySelectorAll('.category-buttons .category-butt');
// categoryButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         categoryButtons.forEach(b => b.classList.remove('active')); // remove active from others
//         btn.classList.add('active'); // add active to clicked
//     });
// });

// // Age buttons
// const ageButtons = document.querySelectorAll('.age-buttons .category-butt');
// ageButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         ageButtons.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//     });
// });


// // const startQuiz = () =>{
// //     confContainer.style.display="none";
// //     quizContainer.style.display="block";
// //     quizCategory = confContainer.querySelector(".category-buttons .category-butt.active").textContent;
// //     numberOfQue = parent(confContainer.querySelector(".age-buttons .question-btn.active").textContent);
// //     renderQuestion();
// // }

// const startQuiz = () => {
//     // Get selected category button
//     const selectedCategoryBtn = confContainer.querySelector(".category-buttons .category-butt.active");
//     if (!selectedCategoryBtn) {
//         alert("Please select a category!");
//         return;
//     }
//     quizCategory = selectedCategoryBtn.textContent.toLowerCase();

//     // Get selected age button
//     const selectedAgeBtn = confContainer.querySelector(".age-buttons .question-btn.active");
//     if (!selectedAgeBtn) {
//         alert("Please select your age group!");
//         return;
//     }
//     numberOfQue = parseInt(selectedAgeBtn.textContent); // convert string to number

//     // Show quiz container, hide config
//     confContainer.style.display = "none";
//     quizContainer.style.display = "block";

//     renderQuestion();
// };


// // const resetQuiz=()=>{
// //     resetTimer();
// //     correctAnsCount=0;
// //     questionsIndexHistory.length=0;
// //     confContainer.style.display="block";
// //     resultContainer.style.display="none";

// // }

// const resetQuiz = () => {
//     // Reset timer and question count
//     resetTimer();
//     correctAnsCount = 0;
//     questionsIndexHistory.length = 0;

//     // Show config container, hide quiz & result containers
//     confContainer.style.display = "block";
//     quizContainer.style.display = "none";
//     resultContainer.style.display = "none";

//     // Reset default active buttons
//     document.querySelector(".category-buttons .active")?.classList.remove("active");
//     document.querySelector(".age-buttons .active")?.classList.remove("active");
    
// };

// // initial render
// //renderQuestion();

// nextQuestionBtn.addEventListener("click",renderQuestion);
// document.querySelector(".try-again-btn").addEventListener("click",resetQuiz);
// document.querySelector(".start-quiz").addEventListener("click",startQuiz);

































































