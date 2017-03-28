var quizArray = [
  {
    answer: 'ashente'
  },
  {
    answer: 'green'
  },
  {
    answer: 'yes'
  },
  {
    answer: 'love'
  },
  {
    answer: 'both'
  },
  {
    answer: 'chopper'
  },
  {
    answer: 'heavens'
  }
]
//CORRECT ANSWER SECTION



$('.header1').html('ANIME QUIZ ONLINE');
$('.header1').fadeIn(2000);
$('.header1').fadeOut(2000);
$('.header1').fadeIn(2000);
$('.header1').fadeOut(2000);
$('.header1').fadeIn(2000);
$('.header1').fadeOut(2000);
$('.header1').fadeIn(2000);
$('.medDiv').slideDown(1000);
$('.bigSpan').fadeIn(2500);


function answer(){
var correct = 0;
var wrong= 0;
var questions= document.querySelectorAll('.question');

for (i = 0; i < quizArray.length; i++){
  if(questions[i].value == quizArray[i].answer){
    correct +=1;
    document.getElementById('score').value = correct;
  } else {
    wrong +=1;
    document.getElementById('wrong').value = wrong;
    }
  }
  $('#score').slideDown(600);
  $('#wrong').slideDown(600);
}


// var answerCorrect = false;
//
// var question1 = document.getElementById('question1').value;
// for (i = 0; i < quizArray.length; i++) {
//     if (question1 == quizArray[i].answer) {
//       answerCorrect = true;
//     }
// }
// if (answerCorrect){
//   correct += 1;
//   document.getElementById('score').value = correct
// }
// else {
//   wrong += 1;
//   document.getElementById('wrong').value = wrong
// }
//   }
//   var question2= document.getElementById('question2').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question2 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//     } else {
//       wrong +=1;
//       document.getElementById('wrong').value = wrong
//
//     }
//   }
//   var question3= document.getElementById('question3').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question3 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//     } else {
//       wrong +=1;
//       document.getElementById('wrong').value = wrong
//
//     }
//   }
//   var question4= document.getElementById('question4').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question4 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//     } else {
//       wrong +=1;
//       document.getElementById('wrong').value = wrong
//
//     }
//   }
//   var question5= document.getElementById('question5').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question5 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//     } else {
//       wrong +=1;
//       document.getElementById('wrong').value = wrong
//
//     }
//   }
//   var question6= document.getElementById('question6').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question6 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//     } else {
//       wrong +=1;
//       document.getElementById('wrong').value = wrong
//
//     }
//   }
//   var question7= document.getElementById('question7').value;
//   for(i = 0; i < quizArray.length; i++){
//     if(question7 == quizArray[i].answer){
//       correct +=1;
//       document.getElementById('score').value = correct
//         } else {
//           wrong +=1;
//           document.getElementById('wrong').value = wrong
//
//         }
//       }
