const key = [
    {
        question: "Q1 : Javascript is an _______ language?",
        a: "Object-Based",
        b: "Object-Oriented",
        c: "Procedural",
        d: "None of above",
        ans: 'ans2',
    },
    {
        question: "Q2 : Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of above",
        ans: 'ans1',
    },
    {
        question: "Q3 : Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: 'ans4',
    },
    {
        question: "Q4 : The 'function' and 'var' are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Procedural",
        d: "None of above",
        ans: 'ans1',
    },
    {
        question: "Q5 : Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Declaration statements",
        d: "Prototypes",
        ans: 'ans3',
    },
    {
        question: "Q6 : Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
        ans: 'ans2',
    },
    {
        question: "Q7 :  How ++ works in Javascript? Find output of below Javascript code. <br> var a = 1; <br> document.write(a--); <br> document.write(a);",
        a: "00",
        b: "01",
        c: "11",
        d: "10",
        ans: 'ans4',
    },
    {
        question: "Q8 : Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        ans: 'ans1',
    },
    {
        question: "Q9 : What will be the output of the following Javascript code? <br> var string1 = Letsfindcourse; <br> var intvalue = 30; <br> alert( string1 + intvalue );",
        a: "Letsfindcourse 30",
        b: "30",
        c: "Letsfindcourse30",
        d: "Exception",
        ans: 'ans3',
    },
    {
        question: "Q10 : What is the output of following Javascript? <br> var a = 'letsfind'; <br> var b = 'course'; <br> var c = a/b; <br> document.write(c);",
        a: "letsfindcourse",
        b: "letsfind/course",
        c: "NaN",
        d: "None of the above",
        ans: 'ans3',
    },
    {
        question: "Q11 : What is the output of following Javascript? <br> var a = 'letsfind'; <br> var b = 'course'; <br> var c = a/b; <br> document.write(c);",
        a: "letsfindcourse",
        b: "letsfind/course",
        c: "NaN",
        d: "None of the above",
        ans: 'ans3',
    },
];


const questions = document.querySelector(".question");
const ans1 = document.querySelector("#option1");
const ans2 = document.querySelector("#option2");
const ans3 = document.querySelector("#option3");
const ans4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector(".submit");
const result = document.querySelector("#result");
const percentage = document.querySelector(".percentage");
const passFailText = document.querySelector("#pass_fail_text");
// console.log(circle[1]);
const btnz = document.querySelector("#btnzs");
let arrayCount = 0;
let scores = 0;
const circle = document.getElementById('crc')
// let attributeVal = circle.getAttribute("stroke-dasharray");

// console.log(attributeVal);







function hide() {
    start();
    arrayCount = 1;
    document.querySelector("#start").style.display = "none";
    document.querySelector("#round").style.display = "none";
    // document.querySelector("#choose").style.display = "block";
    document.querySelector("#rules").style.display = "block";
    document.body.style.display = "block";
    document.body.style.height = "40vh";
    document.querySelector(".breakTag").style.display = "none";
}

btnz.addEventListener("click", function () {
    document.querySelector("#quizStart").style.display = "block";
    document.querySelector("#ul1").style.display = "block";
    document.querySelector("#ul2").style.display = "block";
    document.querySelector("#ul3").style.display = "block";
    document.querySelector("#ul4").style.display = "block";
    document.querySelector("#rules").style.display = "none";
    
});

let btn = document.getElementById("btns");
btn.addEventListener("click", function () {
    document.body.style.background = "#1D1F20"
});

submit.addEventListener("click", function () {
    start();
    submit.innerHTML = "Next"


    
    if (arrayCount == 9) {
        submit.innerHTML = "Submit"

    }
    if (arrayCount == 10) {
        result.style.display = "block";
        percentage.innerHTML = `${scores}0%`
        quizStart.style.display = "none";
        let t = circle.setAttribute("stroke-dasharray", scores + "0" + ", 100");
    }
    if (scores == 0) {
        percentage.innerHTML = "0%"
    }  
    if (scores < 6) {
        passFailText.innerHTML = 'You Failed !'
        
        
    } else {
        passFailText.innerHTML = "Congratz You passed !"
        
        
        
    }
    let check = getcheckAnswer();
    console.log(check);
    console.log("Orignal " + key[arrayCount - 1].ans);

    if (arrayCount > 0) {
        if (check === key[arrayCount - 1].ans) {
            scores++
        }
    }
    arrayCount++;
});

function start() {
    let structure = key[arrayCount]
    questions.innerHTML = structure.question
    ans1.innerHTML = structure.a
    ans2.innerHTML = structure.b
    ans3.innerHTML = structure.c
    ans4.innerHTML = structure.d
};

function getcheckAnswer() {
    let answer;
    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};