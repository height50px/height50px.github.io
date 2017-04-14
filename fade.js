function fadeDivIn(){
    $("#div").animate({backgroundColor: "#66340a" }, 4000, function(){fadeDivOut();});
}

function fadeDivOut(){
    $("#div").animate({backgroundColor: "#994600" }, 4000, function(){fadeDivIn();});
}

$(document).ready(function(){
    fadeDivIn();
});
