// Utility functions


let tweetBoxMaker = () => {
  let count = 0;
  return function() {
    var $tweet = $('<div class="tweets" id="tweet' + count + '"></div>');
    $(".container").prepend($tweet);
    let output = "#tweet" + count;
    count++;
    return output;
  }
}

let makeTweetBox = tweetBoxMaker();

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
      var tweetId = makeTweetBox();
      var $twitterHandle = $('<div class="twitterHandle"></div>');
      var $message = $('<div class="message"></div>');
      var $timeStamp = $('<div class="time-stamp"></div>')
      $twitterHandle.html('@' + tweet.user);
      $message.html(tweet.message);
      $timeStamp.html(tweet.created_at);
      $(tweetId).prepend($twitterHandle);
      $(tweetId).append($message);
      $(tweetId).append($timeStamp);

      console.log(tweetId + "'@' " + tweet.user + " " + tweet.message + " " + tweet.created_at);

      currentLocation += 1;
    }
  }
}

let refreshTweets = newTweets();

refreshTweets();

$('#refreshTweets').on('click', function() {
  $(refreshTweets()).slideDown("slow", function() {});
});

});