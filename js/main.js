let audio = document.querySelectorAll('.song');
let album = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');


function hideAll () {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

album.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();

switch (e.target.getAttribute('id')) {
   case 'gooeyPhoto':
     document.querySelector('#gooey')
       .style.display = 'block';
     break;
   case 'heatWavesPhoto':
     document.querySelector('#heatWaves')
       .style.display = 'block';
     break;
   case 'paradisePhoto':
     document.querySelector('#paradise')
     .style.display = 'block';
     break;
   case 'tangerinePhoto':
     document.querySelector('#tangerine')
     .style.display = 'block';
     break;
   }
  players.forEach(function(el) {
    el.pause();
    el.currentTime = 0;
})
}});
