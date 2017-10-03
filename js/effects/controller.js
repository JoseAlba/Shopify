// checks if form is full
function validateForm() {
    var form_inputs =["name", "email", "thoughts"];
    var x;

    for(x in form_inputs){
        var y = document.forms["myForm"][x].value;
        if (y == null || y == "") {
            alert("Name must be filled out");
            return false;
        }
    }
}

var about  = document.getElementById('about');
var projects = document.getElementById('projects');
var experience  = document.getElementById('experience');
var resume = document.getElementById('resume');
var future  = document.getElementById('future');
var contact  = document.getElementById('contact');


window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};


$('.slow').textillate({
    in: { effect: 'bounce', delay:100},
    out: {effect: 'bounce', sync:true},
    loop: true
});

//function swap_style_sheet(){
//    //alert(document.getElementById('prism_stylesheet').href +"   "+document.getElementById("prism_javascript").src);
//
//    if(document.getElementById('prism_stylesheet').href == "prism.css"){
//        document.getElementById('prism_stylesheet').href = 'css/prism_okaidia.css';
//        document.getElementById('prism_javascript').src = '/js/effects/prism_okaidia.js';
//    }
//    else {
//        document.getElementById('prism_stylesheet').href = '../../css/prism.css';
//        document.getElementById('prism_javascript').src = 'prism.js';
//    }
//
//}
//
