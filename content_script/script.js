var hide = true;
var replaceText = "I am an idiot."
var replaceTexts = [
	"Clearly, I'm an idiot.",
	"Oh god, why was I even born?",
	"I must have hit my head quite hard sometime in my childhood.",
	"Everyone, I apologize for my stupidity.",
	"हल्का स्लो टाइपको छु, कृपया माइन्ड नगर्नुहोला।",
	"बच्चामा च्यवनप्राश नखाएकोले बोद्धिक विकास हुन सकेन हजुर।"


];
function randomText(){
	return replaceTexts[Math.floor(Math.random() * replaceTexts.length)];
}

function hideDot(hide, start,end) {
  for (i = start; i < end; i++) {
    var x = document.getElementsByClassName('UFICommentBody')[i].querySelector("span");

    if (x !== null) {
      var comment = x.innerHTML;
      if (comment.match(/^[.,*]+$/) || comment == "thoplo" || comment == "dot") {
        x.innerHTML = randomText();
      }
    }
  }
}

function timeout() {
    setTimeout(function () {
        // Do Something Here

		var end = document.getElementsByClassName('UFICommentBody').length;
		hideDot(hide, 0, end);
        // Then recall the parent function to
        // create a recursive loop.
        timeout();
    }, 1000);
}
timeout();