var img = ["http://i.imgur.com/JdNU6Bb.jpg",
"http://i.imgur.com/cigeaxi.jpg",
"http://i.imgur.com/LyK8HQN.jpg",
"http://i.imgur.com/kKPe3Yu.jpg",
];

//var count_img = img.length;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min)) + min;
//}

var hide = true;
var replaceText = "I am an idiot."
var replaceTexts = [
	"I'm an idiot.",
	"Oh god, why was I even born?",
	"I must have hit my head quite hard sometime in my childhood.",
	"Everyone, I apologize for my stupidity.",
	"हल्का स्लो टाइपको छु, कृपया माइन्ड नगर्नुहोला।",


]
//chrome.storage.local.get(/* String or Array */["replaceText", "hide"], function(items){
//  if(items.hide){
//    hide = true;
//  } else{
//    hide = false;
//    replaceText = items.replaceText;
//  }
//
//});

function randomText(){
	return replaceTexts[Math.floor(Math.random() * replaceTexts.length)];
}

function hideDot(hide, start,end){
  for(i=start; i<end; i++){
    var x = document.getElementsByClassName('UFICommentBody')[i].querySelector("span");
    var comment = x.innerHTML;
    if(comment == '.' || comment == ',' || comment == '*' || comment == "thoplo" || comment == "dot" || comment == ".." || comment == "..." || comment == "...."|| comment == "....."){
      //if(hide) {
        x.innerHTML = randomText();
      //} else{
      //  x.innerHTML = text
      //}
    }
  }
}


window.onload = function() {
  //document.getElementById("replaceText").value = replaceText;
  //document.getElementById("hide").checked = hide;

  window.onscroll = function () {
    // if (document.body.scrollTop > 30) {
      //addArt();
      var start = end;
      end = document.getElementsByClassName('UFICommentBody').length;
      hideDot(hide, start, end);
    // }
  };

  //document.getElementById("hide").onclick = function(){
  //  var hide = $("#hide:checked").val();
  //  if (hide){
  //    $("#replace").css({display:'none'})
  //  } else{
  //    $("#replace").css({display:'block'})
  //  }
  //};
  //
  //document.getElementById("button").onclick = function() {
  //  var hide = $("#hide:checked").val();
  //  if(hide){
  //    hideStatus = true;
  //  } else{
  //    hideStatus = false;
  //  }
  //  var replaceText = $("#replaceText").val();

    //localStorage["replaceText"] = replaceText;
    //localStorage["hide"] = hideStatus;

  //  chrome.storage.local.set({ "replaceText": replaceText }, function(){
  //    //  Data's been saved boys and girls, go on home
  //  });
  //
  //  chrome.storage.local.set({ "hide": hideStatus }, function(){
  //    //  Data's been saved boys and girls, go on home
  //  });
  //
  //};
};

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

// var end = 1;
// hideDot(hide, 0,end);
timeout();

// Feed Ad
//function addArt() {
//  var count = document.getElementsByClassName("uiStreamSponsoredLink").length;
//  for (i = 0; i < count; i++) {
//    var x = document.getElementsByClassName("uiStreamSponsoredLink")[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//      if (typeof x.style.content === "undefined" || !x.style.content) {
//        var random_img = getRandomInt(0,count_img);
//        // x.className += "art".i;
//        x.style.content = "url("+img[random_img]+")";
//        x.style.width = "100%";
//        x.style.cursor = "pointer";
//        x.onclick = function () {
//          window.open('http://www.shimoni-illustration.com/?ref=www.addart.co','_blank');
//        }
//      }
//    }
//
//  // Right Hand Side Ad
//  var count2 = document.getElementsByClassName("ego_section").length;
//  for (a = 0; a < count2; a++) {
//    var y = document.getElementsByClassName("ego_section")[a];
//      if (typeof y.style.content === "undefined" || !y.style.content) {
//        var random_img2 = getRandomInt(0,count_img);
//        // x.className += "art".i;
//        y.style.content = "url("+img[random_img2]+")";
//        y.style.width = "100%";
//        y.style.cursor = "pointer";
//        y.onclick = function () {
//          window.open('http://www.shimoni-illustration.com/?ref=www.addart.co','_blank');
//        }
//      }
//    }
//};

//function getImages(){
//    var albumID = 'NNbeO';
//    var albumAPI = "https://api.imgur.com/3/album/" + albumID + "/images";
//    alert('hello')
//    $.ajax({
//      url: albumAPI,
//      headers:{
//        'Authorization':'Client-ID d7bef5aac5dc6a5'
//      },
//      type: 'GET',
//      dataType: 'json',
//      success: function(data) {
//
//        alert(data.data[0].link);
//
//      },
//      error: function() { console.log("ERRORZ"); }
//    });
//}
// call function
//addArt();

