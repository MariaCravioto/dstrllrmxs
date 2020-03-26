function splash(time) {
  setTimeout(function () {
    $('#bienvenidxs').hide(500);
    $('#formularioAmixes').show("slow");
  }, time);
};

function splashform(time) {
  setTimeout(function () {
    $('#dstrllr-loading').hide(500);
    $('#congratulations').show("slow");
  }, time);
};

function changepage() {
  window.location = 'views/congratulations.html';
}
