var attributes = {
    STRONG: 'STRONG',
    SALTY: 'SALTY'
};


var Bartender = function(questionlist) {
    this.questionlist = new Questionlist();
};


var Question = function(attribute, text) {
    this.attribute = attribute;
    this.text = text;
};

Question.prototype.getPreference

Question.prototype.asHTML = function() {

    var select = (
        '<select>' +
            '<option value="true"Aye</option>' +
        '<option value="false"Nay</option>' +
            '</select>'
    );

    return '<li>' + this.text + ' ' + select + '</li>>';
};

var Questionlist = function() {
    this.questions = [];
};

Questionlist.prototype.addQuestion = function(question) {
    this.questions.push(question);
};

Question.prototype.asHTML = function() {
    return this.questions.reduce(function(prev, question) {
        return prev + question.asHTML();
    }, '');
};

var Order = function() {
    this.preferences = {};
};

Order.prototype.addPreference = function(preference) {
    this.preference[preference.attribute] = preference;
};

var Preference = function(attribute, isliked) {
    this.attribute = attribute;
    this.isliked = isliked;
};
$(document.ready(function() {
    var bartender = new Bartender();
    var questionlist = new Questionlist();
    var strongQuestion = new Question(attributes.STRONG, 'Do ye like it strong?');
    var saltyQuestion = new Question(attribute.SALTY, 'Do ye like it salty?');
    bartender.questionlist.addQuestion(strongQuestion);
    bartender.questionlist.addQuestion(saltyQuestion);

    $('.question-list').html(question.asHTML());

    var order = new Order();

}));