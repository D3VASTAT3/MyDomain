let active_color = "orange";
let inactive_color = "black";

function active_home() {
	document.getElementById("link-dashboard").style.color = active_color;
	document.getElementById("link-profile").style.color = inactive_color;
	document.getElementById("link-devices").style.color = inactive_color;
	document.getElementById("link-settings").style.color = inactive_color;
}

function active_myparking() {
	document.getElementById("link-dashboard").style.color = inactive_color;
	document.getElementById("link-profile").style.color = active_color;
	document.getElementById("link-devices").style.color = inactive_color;
	document.getElementById("link-settings").style.color = inactive_color;
	}

function active_myspaces() {
	document.getElementById("link-dashboard").style.color = inactive_color;
	document.getElementById("link-profile").style.color = inactive_color;
	document.getElementById("link-devices").style.color = active_color;
	document.getElementById("link-settings").style.color = inactive_color;
}

function active_menu() {
	document.getElementById("link-dashboard").style.color = inactive_color;
	document.getElementById("link-profile").style.color = inactive_color;
	document.getElementById("link-devices").style.color = inactive_color;
	document.getElementById("link-settings").style.color = active_color;
}

if(document.URL.includes('MySpace.html')){
    active_myspaces();
	
};
if(document.URL.includes('MyParking.html')){
    active_myparking();
	
};
if(document.URL.includes('HomePage.html')){
    active_home();
	
};
if(document.URL.includes('Menu.html')){
    active_menu();
	
};