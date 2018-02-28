$(document).ready(function(){
  let score = 0;
  let rajahti = false;

  let kymmen = Math.floor(Math.random() * 10);
  let otsikko = `<h1>Kärppäseikkailu 20${kymmen}1</h1>`;
  $('.otsikkotop').html(otsikko);

  let pelilaatat = '';
  for (let i = 1; i <= 36; i++) {
    let spanni = `<span>Laatta ${i}</span>`;
    let plaatta = `<div class=laatat id=pelilaatta${i} data-numero="${i}">${spanni}</div>`;

    pelilaatat += plaatta;
  }
  let pommi1 = 1 + Math.floor(Math.random() * 36);
  let pommi2 = 1 + Math.floor(Math.random() * 36);
  while (pommi1 == pommi2) {
    pommi2 = Math.floor(Math.random() * 36) + 1;
  }
  var pommi3 = Math.floor(Math.random() * 36) + 1;
  while (pommi3 == pommi1  || pommi3 == pommi2) {
    pommi3 = Math.floor(Math.random() * 36) + 1;
  }
  let pommit = [pommi1,pommi2,pommi3];
  console.log('pommi 1: ' + pommi1);
  console.log('pommi 2: ' + pommi2);
  console.log('pommi 3: ' + pommi3);

  $(".pelilauta-inner").html(pelilaatat); // tässä luodaan pelikenttä

  $('.pelilauta-inner > div').each(function(index){
    var pln = $(this).data("numero");
    if (pln == 4) {
      console.log("pöö");
      $(this).append('<div id="ukkeli"><img id="playerSprite" src="images/kyngs.png"></img></div>');
      $(this).addClass('tutkittu');
    }
  });

  $('.pelilauta-inner > div').click(function(){
    if (rajahti != true) {
      $('#ukkeli').appendTo(this);
      let kama = $(this).data('numero');
      if (!$(this).hasClass('tutkittu')) {
        for (var i = 0; i < pommit.length; i++) {
          if(pommit[i] == kama) {
            $(this).html('<img class="pommi" src="images/200.gif"></img>');
            rajahti = true;
          }
        }
        $(this).addClass('tutkittu');
        if (!rajahti) {
          score++;
        }
        console.log("pisteet: " + score);
        $('.pisteet span').html(score);
      }
    }
  });
  $(document).keypress(function(e){
    if (e.key === "Enter") { console.log("enter");}
    if (e.which == 13) { console.log("toine enter");}
    if (e.key === "a") {
      console.log("Painoit " + e.key);
      // direction = left;
    }
    if (e.key === "w") {
      // direction = up;
      console.log("Painoit " + e.key);

    }
    if (e.key === "d") {
      // direction = right;
      console.log("Painoit " + e.key);

    }
    if (e.key === "s") {
      console.log("Painoit " + e.key);
      // direction = down;
    }
  });

  // setInterval(function(){
  //   $('.pelilauta-inner > div').each(function(index){
  //     if ($(this).find('.hahmo'))
  //     console.log("Indeksissä: " + index);
  //   })
  // },500);
});


// let pl =  "<div>";
// pl +=       "moi";
// pl +=     "</div>";
// if (i%6 == 0) {
//   plaatta += `<br/>`;
// }
