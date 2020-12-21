// Berganti setiap beberapa detik
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

//Mengetik kata sendiri
const txtElement = ['Welcome To My Website','This My First Website','Hope You Enjoy ']
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

  if(count == txtElement.length ){
      count = 0
  }

  currentTxt = txtElement[count]

  words = currentTxt.slice(0,++txtIndex);
  document.querySelector('.ketik').textContent = words;

  if(words.length == currentTxt.length){
      count++;
      txtIndex = 0;
  }

  setTimeout(ngetik, 200)
})()

//Galerry gambar
var target_gambar = document.getElementById('target_gambar')
var array_gambar = document.getElementById('box').children;
var no_sekarang = 0;

function ganti_sebelum(){
  no_sekarang = no_sekarang - 1;
  if (no_sekarang < 0) no_sekarang = 5;

  target_gambar.src = array_gambar[no_sekarang].getAttribute("src")
}

function ganti_sesudah(){
  no_sekarang = no_sekarang + 1;
  if (no_sekarang > 5) no_sekarang = 0;

  target_gambar.src = array_gambar[no_sekarang].getAttribute("src")
}
//animasi nav
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('#nav ul')
const ketik = document.querySelector('#home .ketik')

menuToggle.addEventListener('click',function(){
  nav.classList.toggle('slide');
});
menuToggle.addEventListener('click',function(){
  ketik.classList.toggle('slide');
});


//scrool animasi

const sr = ScrollReveal ({
  origin: 'top',
  distance: '300px',
  duration: 1000,
  reset: false
});

//profile
sr.reveal('#profile .profile',{delay: 500});
sr.reveal('#profile .satu',{delay:650});
sr.reveal('#profile .dua',{delay: 800});

//hobby 
sr.reveal('#hobby h1',{delay:500});
sr.reveal('#hobby #card1',{delay:900});
sr.reveal('#hobby #card2',{delay:1400});
sr.reveal('#hobby #card3',{delay:1900});

//skilss
sr.reveal('#skilss h1',{delay:500});
sr.reveal('#skilss .nama-skilss',{delay:900});
sr.reveal('#skilss .persen',{delay:1300});

//gallery
sr.reveal('#gallery h1', { delay: 500 });
sr.reveal('#gallery .show-box',{delay:1000});
sr.reveal('#gallery .panah-sebelum', { delay: 1500 });
sr.reveal('#gallery .panah-sesudah', { delay: 1500 });

//contact
sr.reveal('#contact h1', { delay: 500 })
sr.reveal('#contact .left .text', { delay: 1000 });
sr.reveal('#contact .right .text', { delay: 3500 });
sr.reveal('#contact .right form', { delay: 3900 });

const bar = ScrollReveal ({
  origin: 'left',
  distance: '100px',
  duration: 1000,
  reset: false
});
//bar skilss
bar.reveal('.bar',{delay:1800});

//icon sosmed
bar.reveal('#contact #yt', { delay: 1400 });
bar.reveal('#contact #ig', { delay: 1800 });
bar.reveal('#contact #tw', { delay: 2200 });
bar.reveal('#contact #fb', { delay: 2600 });
bar.reveal('#contact #dc', { delay: 3000 });

