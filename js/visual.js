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


drum1B.on('click',function(){
    addToTank(drumsImg,2,$(this));
});
drum2B.on('click',function(){
    addToTank(drumsImg,3,$(this));
});
drum3B.on('click',function(){
    addToTank(drumsImg,4,$(this));
});
drum4B.on('click',function(){
    addToTank(drumsImg,5,$(this));
});

keys1B.on('click',function(){
    addToTank(keysImg,2,$(this));
});
keys2B.on('click',function(){
    addToTank(keysImg,3,$(this));
});
keys3B.on('click',function(){
    addToTank(keysImg,4,$(this));
});
keys4B.on('click',function(){
    addToTank(keysImg,5,$(this));
});

guitar1B.on('click',function(){ 
    addToTank(guitarsImg,2,$(this));
});
guitar2B.on('click',function(){
    addToTank(guitarsImg,3,$(this));
});
guitar3B.on('click',function(){
    addToTank(guitarsImg,4,$(this));
});
guitar4B.on('click',function(){
    addToTank(guitarsImg,5,$(this));
});

bass1B.on('click',function(){
    addToTank(bassImg,2,$(this));
});
bass2B.on('click',function(){
    addToTank(bassImg,3,$(this));
});
bass3B.on('click',function(){
    addToTank(bassImg,4,$(this));
});
bass4B.on('click',function(){
    addToTank(bassImg,5,$(this));
});

