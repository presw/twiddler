// Utility functions

$(document).ready(function(){
  var $body = $('container');
  $body.html('');

// storedIndex - where we started last time
let newTweets = () => {
  let storedIndex;
  console.log("Creating our tweet function");
  return function() {
    console.log("inside the return function");
    let lastPosition;
    if (storedIndex === undefined) {
      lastPosition = -1;
    } else {
      lastPosition = storedIndex;
    }
    var index = streams.home.length - 1;
    storedIndex = index;
    console.log("Index: " + index + " StoredIndex: " + storedIndex);
    while(index > lastPosition){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweets"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $(".container").append($tweet);
      $tweet.appendTo($body);
      index -= 1;
    }
  }
}

let refreshTweets = newTweets();

// let refreshTweets = () => {
//   storedIndex = index;
//   while(index > storedIndex){
//     var tweet = streams.home[index];
//     var $tweet = $('<div></div>');
//     $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
//     $(".container").append($tweet);
//     $tweet.appendTo($body);
//     index -= 1;
//   }
// }

refreshTweets();

$('#refreshTweets').click(function() {
  refreshTweets();
});

});