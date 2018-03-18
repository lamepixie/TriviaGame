// variables needed
var userChoice;

var correct = 0;

var wrong = 0;

var left = 0;

var questionNo = 0;

var count = 30;

// This array containts all of our questionNos and answer options, as well as correct answers.
var questions = [{
    questionNo: "Who is the apprentice of Medivh the prophet?",
    answers: ["Tyrande","Khadgar","Arthas Menethil","Alexstrasza"],
    image: "assets/images/khadgar.jpg",
    answerIndex: 1
}, 
{
    questionNo: "Who is the dragon aspect of time?",
    answers: ["Nozdormu","Ysera","Chromie","Thrall"],
    image: "assets/images/nozdormu.jpg",
    answerIndex: 0
}, 
{
    questionNo: "What is the level cap in the Wrath of the Lich King expansion?",
    answers: ["75","60","80","55"],
    image: "/assets/images/wrath.jpg",
    answerIndex: 2
}, 
{
    questionNo: "Jaina Proudmoore is the founder and former lady of what region in Kalimdor?",
    answers: ["Orgrimmar","Uldum","Theramore","Silithus"],
    image: "assets/images/jaina.jpg",
    answerIndex: 2
}, 
{
    questionNo: "What is the name of the Lich King's sword?",
    answers: ["Frostmourne","Glamdring","Taeshalach","Light's Vengeance"],
    image: "assets/images/frostmourne.jpg",
    answerIndex: 0
 }, 
 {
    questionNo: "Azeroth is NOT the native home for which horde race?",
    answers: ["Orc","Tauren","Goblins", "Draenei"],
    image: "assets/images/orc.jpg",
    answerIndex: 0
}, 
{
    questionNo: "Who is a prominent Night Elf leader and high priestess of Elune?",
    answers: ["Tyrande Whisperwind","Illidan Stormrage","Queen Azshara","Jarod Shadowsong"],
    image: "assets/images/tyrande.jpg",
    answerIndex: 0
}, 
{
    questionNo: "Which of these capital cities is home to the Alliance?",
    answers: ["Silvermoon City","Thunder Bluff","Stormwind City","Garadar"],
    image: "assets/images/stormwind.png",
    answerIndex: 2
}, 
{
    questionNo: "Deathwing the Destroyer, formerly known as Neltharion the Earth-Warder, was the leader of which dragonflight?",
    answers: ["Black","Bronze","Red","Fire"],
    image: "assets/images/deathwing.jpg",
    answerIndex: 0
}];

var bgmMusic = new Audio("assets/sounds/wow_maintitle.mp3")

// trivia game begins!
$("#start").click(function() {
bgmMusic.play();
$(this).hide();
// starting the counter
counter = setInterval(timer, 1000); 
startGame();
}); 

function timer() {
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}
// displays time remaining on page
 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}

// displays our trivia question and answer options to the user
function startGame() {
$("#questions").html(questions[0].questionNo);
questionNo++;

  var answersArr = questions[0].answers;
  var buttonsArr = [];

// loop
  for (var i = 0; i < answersArr.length; i++) {
    var button = $("<button>");
    button.text(answersArr[i]);
    button.attr("data-id", i);
    $("#answers").append(button);
   }
} 

 $("#answers").click("button", function(e) {
    userChoice = $(this).data("id");
    questions[0].answerIndex;

    if (userChoice != questions[0].answerIndex) {

        $("#answers").text("Wrong Answer! The correct answer is" + questions[0].answerIndex + ".");
        wrong++;
        //  I want to pull the image from the index to display in the div. This is not working yet.
        $("#image").prepend("<img src=" + "assets/images/nozdormu.jpg" + ">");

    } else if (userChoice === questions[0].answerIndex) {
        $("#answers").text("Correct!");
        correct++;
        //  I want to pull the image from the index to display in the div. This is not working yet.
        $("#image").prepend("<img src=" + "assets/images/nozdormu.jpg" + ">");
    }
});

