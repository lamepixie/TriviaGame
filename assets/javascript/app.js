// when the user clicks our start button, the game will begin
$("#start").on("click", function() {
    $("#start").remove();
    $(".quote").remove();
    //  and play our nice song
    bgmMusic.play();
    bgmMusic.loop = true;
    game.loadQuestion();
})

// enables our answer buttons to register correctly based on user choice
$(document).on("click", ".answer-button", function(event) {
    game.clicked(event);
})

// not working but ideally should reset the game.
$(".reset").on("click", function () {
    game.reset();
})

// This array containts all of our questions and answer options, as well as correct answers.
var questions = [{
    question: "Who is the apprentice of Medivh the prophet?",
    answers: ["Tyrande","Khadgar","Arthas Menethil","Alexstrasza"],
    image: "assets/images/khadgar.jpg",
    correctAnswer: "Khadgar",
    fact: "Khadgar is now one of the most powerful mages in all of Azeroth!"
}, 
{   question: "Who is the dragon aspect of time?",
    answers: ["Nozdormu","Ysera","Chromie","Thrall"],
    image: "assets/images/nozdormu.jpg",
    correctAnswer: "Nozdormu",
    fact: "Nozdormu is the aspect of the bronze dragon flight, empowered by the Titans to watch over Azeroth."
}, 
{   question: "What is the level cap in the Wrath of the Lich King expansion?",
    answers: ["75","60","80","55"],
    image: "assets/images/wrath.jpg",
    correctAnswer: "80",
    fact: "Wrath of the Lich King sold over 2.8 million copies on its release date, making it the fastest selling computer game at that time."
}, 
{   question: "Jaina Proudmoore is the founder and former lady of what region in Kalimdor?",
    answers: ["Orgrimmar","Uldum","Theramore","Silithus"],
    image: "assets/images/jaina.jpg",
    correctAnswer: "Theramore",
    fact: "Jaina is the most powerful human sorceress alive and was a former leader of the Kirin Tor."
}, 
{   question: "What is the name of the Lich King's sword?",
    answers: ["Glamdring","Taeshalach","Light's Vengeance", "Frostmourne"],
    image: "assets/images/frostmourne.jpg",
    correctAnswer: "Frostmourne",
    fact: "Frostmourne was destroyed by Tirion Fordring following the Lich King's defeat in Icecrown Citadel."
 }, 
 {  question: "Azeroth is <i>not</i> the native home for which horde race?",
    answers: ["Goblin","Tauren","Orc", "Draenei"],
    image: "assets/images/orc.jpg",
    correctAnswer: "Orc",
    fact: "Orc's are one of the most prolific races on Azeroth today, but originally hail from the alien world of Draenor."
}, 
{   question: "Who is a prominent Night Elf leader and high priestess of Elune?",
    answers: ["Jarod Shadowsong","Illidan Stormrage","Queen Azshara","Tyrande Whisperwind"],
    image: "assets/images/tyrande.jpg",
    correctAnswer: "Tyrande Whisperwind",
    fact: "Tyrande led the night elves in the Third War, defeating the Burning Legion."
}, 
{   question: "Which of these capital cities is home to the Alliance?",
    answers: ["Silvermoon City","Thunder Bluff","Stormwind City","Garadar"],
    image: "assets/images/stormwind.png",
    correctAnswer: "Stormwind City",
    fact: "Located north of Elwynn Forest on the Eastern Kingdom's, Stormwind is the largest human city of Azeroth."
}, 
{   question: "Deathwing the Destroyer, formerly known as Neltharion the Earth-Warder, was the leader of which dragonflight?",
    answers: ["Black","Bronze","Red","Fire"],
    image: "assets/images/deathwing.jpg",
    correctAnswer: "Black",
    fact: "While Deathwing was once a benevolent entity, he is now completely evil. He hates all mortal races, and wishes to kill them all."
},
{   question: "Which of the races listed below is <i>not</i> native to Pandaria?",
    answers: ["Jinyu","Vulpera","Yaungol","Pandaren"],
    image: "assets/images/vulpera.jpg",
    correctAnswer: "Vulpera",
    fact: "Vulpera are a non-playable race that will appear in the newest expansion to World of Warcraft, <i>Battle for Azeroth</i>."
}];

var bgmMusic = new Audio("assets/sounds/wow_maintitle.mp3")

// our entire game is held within this variable
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function() {
        game.counter --;
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            game.timeUp();
        }
    },
    // end of countdown function

    // loads each questions and their answer options
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $("#timer").html("[SERVER]Reset in: 00:<span id='counter'>30</span> secs");
        $("#questions").html(questions[game.currentQuestion].question);
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#answers").append("<button class='answer-button' id='button-" + i + "' data-name='" + questions[game.currentQuestion].answers[i] + "'>" + questions[game.currentQuestion].answers[i] +"</button>");
        }
    },
    // end of loadQuestion function

    // moves onto the next question after it has been answered or there's been a timeUp
    nextQuestion: function() {
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        $("#answers").empty();
        $("#image").empty();
        $("#fact").empty();
        game.loadQuestion();
    },
    // end of nextQuestion function

    // moves onto the next question if the timer counts down to 0 and no answer has been selected
    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $("#timer").html("Out of Time!");
        $("#answers").html("The correct answer was: " + questions[game.currentQuestion].correctAnswer);
        $("#image").html("<img src='" + questions[game.currentQuestion].image + "'>");
        $("#fact").html(questions[game.currentQuestion].fact);
        if(game.currentQuestion == questions.length -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of timeUp function

    // displays to the user how they did on the quiz
    results: function() { 
        clearInterval(timer);
        $("#subwrapper").html("<h2>Finished!</h2>");
        $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + game.unanswered + "</h3>");
        $("#subwrapper").append("<button class='reset'>Turn back the sands of time and try again?</button>");
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

    // this displays all relevant data if the user made the correct selection on the quiz
    answeredCorrectly: function() {
        clearInterval(timer);
        game.correct++;
        $("#answers").html("That is correct! The answer is " + questions[game.currentQuestion].correctAnswer);
        $("#image").html("<img src='" + questions[game.currentQuestion].image + "'>");
        $("#fact").html(questions[game.currentQuestion].fact);
        if (game.currentQuestion == questions.length -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of answeredCorrectly function

    // this displays all relevant data if the user selects an incorrect selection on the quiz
    answeredIncorrectly: function() {
        clearInterval(timer);
        game.incorrect++;
        $("#answers").html("Sorry, the correct answer was " + questions[game.currentQuestion].correctAnswer);
        $("#image").html("<img src='" + questions[game.currentQuestion].image + "'>");
        $("#fact").html(questions[game.currentQuestion].fact);
        if (game.currentQuestion == questions.length -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    // end of answeredIncorrectly function

    // should reset the game, but it's not working.
    reset: function() {
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
