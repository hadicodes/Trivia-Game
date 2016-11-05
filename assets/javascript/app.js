//Global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//Objects: Question,Answers & Correct Answers Objects
var q1 = {
    question1: 'Doing this action can remove 2 years of a persons life expectancy?',
    answers: ['Sitting', 'Eating Doritos', 'Watching TV', 'Complaining', 'Sitting'],
    rightAnswer: 'Sitting',
    name: 'q1'
};

var q2 = {
    question1: 'The human body can distinguish 500 shades of which color?',
    answers: ['Red', 'Purple', 'Grey', 'Blue', 'Grey'],
    rightAnswer: 'Grey',
    name: 'q2'
};

var q3 = {
    question1: ' Wearing what in your ear can increase the bacteria in your ear 700 times?',
    answers: ['Hearing Aids', 'Ear Plugs', 'Cotton Balls', 'Headphones'],
    rightAnswer: 'Headphones',
    name: 'q3'
};

var q4 = {
    question1: 'Most people fall asleep in how many minutes?',
    answers: ['Five', 'Seven', 'Ten', 'Fourteen'],
    rightAnswer: 'Seven',
    name: 'q4'
};

var q5 = {
    question1: 'There are sixty thousand miles of what in the human body?',
    answers: ['Blood Vessels', 'Cells', 'Intestines', 'Germs'],
    rightAnswer: 'Blood Vessels',
    name: 'q5'
};

var questions = [q1, q2, q3, q4, q5];


//Check value of radio button clicked
function checkAnswer() {
    for (var i = 0; i < questions.length; i++) {
        var rightAnswer = questions[i].rightAnswer;
        var inputName = questions[i].name;
        var clicked = $('input[type="radio"][name=' + inputName + ']:checked').val();
        if (clicked === undefined) {
            unanswered++;
        } else if (clicked === rightAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }
}

function showResults() {
    $('#results').append('Correctly answered: ' + correctAnswers + '</br>');
    $('#results').append('Incorrectly answered: ' + incorrectAnswers + '</br>');
    $('#results').append('Unanswered: ' + unanswered + '</br>');
}

//Count down timer at the top of the page
//user has 40 seconds to complete the quiz
var count = 25;
var interval;
var timeUp;

function timer() {
    count--;
    if (count === 0) {
        timerMessage();
        clearInterval(interval);
    }
    $('#countdown-timer').html(count);
}

function timerMessage() {
    $('#timer-message').html('Time is up!');
}


$(document).ready(function() {
    $('.start').show();
    $('.game').hide();
    $('.results').hide();
    $('#start-button').on('click', function() {
        $('.game').show();
        interval = setInterval(timer, 1000);
        $('.start').hide();
        timeUp = setTimeout(function() {
            clearInterval(interval);
            checkAnswer();
            $('#results').append('You ran out of time!</br>');
            showResults();
            $('.results').show();
            $('.game').hide();
        }, 25000);
    });
    $('#done-button').on('click', function() {
        clearTimeout(timeUp);
        clearInterval(interval);
        checkAnswer();
        showResults();
        $('.results').show();
        $('.game').hide();
    });

});
