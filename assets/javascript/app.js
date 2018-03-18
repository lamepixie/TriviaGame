// variables needed
var userChoice;

var correct = 0;

var wrong = 0;

var left = 0;

var questionNo = 0;

// This array containts all of our questionNos and answer options, as well as correct answers.
var questions = [{
    questionNo: "Who is the apprentice of Medivh the prophet?",
    answers: ["Tyrande","Khadgar","Arthas Menethil","Alexstrasza"],
    image: "assets/image/khadgar.jpg",
    correctInd: 1
}, {
    questionNo: "Who is the dragon aspect of time?",
    answers: ["Nozdormu","Ysera","Chromie","Thrall"],
    image: "assets/image/nozdormu.jpg",
    correctInd: 0
}, {
    questionNo: "What is the level cap in the Wrath of the Lich King expansion?",
    answers: ["75","60","80","55"],
    image: "assets/image/wrath.jpg",
    correctInd: 2
}, {
    questionNo: "Jaina Proudmoore is the founder and former lady of what region in Kalimdor?",
    answers: ["Orgrimmar","Uldum","Theramore","Silithus"],
    image: "assets/image/jaina.jpg",
    correctInd: 2
}, {
    questionNo: "What is the name of the Lich King's sword?",
    answers: ["Frostmourne","Glamdring","Taeshalach","Light's Vengeance"],
    image: "assets/image/frostmourne.jpg",
    correctInd: 0
 }, {
    questionNo: "Azeroth is NOT the native home for which horde race?",
    answers: ["Orc","Tauren","Goblins", "Draenei"],
    image: "assets/image/orc.jpg",
    correctInd: 0
}, {
    questionNo: "Who is a prominent Night Elf leader and high priestess of Elune?",
    answers: ["Tyrande Whisperwind","Illidan Stormrage","Queen Azshara","Jarod Shadowsong"],
    image: "assets/image/tyrande.jpg",
    correctInd: 0
}, {
    questionNo: "Which of these capital cities is home to the Alliance?",
    answers: ["Silvermoon City","Thunder Bluff","Stormwind City","Garadar"],
    image: "assets/image/stormwind.png",
    correctInd: 2
}, {
    questionNo: "Deathwing the Destroyer, formerly known as Neltharion the Earth-Warder, was the leader of which dragonflight?",
    answers: ["Black","Bronze","Red","Fire"],
    image: "assets/image/deathwing.jpg",
    correctInd: 0
}];

// trivia game begins!
$("#start_button").click(function() {
$(this).hide();
// starting the counter
counter = setInterval(timer, 1000); 
startGame();
}); 

function timer(){
var count = 30;
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
    questions[0].correctInd;

    if (userChoice != questions[0].correctInd) {

    $("#answers").text("Wrong Answer! The correct answer is" + questions[0].correctInd + ".");
    wrong++;
        //  I want to pull the image from the index to display in the div. This is not working yet.
        $("#image_display").append(image[0]);

    } else if (userChoice === questions[0].correctInd) {
    $("#answers").text("Correct!");
    correct++;
        //  I want to pull the image from the index to display in the div. This is not working yet.
        $("#image_display").append(image[0]);
    }
});


