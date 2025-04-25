var textarea = $('textarea'),
speed = 80,
text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

function writeText(text) {
  textarea.text(
    textarea.text() + text[$('#textarea').text().length]
  );
  
    if (textarea.text().length == text.length) {
      clearInterval(timeout);
    }
}
var timeout = setInterval('writeText(text)', speed);
