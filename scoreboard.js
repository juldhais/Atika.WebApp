$(function() {
  var baseUrl = "https://atika.azurewebsites.net";

  $.get(baseUrl + "/api/quiz/scoreboard")
  .done(function(response) {
    let tbody = "";
    for(let i in response) {
      let record = response[i];
      let tr = `<tr>`;
      tr += `<td>#${ parseInt(i) + 1 }</td>`;
      tr += `<td>${ record.playerName }</td>`;
      tr += `<td>${ record.score }</td>`;
      tr += `</tr>`;
      tbody += tr;
    }
    $("#tbody").html(tbody);
  });
});