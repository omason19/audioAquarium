//creating all the howl objects from audio files

console.log('hello');
let tankambience = new Howl({
  src: ['stems/tankamb.mp3'],
  loop: true,
  volume: 1.0,
});

let drum1 = new Howl({
  src: ['stems/drum1.mp3'],
  loop: true,
  volume: 1.0,
});

let drum2 = new Howl({
  src: ['stems/drum2.mp3'],
  loop: true,
  volume: 1.0,
});

let drum3 = new Howl({
  src: ['stems/drum3.mp3'],
  loop: true,
  volume: 1.0,
});

let drum4 = new Howl({
  src: ['stems/drum4.mp3'],
  loop: true,
  volume: 1.0,
});

let keys1 = new Howl({
  src: ['stems/keys1.mp3'],
  loop: true,
  volume: 1.0,
});

let keys2 = new Howl({ 
  src: ['stems/keys2.mp3'],
  loop: true,
  volume: 1.0,
});

let keys3 = new Howl({
  src: ['stems/keys3.mp3'],
  loop: true,
  volume: 1.0,
});

let keys4 = new Howl({
  src: ['stems/keys4.mp3'],
  loop: true,
  volume: 1.0,
});

let guitar1 = new Howl({
  src: ['stems/guitar1.mp3'],
  loop: true,
  volume: 1.0,
});

let guitar2 = new Howl({
  src: ['stems/guitar2.mp3'],
  loop: true,
  volume: 1.0,
});

let guitar3 = new Howl({
  src: ['stems/guitar3.mp3'],
  loop: true,
  volume: 1.0,
});

let guitar4 = new Howl({
  src: ['stems/guitar4.mp3'],
  loop: true,
  volume: 1.0,
});

let bass1 = new Howl({
  src: ['stems/bass1.mp3'],
  loop: true,
  volume: 1.0,
});

let bass2 = new Howl({
  src: ['stems/bass2.mp3'],
  loop: true,
  volume: 1.0,
});

let bass3 = new Howl({
  src: ['stems/bass3.mp3'],
  loop: true,
  volume: 1.0,
});

let bass4 = new Howl({
  src: ['stems/bass4.mp3'],
  loop: true,
  volume: 1.0,
});




//create arrays of all the stems and groupings
let stems = [tankambience, drum1, drum2, drum3, drum4, keys1, keys2, keys3, keys4, guitar1, guitar2, guitar3, guitar4, bass1, bass2, bass3, bass4];
let drums = [drum1, drum2, drum3, drum4];
let keys= [keys1, keys2, keys3, keys4];
let guitars= [guitar1, guitar2, guitar3, guitar4];
let bass= [bass1, bass2, bass3, bass4];

//Find all the buttons
let drum1Button = $('#drum1');
let drum2Button = $('#drum2');
let drum3Button = $('#drum3');
let drum4Button = $('#drum4');

let keys1Button = $('#keys1');
let keys2Button = $('#keys2');
let keys3Button = $('#keys3');
let keys4Button = $('#keys4');

let guitars1Button = $('#guitars1');
let guitars2Button = $('#guitars2');
let guitars3Button = $('#guitars3');
let guitars4Button = $('#guitars4');

let bass1Button = $('#bass1');
let bass2Button = $('#bass2');
let bass3Button = $('#bass3');
let bass4Button = $('#bass4');

let muteKeys = $('#keys1');

//takes in an array and the position of the selected instrument
//mutes the other members of the array and plays the selected instrument (instNumber)
function soloGroupMember(group, instNumber){
  if (group[instNumber].mute()){
    group.forEach(function(instance){
    instance.mute(true);
    group[instNumber].mute(false);
  });
  }else{
    group[instNumber].mute(true);
  }
}


//Initialise the audio so it all starts out muted (except for fishtank ambience)
setTimeout(function(){
  let loading = $("#loading");
  loading.remove();
  let playButton = $("<div id='play'><button>Click to Play</button></div>");
  $("body").prepend(playButton);

  //mutes all the stems and then plays them all
  playButton.click(function(){
    playButton.remove();
    if (tankambience.playing()){
      stems.forEach(function(stem){
        stem.pause();
      });
    } else {
      stems.forEach(function(stem){
        stem.mute(true);
        tankambience.mute(false);
        stem.play();
      });
    }
  });
  //loading time:
}, 9000);


//Assigning all the click functions
drum1Button.click(function(){
    soloGroupMember(drums,0);
});
drum2Button.click(function(){
  soloGroupMember(drums,1);
});
drum3Button.click(function(){
  soloGroupMember(drums,2);
});
drum4Button.click(function(){
  soloGroupMember(drums,3);
});


keys1Button.click(function(){
  soloGroupMember(keys,0);
});
keys2Button.click(function(){
  soloGroupMember(keys,1);
});
keys3Button.click(function(){
  soloGroupMember(keys,2);
});
keys4Button.click(function(){
  soloGroupMember(keys,3);
});


guitars1Button.click(function(){
  soloGroupMember(guitars,0);
});
guitars2Button.click(function(){
  soloGroupMember(guitars,1);
});
guitars3Button.click(function(){
  soloGroupMember(guitars,2);
});
guitars4Button.click(function(){
  soloGroupMember(guitars,3);
});

bass1Button.click(function(){
  soloGroupMember(bass,0);
});
bass2Button.click(function(){
  soloGroupMember(bass,1);
});
bass3Button.click(function(){
  soloGroupMember(bass,2);
});
bass4Button.click(function(){
  soloGroupMember(bass,3);
});



