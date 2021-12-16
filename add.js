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
let randomNumber1 = currentRandom(number);
let randomNumber2 = currentRandom(number);
let randomNumber3 = currentRandom(number);
let currentActionBoy = currentRandom(actionBoy);
// Падежи элементов
switch (randomNumber1){
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
switch (randomNumber2){
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
let random2 = currentRandomFruits(subjects2)
let arr1 = [];
arr1.push(currentSubjects1)
arr1.push(random2)
console.log(arr1)

let regApple1 = arr1[0].match(/яб/i);
let regApple2 = arr1[1].match(/яб/i);

let regPear1 = arr1[0].match(/гр/i);
let regPear2 = arr1[1].match(/гр/i);

let regOrange1 = arr1[0].match(/ап/i);
let regOrange2 = arr1[1].match(/ап/i);



// Падежи элементов
if(regApple1!=null ||  regApple2!=null){
    switch (randomNumber3){
        case 1:
            arr1[0]='яблукo';   
            arr1[1]='яблукo';   
            break;
        case 2:
            arr1[0]='яблука';   
            arr1[1]='яблука';   
            
            break;
        case 3:
            arr1[0]='яблука';   
            arr1[1]='яблука';   
            
            break;
        case 4:
            arr1[0]='яблука';   
            arr1[1]='яблука';   
            
               break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            arr1[0]='яблук';   
            arr1[1]='яблук';   
            
               break;  
    }
}
if(regPear1!=null || regPear2!=null){
    switch (randomNumber3){
        case 1:
            arr1[0]='грушу';   
            arr1[1]='грушу';   
            break;
        case 2:
        case 3:
        case 4:
            arr1[0]='груши';   
            arr1[1]='груши';               
            break;        
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            arr1[0]='груш';   
            arr1[1]='груш';   
            
               break;  
    } 
}
if(regOrange1!=null || regOrange2!=null){
    switch (randomNumber3){
        case 1:
            arr1[0]='апельсин';   
            arr1[1]='апельсин';   
            break;
        case 2:
        case 3:
        case 4:
            arr1[0]='апельсина';   
            arr1[1]='апельсина';               
            break;        
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            arr1[0]='апельсинів';   
            arr1[1]='апельсинів';   
            
               break;  
    } 
}

let random3 = currentRandom(arr1)
let sign;
let result;
let answer;
let regApple3 = currentSubjects1.match(/яб/i);
let regApple4 = random3.match(/яб/i);
console.log(regApple3);
console.log(regApple4);

let regPear3 = currentSubjects1.match(/гр/i);
let regPear4 = random3.match(/гр/i);

let regOrange3 = currentSubjects1.match(/ап/i);
let regOrange4 = random3.match(/ап/i);
switch(currentActionBoy){
    case "з'їв":
    case "забрав":
        sign = '-';
        if(regApple3!==null && regApple4!==null){
result =randomNumber1-randomNumber3;

console.log(result)
}
if(regPear3!==null && regPear4!==null){
    result =randomNumber1-randomNumber3;
    answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result}`;
    console.log(result)
    }
    
    if(regOrange3!==null && regOrange4!==null){
        result =randomNumber1-randomNumber3;
        answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result}`;
        console.log(result)
        }
        if(result <0){
            alert('error')
        }else{
            result = result+randomNumber2
            answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result}`;
        }
        
break;
case "поклав":
    sign = '+'
    if(regApple3!==null && regApple4!==null){
        result =randomNumber1+randomNumber3;
        
        console.log(result)
        }
        if(regPear3!==null && regPear4!==null){
            result =randomNumber1+randomNumber3;
            
            console.log(result)
            }
            if(regOrange3!==null && regOrange4!==null){
                result =randomNumber1+randomNumber3;
                
                console.log(result)
                } 
                result = result+randomNumber2;
                answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result}`;
                break;
}      




// Добавление DOM элементов
let div = document.createElement('div');
div.className = 'item';
let par = document.createElement('p');
par.innerHTML = `На столі було ${randomNumber1} ${currentSubjects1} та ${randomNumber2} ${random2}. 

Хлопчик ${currentActionBoy} ${randomNumber3} ${random3}. Скільки всього фруктів залишилося на столі. `
document.body.append(div);
div.append(par)
let buttonTask1 = document.createElement('button');
buttonTask1.textContent = 'Отримати відповідь';
buttonTask1.className='btn btn-primary'
div.append(buttonTask1)
let answerTask = document.createElement('div');
answerTask.className = 'container'
div.after(answerTask);
let par1 = document.createElement('p');
let par2 = document.createElement('p');
par1.className = 'item1'
par1.innerHTML = answer;
par2.innerHTML = `Відповідь: на столі залишилось ${result} фруктів.`


answerTask.append(par1)
answerTask.append(par2)


let flag=true;
document.querySelector('.btn').addEventListener('click',function(){
       
    if(flag){
        document.querySelector('.container').style.display = 'block';
        
             console.log(flag)
    }else{
        document.querySelector('.container').style.display = 'none';  
    }
     flag=!flag;
})

