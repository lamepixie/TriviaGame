$("#start").on("click", function() {
    $("#start").remove();
    bgmMusic.play();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function(event) {
    game.clicked(e);
})

$(document).on("click", "#reset", function(){
    game.reset();
})

// This array containts all of our questions and answer options, as well as correct answers.
var questions = [{
    question: "Who is the apprentice of Medivh the prophet?",
    answers: ["Tyrande","Khadgar","Arthas Menethil","Alexstrasza"],
    image: "assets/images/khadgar.jpg",
    correctAnswer: "Khadgar"
}, 
{   question: "Who is the dragon aspect of time?",
    answers: ["Nozdormu","Ysera","Chromie","Thrall"],
    image: "assets/images/nozdormu.jpg",
    correctAnswer: "Nozdormu"
}, 
{   question: "What is the level cap in the Wrath of the Lich King expansion?",
    answers: ["75","60","80","55"],
    image: "/assets/images/wrath.jpg",
    correctAnswer: "80"
}, 
{   question: "Jaina Proudmoore is the founder and former lady of what region in Kalimdor?",
    answers: ["Orgrimmar","Uldum","Theramore","Silithus"],
    image: "assets/images/jaina.jpg",
    correctAnswer: "Theramore"
}, 
{   question: "What is the name of the Lich King's sword?",
    answers: ["Frostmourne","Glamdring","Taeshalach","Light's Vengeance"],
    image: "assets/images/frostmourne.jpg",
    correctAnswer: "Frostmourne"
 }, 
 {  question: "Azeroth is NOT the native home for which horde race?",
    answers: ["Orc","Tauren","Goblins", "Draenei"],
    image: "assets/images/orc.jpg",
    correctAnswer: "Orc"
}, 
{   question: "Who is a prominent Night Elf leader and high priestess of Elune?",
    answers: ["Tyrande Whisperwind","Illidan Stormrage","Queen Azshara","Jarod Shadowsong"],
    image: "assets/images/tyrande.jpg",
    correctAnswer: "Tyrande Whisperwind"
}, 
{   question: "Which of these capital cities is home to the Alliance?",
    answers: ["Silvermoon City","Thunder Bluff","Stormwind City","Garadar"],
    image: "assets/images/stormwind.png",
    correctAnswer: "Stormwind City"
}, 
{   question: "Deathwing the Destroyer, formerly known as Neltharion the Earth-Warder, was the leader of which dragonflight?",
    answers: ["Black","Bronze","Red","Fire"],
    image: "assets/images/deathwing.jpg",
    correctAnswer: "Black"
}];

var bgmMusic = new Audio("assets/sounds/wow_maintitle.mp3")

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function(){
        game.counter --;
        $("#counter").html(game.counter);
        if(game.counter <= 0){
            game.timeUp();
        }
    },
    // end of countdown function

    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $("#timer").html("Time remaining: 00:<span id='counter'>30</span> secs");
        $("#questions").append(questions[game.currentQuestion].question);
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            // I keep getting an error pointing to the line of code below that 0 is undefined but i can't figure out what went wrong.  so this game doesn't work
            $("#answers").append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">'+questions[game.currentQuestion].answer[i]+'</button>');
        }
    },
    // end of loadQuestion function

    nextQuestion: function(){
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    // end of nextQuestion function

    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#timer").html("Out of Time!");
        $("#answers").append("The correct answer was: " + questions[game.currentQuestion].correctAnswer);
        $("#image").append("<img src='" + questions[game.currentQuesion].image + "'>");
        if(game.currentQuestion == questions.length -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of timeUp function

    results: function() { 
        clearInterval(timer);
        $("#subwrapper").html("<h2>Finished</h2>");
        $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + game.unanswered + "</h3>");
        $("#subwrapper").append("<button id='reset'>Try Again</button>");
    },
    // end of results function

    clicked: function(event) {
        clearInterval(timer);
        if($(event.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    // end of clicked function

    answeredCorrectly: function(){
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2> Correct! </h2>");
        $("#answers").append("The correct answer is: " + questions[game.currentQuestion].correctAnswer);
        $("#image").append("<img src='" + questions[game.currentQuesion].image + "'>");
        if (game.currentQuestion == questions.legnth -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of answeredCorrectly function

    answeredIncorrectly: function(){
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2> Wrong! </h2>");
        $("#answers").append("The correct answer was: " + questions[game.currentQuestion].correctAnswer);
        $("#image").append("<img src='" + questions[game.currentQuesion].image + "'>");
        if (game.currentQuestion == questions.legnth -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of answeredIncorrectly function

    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
    // end of reset function
};
// end of game variable
