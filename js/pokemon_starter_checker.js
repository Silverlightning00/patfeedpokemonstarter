function checkIt() {
  // Initialize scores
  var char = 0;
  var squirt = 0;
  var bulb = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'char') {
        char++;
      }
      else if (e.value == 'squirt') {
        squirt++;
      }
      else if (e.value == 'bulb') {
        bulb++;
      }
    }

  }


    // make a message
    var max = Math.max(squirt, char, bulb);

    // Form a message
    var message;
     if (max == char) {
      title = "Which original starter Pok&eacute;mon are you?"
      heading = "You're a Charmander!"
      message = "You are the fire type starter Pok&eacute;mon from the Kanto region.  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.";
      resultimage = "<img src='img/charmander.jpg'>"
    }
    else if (max == squirt) {
      title = "Which original starter Pok&eacute;mon are you?"
      heading = "You're a Squirtle!"
      message = "You are the water type starter Pok&eacute;mon from the Kanto region. Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.";
      resultimage = "<img src='img/squirtle.jpg'>"
    }
    else if (max == bulb) {
      title = "Which original starter Pok&eacute;mon are you?"
      heading = "You're a Bulbasaur!"
      message = "You are the grass type starter Pok&eacute;mon from the Kanto region. Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.";
      resultimage = "<img src='img/bulbasaur.jpg'>"
    }

    // document.getElementById('result-text').innerHTML = message;
   // display results
   document.getElementById('result-title').innerHTML = title;
   document.getElementById('result-heading').innerHTML = heading;
   document.getElementById('result-text').innerHTML = message;
   document.getElementById('result-image').innerHTML = resultimage;
}
