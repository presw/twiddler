// Utility functions


let tweetBoxMaker = () => {
  let count = 0;
  return function() {

  }
}

$(document).ready(function(){
  var $body = $('container');
  $body.html('');

let newTweets = () => {
  let storedIndex;
  return function() {
    let currentLocation;
    if (storedIndex === undefined) {
      currentLocation = 0;
    } else {
      currentLocation = storedIndex;
    }
    var homeLength = streams.home.length - 1;
    storedIndex = homeLength;
    console.log("Index: " + homeLength + " StoredIndex: " + storedIndex);
    while(currentLocation <= homeLength){
      var tweet = streams.home[currentLocation];
      var $tweet = $('<div class="tweets"></div>');

      var $twitterHandle = $('<div class="twitterHandle"></div>');


      // $tweet.html('@' + tweet.user + '<br>' + tweet.message + '<br>' + tweet.created_at);
      $tweet.html(tweet.message);
      $twitterHandle.html(tweet.user);
      $(".container").prepend($tweet);

      $(".tweets").prepend($twitterHandle);

      currentLocation += 1;
    }
  }
}

let refreshTweets = newTweets();

refreshTweets();

$('#refreshTweets').click(function() {
  refreshTweets();
});

});