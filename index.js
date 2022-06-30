$(function() {
  getQuestion();
});

var baseUrl = "https://atika.azurewebsites.net";
var questionId = "";

function getQuestion() {
  $.get(baseUrl + "/api/quiz/question")
    .done(function(response) {
      questionId = response.questionId;
      $("#question").text(response.question);
    });
}

function submitAnswer() {
  let answer = $("#answer").val();
  let playerName = $("#playerName").val();

  if (!playerName) {
    alert("Player name cannot be empty.");
    return;
  }

  if (!answer) {
    alert("Answer cannot be empty.");
    return;
  }

  let data = {
    questionId: questionId,
    playerName: playerName,
    answer: answer
  };

  $.post({
    url: baseUrl + "/api/quiz/answer",
    data: JSON.stringify(data),
    contentType: "application/json"
  }).done(function(response) {
      $("#message").text(response.message);
      $("#score").text(response.score);
      $("#answer").val("");
      getQuestion();
    });
}