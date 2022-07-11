//Change theme light and dark mode
$('#iconLight').click(function() {
            var body = document.querySelector('body');
            var icon = document.getElementsByClassName('icon');
            var contact = document.getElementsByClassName('contact_button');
            var tabButton = document.getElementsByClassName("tab_link");

            if(body.style.backgroundColor == 'rgb(12, 21, 29)'){
            	$("#iconLight").text("dark_mode");
            	document.getElementById('iconLight').style.color = "black";
                body.style.backgroundColor = 'white';
                document.getElementById('profile_name').style.color = "black";
                document.getElementById('portrait').style.background = "linear-gradient(to bottom right, #00aeff, #08b8cc, white)";
                document.getElementById('profile_job').style.color = "grey";
                for(var i = 0; i < icon.length; i++){
                	icon[i].style.color = "black";
                }
                for(var i = 0; i < contact.length; i++){
                	contact[i].classList.remove("dark");
                	contact[i].style.color = "black";
                	contact[i].style.background = "#c6ccd1";
                }
                $("#button_tab")[0].style.background = "#E9EBEC";
                for(var i = 0; i < tabButton.length; i++){
                	tabButton[i].classList.remove("dark");
                	tabButton[i].style.color = "black";
                }
                document.getElementById("aboutme").style.background = "#E9EBEC";
                document.getElementById("aboutme").style.color = "black";
                $("footer")[0].style.color = "#545454";
                $("#skill")[0].style.color = "black";

            }
            else{
            	$("#iconLight").text("light_mode");
            	document.getElementById('iconLight').style.color = "white";
                body.style.backgroundColor = 'rgb(12, 21, 29)';
                document.getElementById('profile_name').style.color = "white";
                document.getElementById('portrait').style.background = "linear-gradient(to bottom right,  #0276e2, #1767b2, black)";
                document.getElementById('profile_job').style.color = "white";
                for(var i = 0; i < icon.length; i++){
                	icon[i].style.color = "white";
                }
                for(var i = 0; i < contact.length; i++){
                	contact[i].classList.add("dark");
                	contact[i].style.color = "white";
                	contact[i].style.background = "#171F26";
                }
                $("#button_tab")[0].style.background = "#171F26";
                for(var i = 0; i < tabButton.length; i++){
                	tabButton[i].classList.add("dark");
                	tabButton[i].style.color = "white";
                }
                document.getElementById("aboutme").style.background = "#171F26";
                document.getElementById("aboutme").style.color = "white";
                $("footer")[0].style.color = "white";
                $("#skill")[0].style.color = "white";
            }
});

//Switch content in tab button
function openSkill(event, tabName){
	var content_tab, tab_link;
	content_tab = document.getElementsByClassName("content_tab");
	for (i = 0; i < content_tab.length; i++) {
    content_tab[i].style.display = "none";
  }
  tab_link = document.getElementsByClassName("tab_link");
  for (i = 0; i < tab_link.length; i++) {
    tab_link[i].className = tab_link[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
