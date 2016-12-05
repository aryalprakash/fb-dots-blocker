var hide = true;
var replaceText = "I'm an idiot.";

function hideDot(hide, text,start,end){
  for(i=start; i<end; i++){
    var x = document.getElementsByClassName('UFICommentBody')[i].querySelector("span");
    var comment = x.innerHTML;
    if(comment == '.' || comment == ',' || comment == '*' || comment == "thoplo" || comment == "dot" || comment == ".." || comment == "..." || comment == "...."|| comment == "....."){
        x.innerHTML = text;
    }
  }
}

window.onload = function() {
  window.onscroll = function () {
    if (document.body.scrollTop > 30) {
      var start = end;
      end = document.getElementsByClassName('UFICommentBody').length;
      hideDot(hide, replaceText,start, end);
    }
  };
};

var end = 1;
hideDot(hide, replaceText, 0,end);
