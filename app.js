//1
 const category =document.querySelector("article.card1 h2")
 const section= document.querySelector("article.card1 h2")

 const question =document.querySelector("article.card1 p")
 const section2= document.querySelector("article.card1 p")

 const answer =document.querySelector("article.card1 p#a1")
 const section3= document.getElementsByClassName("hidden")
//2
 const category1 =document.querySelector("article.card2 h2")
 const section4= document.querySelector("article.card2 h2")

 const question1 =document.querySelector("article.card2 p")
 const section5= document.querySelector("article.card2 p")

 const answer1 =document.querySelector("article.card2 p#a2")
 const section6= document.getElementsByClassName("hidden")


//3
 const category2 =document.querySelector("article.card3 h2")
 const section7= document.querySelector("article.card3 h2")

 const question2 =document.querySelector("article.card3 p")
 const section8= document.querySelector("article.card3 p")

 const answer2 =document.querySelector("article.card3 p#a3")
 const section9= document.getElementsByClassName("hidden")
//4
 const category3 =document.querySelector("article.card4 h2")
 const section10= document.querySelector("article.card4 h2")

 const question3 =document.querySelector("article.card4 p")
 const section11= document.querySelector("article.card4 p")

 const answer3 =document.querySelector("article.card4 p#a4")
 const section12= document.getElementsByClassName("hidden")

 //5
 const category4 =document.querySelector("article.card5 h2")
 const section13= document.querySelector("article.card5 h2")

 const question4 =document.querySelector("article.card5 p")
 const section14= document.querySelector("article.card5 p")

 const answer4 =document.querySelector("article.card5 p#a5")
 const section15= document.getElementsByClassName("hidden")

 //6

 const category5 =document.querySelector("article.card6 h2")
 const section16= document.querySelector("article.card6 h2")

 const question5 =document.querySelector("article.card6 p")
 const section17= document.querySelector("article.card6 p")

 const answer5 =document.querySelector("article.card6 p#a6")
 const section18= document.getElementsByClassName("hidden")

 //7

 const category6 =document.querySelector("article.card7 h2")
 const section19= document.querySelector("article.card7 h2")

 const question6 =document.querySelector("article.card7 p")
 const section20= document.querySelector("article.card7 p")

 const answer6 =document.querySelector("article.card7 p#a7")
 const section21= document.getElementsByClassName("hidden")

 //8
 const category7 =document.querySelector("article.card8 h2")
 const section22= document.querySelector("article.card8 h2")

 const question7 =document.querySelector("article.card8 p")
 const section23= document.querySelector("article.card8 p")

 const answer7 =document.querySelector("article.card8 p#a8")
 const section24= document.getElementsByClassName("hidden")
//9
const category8 =document.querySelector("article.card9 h2")
 const section25= document.querySelector("article.card9 h2")

 const question8 =document.querySelector("article.card9 p")
 const section26= document.querySelector("article.card9 p")

 const answer8 =document.querySelector("article.card9 p#a9")
 const section27= document.getElementsByClassName("hidden")

 //10

 const category9 =document.querySelector("article.card10 h2")
 const section28= document.querySelector("article.card10 h2")

 const question9 =document.querySelector("article.card10 p")
 const section29= document.querySelector("article.card10 p")

 const answer9 =document.querySelector("article.card10 p#a10")
 const section30= document.getElementsByClassName("hidden")

 

//  const question=document.getElementById("p#1")

//  question.textContent=trivia.question

//  section.append(category,question)

//  const section =document.getElementById("1")
//  const category1 =document.querySelector("h2#1");
//  category1.textContent= trivia.category;
//  const question1 =document.querySelector("p#1");
//  question1.textContent=trivia.question;
// const answer = document.querySelector("p#a1");
// answer.textContent=trivia.correct_answer;

 
//  buttonClick.addEventListener("click",()=>{

 { 
//  function showAnswer() {
//      const buttonClick = document.querySelector("article.card1 button")
//      buttonClick.addEventListener("onclick", () => {
//          answer.setAttribute.class = "shown"



//      })
//  }
//  showAnswer()
 }


function displayTrivia({results}){

 const [trivia]=results;

console.log("here are my results",trivia)

//  const category=document.querySelector("h2#1")

 category.textContent=trivia.category

 question.textContent=trivia.question
 
 answer.textContent=trivia.correct_answer

 



//  section.append(category);
//  section2.append(question);
// section3.append(answer);
// section4.append(category1);
//  section5.append(question1);
// section6.append(answer1);



 };
function displayTrivia2({results}){

    const[trivia2]=results;
    category1.textContent=trivia2.category

 question1.textContent=trivia2.question
 
 answer1.textContent=trivia2.correct_answer



}

function displayTrivia3({results}){
    const[trivia3]=results;
    category2.textContent=trivia3.category

 question2.textContent=trivia3.question
 
 answer2.textContent=trivia3.correct_answer


}

function displayTrivia4({results}){
    const[trivia4]=results;
    category3.textContent=trivia4.category

 question3.textContent=trivia4.question
 
 answer3.textContent=trivia4.correct_answer

}

function displayTrivia5({results}){
    const[trivia5]=results;
    category4.textContent=trivia5.category

 question4.textContent=trivia5.question
 
 answer4.textContent=trivia5.correct_answer

}

function displayTrivia6({results}){
    const[trivia6]=results;
    category5.textContent=trivia6.category

 question5.textContent=trivia6.question
 
 answer5.textContent=trivia6.correct_answer

}

function displayTrivia7({results}){
    const[trivia7]=results;
    category6.textContent=trivia7.category

 question6.textContent=trivia7.question
 
 answer6.textContent=trivia7.correct_answer

}

function displayTrivia8({results}){
    const[trivia8]=results;
    category7.textContent=trivia8.category

 question7.textContent=trivia8.question
 
 answer7.textContent=trivia8.correct_answer

}

function displayTrivia9({results}){
    const[trivia9]=results;
    category8.textContent=trivia9.category

 question8.textContent=trivia9.question
 
 answer8.textContent=trivia9.correct_answer

}

function displayTrivia10({results}){
    const[trivia10]=results;
    category9.textContent=trivia10.category

 question9.textContent=trivia10.question
 
 answer9.textContent=trivia10.correct_answer

}
fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia(JSONresponse))
  .catch(displayTrivia);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia2(JSONresponse))
  .catch(displayTrivia2);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia3(JSONresponse))
  .catch(displayTrivia3);
  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia4(JSONresponse))
  .catch(displayTrivia4);
  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia5(JSONresponse))
  .catch(displayTrivia5);
  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia6(JSONresponse))
  .catch(displayTrivia6);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia7(JSONresponse))
  .catch(displayTrivia7);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia8(JSONresponse))
  .catch(displayTrivia8);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia9(JSONresponse))
  .catch(displayTrivia9);

  fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
//   .then((JSONresponse) => console.log(JSONresponse))
   .then((JSONresponse) => displayTrivia10(JSONresponse))
  .catch(displayTrivia10);
 

// console.log("here is my object:",trivia)
//  console.log(trivia.category)
//  console.log(trivia.type)
//  console.log(trivia.difficulty)
//  console.log(trivia.incorrect_answers[0])
//  console.log(trivia.incorrect_answers[1])
//  console.log(trivia.incorrect_answers[2])

//  console.log(trivia.question)
//  console.log(trivia.correct_answer)

// module.exports={showAnswer};