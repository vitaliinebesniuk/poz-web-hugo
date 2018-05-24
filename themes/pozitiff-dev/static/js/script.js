$(document).ready(function() {
  $(".bxslider").bxSlider({
      controls: true,
      nextText: '<span class="icon-chevron-thin-right"></span>',
      prevText: '<span class="icon-chevron-thin-left"></span>'
  })
});

function myFunction(x) {
  x.classList.toggle("change");
}

$("#contact-form").submit(function(event) {
  event.preventDefault();
  var formData = $("#contact-form").serializeArray();
  var toSend = [];
  formData.forEach(function(record) {
      var rObj = {};
      var rKey = record.name;
      rObj[rKey] = record.value;
      toSend.push(rObj)
  });
  var xhr = new XMLHttpRequest;
  var url = "https://api.pozitiff.chat/hubot/pozitiff-dev-message";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
      var notification = "<p>Thanks, for your interest. We will get in touch with you within 24h.</p>";
      $("#notify").html(notification);
      $("#notify").addClass("uk-alert")
  };
  xhr.send(JSON.stringify(toSend))
});
$(document).ready(function() {
  function LoadHours() {
      $.ajax({
          url: "http://hs.pozitiff.ua/pozitiff?true",
          success: function(result) {
              var showHours = parseFloat(result.hours).toFixed(2);
              var today = new Date;
              var started = new Date(2017, 8, 7);
              var days = (today - started) / 1e3 / 60 / 60 / 24;
              var cnt1 = 15;
              var cnt3 = (showHours / 24 * 6).toFixed();
              $(".bold1").text(" PROJECTS");
              $(".regular-text1").text("COMPLETED");
              $(".bold2").text(" HOURS");
              $(".regular-text2").text("WORKED");
              $(".bold3").text(" CUPS");
              $(".regular-text3").text("OF COFFEE");
              $(".number1").text(cnt1);
              $(".number2").html(showHours);
              $(".number3").text(cnt3)
          }
      })
  }
  LoadHours();
  setInterval(LoadHours, 5e4)
});

