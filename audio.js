  var context = new AudioContext()
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.type = "sine";
  oscillator.start(0);

  // $('#C').on('click', function(){
  //   oscillator.frequency.value = 261;
  // });
  //
  // $('#A').on('click', function(){
  //   oscillator.frequency.value = 440;
  // });
  //
  // $('#D').on('click', function(){
  //   oscillator.frequency.value = 293;
  // });
  //
  // $('#E').on('click', function(){
  //   oscillator.frequency.value = 329;
  // });
  //
  // $('#F').on('click', function(){
  //   oscillator.frequency.value = 349;
  // });
  //
  // $('#G').on('click', function(){
  //   oscillator.frequency.value = 392;
  // });
  //
  // $('#B').on('click', function(){
  //   oscillator.frequency.value = 493;
  // });


  document.addEventListener('headtrackingEvent',
  function (event) {

    if(event.x >= 13){
      oscillator.frequency.value = 440;
    }

    if(event.x > 10 && event.x < 13){
      oscillator.frequency.value = 392;
    }

    if(event.x >= 5 && event.x <= 10){
      oscillator.frequency.value = 349;
    }
    if(event.x >= 2 && event.x < 5){
      oscillator.frequency.value = 329;
    }
    if(event.x >= -2 && event.x < 2){
      oscillator.frequency.value = 293;
    }
    if(event.x < -2){
      oscillator.frequency.value = 261;
    }
    console.log(event.x);
  }


);
