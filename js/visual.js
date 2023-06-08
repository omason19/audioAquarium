let fishName= $('#FishFactName');
let fishFact= $('#FishFactBody');

let drum1B = $('#drum1');
let drum2B = $('#drum2');
let drum3B = $('#drum3');
let drum4B = $('#drum4');

let keys1B = $('#keys1');
let keys2B = $('#keys2');
let keys3B = $('#keys3');
let keys4B = $('#keys4');

let guitar1B = $('#guitars1');
let guitar2B = $('#guitars2');
let guitar3B = $('#guitars3');
let guitar4B = $('#guitars4');

let bass1B = $('#bass1');
let bass2B = $('#bass2');
let bass3B = $('#bass3');
let bass4B = $('#bass4');


let drumsImg = ['#drumsIn',"#drums"];
let keysImg = ['#keysIn',"#keys"];
let guitarsImg = ['#guitarIn',"#guitars"];
let bassImg = ['#bassIn','#bass'];

for (let i = 2; i < 6; i++) {
    drumsImg[i] = `./assets/drum${i-1}.png`;
    keysImg[i] = `./assets/keys${i-1}.png`;
    guitarsImg[i] = `./assets/guitars${i-1}.png`;
    bassImg[i] = `./assets/bass${i-1}.png`;
}

function addToTank(group, instNumber,buttonElement) {
    //remove invisible class from all box ids
    $(group[1]+ ' .box').removeClass('invisible');
    //toggle the invisible
    //find whats there already
    let existingImage = $(group[0]).find('img').attr('src');
    console.log("Existing Image: " + existingImage);

    if(existingImage==group[instNumber]){
        //if the image is already there, remove it
        $(group[0]).empty();
    }
    else{
        //add the image if it isn't there already
        $(buttonElement).toggleClass('invisible');
        let img = $('<img>', {src: group[instNumber]});
        $(group[0]).empty().append(img); // clear the tank and add the new image
    }
}

var d1 = ['Starfish',  'Starfish can live up to 35 years in nature depending upon the type of species.'];
var d2 = ['Clownfish',  'They Were Named Clownfish Mostly Because Of Their Behavior: Clownfish are very territorial fish and will defend both their habitat and their school. They will begin to swim around erratically in their defense, which often looks quite silly.'];
var d3 = ['Lionfish',  'Lionfish are nocturnal: Lionfish are generally nocturnal, meaning they prefer to hunt at night.'];
var d4 = ['Eel',  'Most Eels Have Terrible Eyesight: Their vision is so poor that there have been cases of eels biting off the fingers of those who tried to feed them.'];

var g1 = ['Loach', 'Loach fish are known to be excellent scavengers and a great addition to a freshwater clean-up crew. They will also take care of uneaten food as well as keep the populations of small crustaceans in check so that they do not overrun your aquarium.'];
var g2 = ['Bangaii cardinalfish', 'Hiding comes naturally to the Bangaii cardinalfish—if you can’t spot them, look closely among the tentacles of the anemones. They are only about 3 inches in total length.'];
var g3 = ['Yellow tang', 'In the wild, yellow tang travel alone or in loose schools, and spawn around the time of the full moon.'];
var g4 = ['Blue tang', 'Blue tangs are a popular aquarium species, and some environmentalists are concerned that these fish will be victims of increased popularity due to the "Finding Nemo Effect." Other animals have suffered after being featured in recent films'];

var k1 = ['Guppy', 'Guppies Have Been Used To Fight Malaria: People introduced these fish into rivers in Asia and Africa to eat the mosquito larvae to regulate malaria. Mosquito larvae are roughly 0.1 inches, making them an excellent bite-sized snack for guppies.'];
var k2 = ['Goldfish', 'Goldfish have a memory span of at least three months: Unlike the myth that many people say goldfish have a memory of just a few seconds, scientists have proven that goldfish memory spans are nowhere near as short as three seconds.'];
var k3 = ['Queen angelfish', 'Queen angelfish acquired their names from their “crowns”– a round black/blue spot on the top of their heads.'];
var k4 = ['Anchovy', 'Anchovies are fish that can concentrate an acid, making them poisonous for humans to consume as a whole.'];

var b1 = ['Pufferfish', 'A Puffer Fish’s Teeth Never Stop Growing: Many fish species have teeth that stop growing at some point, but puffer fish do not. Because they eat hard foods, they have teeth (also called beaks) that continuously grow throughout their lives.'];
var b2 = ['Seahorse', 'Seahorse couples are essentially serial monogamists, sticking with one partner for long periods of time.'];
var b3 = ['Bass', 'Bass has an inner ear bone that can pick up small frequencies of sound like the movement of a crawfish.'];
var b4 = ['Garibaldi', 'A juvenile Garibaldi is a reddish-orange and has several blue spots on its body and its fins have a blue outline. It also has a large blue spot with a black outline on its upper mid-back region.'];

function displayFact(fact){
    fishName.html(fact[0]);
    fishFact.html(fact[1]);
}



drum1B.on('click',function(){
    addToTank(drumsImg,2,$(this));
    displayFact(d1);
});
drum2B.on('click',function(){
    addToTank(drumsImg,3,$(this));
    displayFact(d2);
});
drum3B.on('click',function(){
    addToTank(drumsImg,4,$(this));
    displayFact(d3);
});
drum4B.on('click',function(){
    addToTank(drumsImg,5,$(this));
    displayFact(d4);
});

keys1B.on('click',function(){
    addToTank(keysImg,2,$(this));
    displayFact(k1);
});
keys2B.on('click',function(){
    addToTank(keysImg,3,$(this));
    displayFact(k2);
});
keys3B.on('click',function(){
    addToTank(keysImg,4,$(this));
    displayFact(k3);
});
keys4B.on('click',function(){
    addToTank(keysImg,5,$(this));
    displayFact(k4);
});

guitar1B.on('click',function(){ 
    addToTank(guitarsImg,2,$(this));
    displayFact(g1);
});
guitar2B.on('click',function(){
    addToTank(guitarsImg,3,$(this));
    displayFact(g2);
});
guitar3B.on('click',function(){
    addToTank(guitarsImg,4,$(this));
    displayFact(g3);
});
guitar4B.on('click',function(){
    addToTank(guitarsImg,5,$(this));
    displayFact(g4);
});

bass1B.on('click',function(){
    addToTank(bassImg,2,$(this));
    displayFact(b1);
});
bass2B.on('click',function(){
    addToTank(bassImg,3,$(this));
    displayFact(b2);
});
bass3B.on('click',function(){
    addToTank(bassImg,4,$(this));
    displayFact(b3);
});
bass4B.on('click',function(){
    addToTank(bassImg,5,$(this));
    displayFact(b4);
});

