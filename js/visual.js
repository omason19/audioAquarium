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


let drumsImg = ['#drumsIn'];
let keysImg = ['#keysIn'];
let guitarsImg = ['#guitarIn'];
let bassImg = ['#bassIn'];

for (let i = 1; i < 5; i++) {
    drumsImg[i] = `./assets/drum${i}.png`;
    keysImg[i] = `./assets/keys${i}.png`;
    guitarsImg[i] = `./assets/guitars${i}.png`;
    bassImg[i] = `./assets/bass${i}.png`;
}

function addToTank(group, instNumber) {
    let img = $('<img>', {src: group[instNumber]});
    $(group[0]).empty().append(img); // clear the tank and add the new image
}

drum1B.on('click',function(){
    addToTank(drumsImg,1);
});
drum2B.on('click',function(){
    addToTank(drumsImg,2);
}
);
drum3B.on('click',function(){
    addToTank(drumsImg,3);
}
);
drum4B.on('click',function(){
    addToTank(drumsImg,4);
}
);

keys1B.on('click',function(){
    addToTank(keysImg,1);
}
);
keys2B.on('click',function(){
    addToTank(keysImg,2);
}
);

keys3B.on('click',function(){
    addToTank(keysImg,3);
}
);
keys4B.on('click',function(){
    addToTank(keysImg,4);
}
);

guitar1B.on('click',function(){ 
    addToTank(guitarsImg,1);
}
);

guitar2B.on('click',function(){
    addToTank(guitarsImg,2);
}
);
guitar3B.on('click',function(){
    addToTank(guitarsImg,3);
}
);

guitar4B.on('click',function(){
    addToTank(guitarsImg,4);
}
);

bass1B.on('click',function(){
    addToTank(bassImg,1);
}
);

bass2B.on('click',function(){
    addToTank(bassImg,2);
}
);

bass3B.on('click',function(){
    addToTank(bassImg,3);
}
);

bass4B.on('click',function(){
    addToTank(bassImg,4);
}
);

