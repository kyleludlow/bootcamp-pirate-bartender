var attributes = {
    STRONG: 'STRONG',
    SALTY: 'SALTY'
};

var Bartender = function() {
    this.questionList = new QuestionList();
};

Bartender.prototype.takeOrder = function() {
    var order = new Order();
    var questions = this.questionList.questions;
    for (var i=0; i<questions.length; i++) {
        var question = questions[i];
        var preference = question.getPreference();
        order.addPreference(preference);
    }
    return order;
};

var Question = function(attribute, text) {
    this.attribute = attribute;
    this.text = text;
};

Question.prototype.getPreference = function() {
    // TODO: Find a better way to get access to the select
    var select = $('.' + this.attribute);
    var isLiked = select.val() === "true";
    var preference = new Preference(this.attribute, isLiked);
    return preference;
};

Question.prototype.asHTML = function() {
    var select = (
        '<select class="' + this.attribute + '">' +
        '<option value="true">Aye</option>' +
        '<option value="false">Nay</option>' +
        '</select>'
    );
    return '<li>' + this.text + ' ' + select + '</li>';
};

var QuestionList = function() {
    this.questions = [];
};

QuestionList.prototype.addQuestion = function(question) {
    this.questions.push(question);
};

QuestionList.prototype.asHTML = function() {
    return this.questions.reduce(function(prev, question) {
        return prev + question.asHTML();
    }, '');
};

var Order = function() {
    this.preferences = {};
};

Order.prototype.addPreference = function(preference) {
    this.preferences[preference.attribute] = preference;
};

var Preference = function(attribute, isLiked) {
    this.attribute = attribute; // Whether it is strong, salty etc.
    this.isLiked = isLiked;
};

$(document).ready(function() {
    var bartender = new Bartender();

    var strongQuestion = new Question(attributes.STRONG, 'Do ye like yer drinks strong?');
    var saltyQuestion = new Question(attributes.SALTY, 'Do ye like it with a salty tang?');

    //adds question objects to questionlist array inside bartender object
    bartender.questionList.addQuestion(strongQuestion);
    bartender.questionList.addQuestion(saltyQuestion);

    $('.question-list').html(bartender.questionList.asHTML());

    $('.place-order').click(function() {
        var order = bartender.takeOrder();
        console.log(order);
    });

});