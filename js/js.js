// ------ Clock-----
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

clock = () => {
    let today = new Date();
    let h = (today.getHours() % 12) + today.getMinutes() / 59;
    let m = today.getMinutes();
    let s = today.getSeconds();

    h *= 30; // 12 * 30 = 360deg
    m *= 6;
    s *= 6; // 60 * 6 = 360deg

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

setTimeout(clock, 500);
}

rotation = (target, val) => {
  target.style.transform =  `rotate(${val}deg)`;
}

window.onload = clock();
// -----End-------


// ---- View location on Google Map -----
document.querySelector('.fa-map-marker-alt').addEventListener('click', (event) => {
event.stopPropagation();
  document.querySelector('iframe').classList.toggle('show');
  document.querySelector('.courses-experience').style.zIndex = '-9999';

});

document.addEventListener('click', (event) => {
    
  if(event.target.className !== 'iframe') {
    document.querySelector('iframe').classList.remove('show');
    document.querySelector('.courses-experience').style.zIndex = '9999';
  }
});

document.onkeydown = function(event) {
  event.stopPropagation();
  if(event.key === 'Escape') {
    document.querySelector('iframe').classList.toggle('show');
  }

}


