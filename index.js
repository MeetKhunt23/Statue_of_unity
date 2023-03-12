function Dropmenuopen1() {
  dropmenu1.style.display = "flex";
  dropmenu2.style.display = "none";
  dropmenu3.style.display = "none";
  dropmenu4.style.display = "none";
  dropmenu5.style.display = "none";
}


var dropmenu1 = document.querySelector(".nav .optn1");
var selectmenu1 = document.getElementById("about");
selectmenu1.addEventListener("mouseover", Dropmenuopen1);


function Dropmenuopen2() {
  dropmenu1.style.display = "none";
  dropmenu2.style.display = "flex";
  dropmenu3.style.display = "none";
  dropmenu4.style.display = "none";
  dropmenu5.style.display = "none";
}

var dropmenu2 = document.querySelector(".nav .optn2");
var selectmenu2 = document.getElementById("guide");
selectmenu2.addEventListener("mouseover", Dropmenuopen2);

function Dropmenuopen3() {
  dropmenu1.style.display = "none";
  dropmenu2.style.display = "none";
  dropmenu3.style.display = "flex";
  dropmenu4.style.display = "none";
  dropmenu5.style.display = "none";
}

var dropmenu3 = document.querySelector(".nav .optn3");
var selectmenu3 = document.getElementById("patel");
selectmenu3.addEventListener("mouseover", Dropmenuopen3);

function Dropmenuopen4() {
  dropmenu1.style.display = "none";
  dropmenu2.style.display = "none";
  dropmenu3.style.display = "none";
  dropmenu4.style.display = "flex";
  dropmenu5.style.display = "none";
}

var dropmenu4 = document.querySelector(".nav .optn4");
var selectmenu4 = document.getElementById("media");
selectmenu4.addEventListener("mouseover", Dropmenuopen4);

function Dropmenuopen5() {
  dropmenu1.style.display = "none";
  dropmenu2.style.display = "none";
  dropmenu3.style.display = "none";
  dropmenu4.style.display = "none";
  dropmenu5.style.display = "flex";
}

var dropmenu5= document.querySelector(".nav .optn5");
var selectmenu5 = document.getElementById("attraction");
selectmenu5.addEventListener("mouseover", Dropmenuopen5);

function getclickprj(x) {
  window.open(`./Droplist/project.html`, "_self");
}
function getclickprjf(x) {
  window.open(`./Droplist/Project_feature.html`, "_self");
}
function getclickcu(x) {
  window.open(`./Droplist/Contact_us.html`, "_self");
}
function getclickff(x) {
  window.open(`./Droplist/Feedback_Form.html`, "_self");
}
function getclickvh(x) {
  window.open(`./Droplist/Visiting_hours.html`, "_self");
}
function getclickwv(x) {
  window.open(`./Droplist/What_to_visit.html`, "_self");
}
function getclickss(x) {
  window.open(`./Droplist/Safety_Security.html`, "_self");
}
function getclickwi(x) {
  window.open(`./Droplist/Weather_info.html`, "_self");
}
function getclicklp(x) {
  window.open(`./Droplist/Life_of_Sp.html`, "_self");
}
function getclickst(x) {
  window.open(`./Droplist/Sardar_timeline.html`, "_self");
}
function getclickbr(x) {
  window.open(`./Droplist/Books_and_References.html`, "_self");
}
function getclicksq(x) {
  window.open(`./Droplist/Sardar_Patel_Quotes.html`, "_self");
}
function getclicksk(x) {
  window.open(`./Droplist/SoU_Content_Kit.html`, "_self");
}
function getclickns(x) {
  window.open(`./Droplist/News.html`, "_self");
}
function getclickg(x) {
  window.open(`./Droplist/Gallery.html`, "_self");
}
function getclicktg(x) {
  window.open(`./Droplist/Theme_based_Garden.html`, "_self");
}
function getclickng(x) {
  window.open(`./Droplist/Narmada_Ghat.html`, "_self");
}
function getclicknt(x) {
  window.open(`./Droplist/Night_Tourism.html`, "_self");
}
function getclickep(x) {
  window.open(`./Droplist/Eating_Points.html`, "_self");
}

