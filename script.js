document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      playMangoVoice();
    }
  });
  
  function playMangoVoice() {
    const mangoVoiceText = 'Mango';
    responsiveVoice.speak(mangoVoiceText, 'UK English Male');
  }
  