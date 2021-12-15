let actionBoy = ["з'їв", "забрав","поклав"];
let subjects1 = [];
let subjects2 = [];
let number = [1,2,3,4,5,6,7,8,9,10];
function currentRandomFruits(elem){
 return  elem[Math.floor(Math.random()*(elem.length-1))]
}
function currentRandom(elem){
    return  elem[Math.floor(Math.random()*(elem.length))]
   }
let rundomNumber1 = currentRandom(number);
let rundomNumber2 = currentRandom(number);
let rundomNumber3 = currentRandom(number);

switch (rundomNumber1){
    case 1:
        subjects1[0]='яблукo';   
        subjects1[1]='апельсин';   
        subjects1[2]='груша';   
        subjects1[3]='олівець';   
        break;
    case 2:
        subjects1[0]='яблука';   
        subjects1[1]='апельсина';   
        subjects1[2]='груши';   
        subjects1[3]='олівці';
        break;
    case 3:
        subjects1[0]='яблука';   
        subjects1[1]='апельсина';   
        subjects1[2]='груши';   
        subjects1[3]='олівці';
        break;
    case 4:
        subjects1[0]='яблука';   
        subjects1[1]='апельсина';   
        subjects1[2]='груши';   
        subjects1[3]='олівці';
           break;
    case 5:
        subjects1[0]='яблук';   
        subjects1[1]='апельсинів';   
        subjects1[2]='груш';   
        subjects1[3]='олівців';
           break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        subjects1[0]='яблук';   
        subjects1[1]='апельсинів';   
        subjects1[2]='груш';   
        subjects1[3]='олівців';
           break;
    
       
}
switch (rundomNumber2){
    case 1:
        subjects2[0]='яблукo';   
        subjects2[1]='апельсин';   
        subjects2[2]='груша';   
        subjects2[3]='олівець';   
        break;
    case 2:
        subjects2[0]='яблука';   
        subjects2[1]='апельсина';   
        subjects2[2]='груши';   
        subjects2[3]='олівці';
        break;
    case 3:
        subjects2[0]='яблука';   
        subjects2[1]='апельсина';   
        subjects2[2]='груши';   
        subjects2[3]='олівці';
        break;
    case 4:
        subjects2[0]='яблука';   
        subjects2[1]='апельсина';   
        subjects2[2]='груши';   
        subjects2[3]='олівці';
           break;
    case 5:
        subjects2[0]='яблук';   
        subjects2[1]='апельсинів';   
        subjects2[2]='груш';   
        subjects2[3]='олівців';
           break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        subjects2[0]='яблук';   
        subjects2[1]='апельсинів';   
        subjects2[2]='груш';   
        subjects2[3]='олівців';
           break;
    
       
}
let currentSubjects1 = currentRandomFruits(subjects1)
let currentSubjects2 = currentRandomFruits(subjects2)
let remove;
switch (currentSubjects1){
    case subjects1[0]:
       subjects2.splice(0,1);
        
        break;
    case subjects1[1]:
        subjects2.splice(1,1);
        break;
    case subjects1[2]:
        subjects2.splice(2,1);
        break;
}
let rundom2 = currentRandom(subjects2)
let arr1 = [];
arr1.push(currentSubjects1)
arr1.push(rundom2)
console.log(arr1)
let rundom3 = currentRandom(arr1)
let div = document.createElement('div');
div.className = 'item';
div.innerHTML = `На столі було ${rundomNumber1} ${currentSubjects1} та ${rundomNumber2} ${rundom2}.<br>

Хлопчик ${currentRandom(actionBoy)} ${rundomNumber3} ${rundom3} `
document.body.append(div);
