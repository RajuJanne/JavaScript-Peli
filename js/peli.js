$(document).ready(function(){

  let kymmen = Math.floor(Math.random() * 10);
  let otsikko = `<h1>Kärppäseikkailu 20${kymmen}1</h1>`;
  $('.otsikkotop').html(otsikko);

  let pelilaatat = '';
  for (let i = 1; i <= 36; i++) {
    let spanni = `<span>Laatta ${i}</span>`;
    let plaatta = `<div class=laatat id=pelilaatta${i} data-numero="${i}">${spanni}</div>`;

    pelilaatat += plaatta;
  }
  let pommi = 1 + Math.floor(Math.random() * 36);
  let pommi2 = 1 + Math.floor(Math.random() * 36);
  let pommi3 = 1 + Math.floor(Math.random() * 36);
  let pommit = [pommi,pommi2,pommi3];
  console.log('pommi 1: ' + pommi);
  console.log('pommi 2: ' + pommi2);
  console.log('pommi 3: ' + pommi3);

  $(".pelilauta-inner").html(pelilaatat);
  $('.pelilauta-inner > div').click(function(){
    let kama = $(this).data('numero');
    for (var i = 0; i < pommit.length; i++) {
      if(pommit[i] == kama) {
        $(this).html('<img class="pommi" src="images/pommi.jpg"></img>')
      }
    }
    console.log(kama);
  });
});


// let pl =  "<div>";
// pl +=       "moi";
// pl +=     "</div>";
// if (i%6 == 0) {
//   plaatta += `<br/>`;
// }
