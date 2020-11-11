 
function goToSection(pagename) {
var section = $("#"+pagename+"");
$('html, body').animate({
    scrollTop: section.offset().top
}, 600);
}

function flip(cardid) {
    var card = "#"+cardid+"";
    $(card).toggleClass('flipped');
}
