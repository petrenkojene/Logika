let actionBoy = ["з'їв", "забрав","поклав"];
let subjects = ['яблуко','апельсин', 'груша', 'олівець'];
let number = [1,2,3,4,5,6,7,8,9,10];
function currentRandom(elem){
 return  elem[Math.floor(Math.random()*(elem.length-1))]
}

let div = document.createElement('div');
div.className = 'item';
div.innerHTML = `На столі було ${currentRandom(number)} ${currentRandom(subjects)} та ${currentRandom(number)} ${currentRandom(subjects)}`
document.body.append(div);
