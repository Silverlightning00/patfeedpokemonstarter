function checkIt() {
  // Initialize scores
  var correct = 0;
  var incorrect = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'correct') {
        correct++;
      }
    }

  }


    // make a message
    // Form a message
    var message;
    if (correct == 6) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 6/6 correct!"
      message = "You're a Spongebob expert! It honestly wasn't that hard... I don't think it's even possible to get any of these wrong.";
      resultimage = "<img src='img/spongebob6.jpg'>"
    }
    else if (correct == 5) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 5/6 correct!"
      message = "You almost got all of them right!";
      resultimage = "<img src='img/spongebob5.jpg'>"
    }
    else if (correct == 4) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 4/6 correct!"
      message = "You got most of them correct.";
      resultimage = "<img src='img/spongebob4.jpg'>"
    }
    else if (correct == 3) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 3/6 correct!"
      message = "You got half of them right. You've clearly seen at least one episode of Spongebob.";
      resultimage = "<img src='img/spongebob3.png'>"
    }
    else if (correct == 2) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 2/6 correct!"
      message = "Only 2? That's not even half!";
      resultimage = "<img src='img/spongebob2.jpg'>"
    }
    else if (correct == 1) {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You got 1/6 correct!"
      message = "Only 1? Do you even watch T.V.?";
      resultimage = "<img src='img/spongebob1.jpg'>"
    }
    else {
      title = "Can you match these Spongebob characters with their houses?"
      heading = "You didn't get any of them correct"
      message = "Do you live under a rock or something? How did you not get any of them correct!?";
      resultimage = "<img src='img/spongebob0.png'>"
    }
    // document.getElementById('result-text').innerHTML = message;
   // display results
   document.getElementById('result-title').innerHTML = title;
   document.getElementById('result-heading').innerHTML = heading;
   document.getElementById('result-text').innerHTML = message;
   document.getElementById('result-image').innerHTML = resultimage;
}
