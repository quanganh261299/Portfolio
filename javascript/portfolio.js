function openSkill(event, tabName) {
  $(".content_tab").hide();
  $(".tab_link").removeClass("active");
  $("#" + tabName).fadeIn(500);
  $(event.currentTarget).addClass("active");
}

function changeTheme(){
    if($("#changeThemeBtn").text() == "dark_mode"){
      $("#changeThemeBtn").text("light_mode");
      $(":root").removeClass("dark-theme");
    }
    else {
      $("#changeThemeBtn").text("dark_mode");
      $(":root").addClass("dark-theme");
    } 
}

$("#aboutme .aboutme_content").width($("#button_tab").width());

$(window).on("resize", function () {
  $("#aboutme .aboutme_content").width($("#button_tab").width());
});

window.onload = function () {
  openSkill({ currentTarget: $("#aboutme_tab") }, "aboutme");
  $("#aboutme .aboutme_content").width($("#button_tab").width()); 
};

