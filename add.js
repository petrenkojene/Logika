// TASK1*************************************************************************************
let actionBoy = ["з'їв", "забрав","поклав"];
let subjects1 = [];
let subjects2 = [];
let number = [1,2,3,4,5,6,7,8,9,10];
let flag=true;
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
arr1.push(currentSubjects1);
arr1.push(random2);


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
let answerMain;
let regApple3 = currentSubjects1.match(/яб/i);
let regApple4 = random3.match(/яб/i);
let regApple5 = random2.match(/яб/i);


let regPear3 = currentSubjects1.match(/гр/i);
let regPear4 = random3.match(/гр/i);
let regPear5= random2.match(/гр/i);

let regOrange3 = currentSubjects1.match(/ап/i);
let regOrange4 = random3.match(/ап/i);
let regOrange5 = random2.match(/ап/i);
let result1;


switch(currentActionBoy){
    case "з'їв":
    case "забрав":
        sign = '-';
if(regApple3!==null && regApple4!==null){
    answerMinus() ;
    

}
 if(regApple5!==null && regApple4!==null){
                answerMinus2();
                
            }  
if(regPear3!==null && regPear4!==null){
    answerMinus() ;
    

    }

    if(regPear5!==null && regPear4!==null){
        answerMinus2();
   
        }
    
if(regOrange3!==null && regOrange4!==null){
       answerMinus() ;  

        }
if(regOrange5!==null && regOrange4!==null){
            answerMinus2();            
            }  
  



if(result <0){
    alert('Помилка \n Для подальших дій \n натисьніть на кнопку \n "Отримати відповідь"');
            answer = "Помилка.<br>Від'ємне значення, так як хлопчик не може забрати більше ніж лежить на столі"
            answerMain = '';
            
        
        }
                
break;
case "поклав":
    sign = '+'
    if(regApple3!==null && regApple4!==null){
        answerPlus();
        }
    if(regPear3!==null && regPear4!==null){
            answerPlus();
            }
    if(regOrange3!==null && regOrange4!==null){
                answerPlus();               
                
                } 

    if(regApple5!==null && regApple4!==null){
                    answerPlus1();
                    
                }  
    if(regPear5!==null && regPear4!==null){
                    answerPlus1()
               
                    }
    if(regOrange5!==null && regOrange4!==null){
                        answerPlus1()                       
                        
                        } 
                      
                break;
}      

function answerPlus(){
    result =randomNumber1+randomNumber3;
    result1 = result+randomNumber2;
    answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result1}`;
    answerMain = `Відповідь: на столі залишилось ${result1} фруктів.`;
}
function answerPlus1(){
    result =randomNumber2+randomNumber3;
    result1 = result+randomNumber1;
    answer =`${randomNumber1} + ${randomNumber2} ${sign} ${randomNumber3} = ${result1}`;
    answerMain = `Відповідь: на столі залишилось ${result1} фруктів.`;
}
function answerMinus(){
    result =randomNumber1-randomNumber3;
    result1 =result+randomNumber2
    answer =`${randomNumber1} ${sign} ${randomNumber3} + ${randomNumber2} = ${result1}`;
    answerMain = `Відповідь: на столі залишилось ${result1} фруктів.`;
}
function answerMinus2(){
    result = randomNumber2-randomNumber3;
    result1 = randomNumber1+result;
    answer = `${randomNumber1} + ${randomNumber2} ${sign} ${randomNumber3} = ${result1}`
    answerMain = `Відповідь: на столі залишилось ${result1} фруктів.`;
}



// Добавление DOM элементов
let MainElement = document.createElement('div');
MainElement.className = 'main';
document.body.append(MainElement);

// container 1
let container1 = document.createElement('div');
container1.className = 'container1';
MainElement.append(container1);

let heading = document.createElement('h2');
heading.innerHTML = "Задача1"
container1.append(heading);

let div = document.createElement('div');
div.className = 'item';
container1.append(div);

let par = document.createElement('p');
par.innerHTML = `На столі було ${randomNumber1} ${currentSubjects1} та ${randomNumber2} ${random2}. 

Хлопчик ${currentActionBoy} ${randomNumber3} ${random3}. Скільки всього фруктів залишилося на столі. `

div.append(par)

let buttonTask1 = document.createElement('button');
buttonTask1.textContent = 'Отримати відповідь';
buttonTask1.className='btn btn-primary';
div.append(buttonTask1);

let answerTask = document.createElement('div');
answerTask.className = 'container'
div.after(answerTask);

let par1 = document.createElement('p');
let par2 = document.createElement('p');
par1.className = 'item1';
par1.innerHTML = answer;
par2.innerHTML = answerMain;


answerTask.append(par1)
answerTask.append(par2)



document.querySelector('.btn').addEventListener('click',function(){
       
    if(flag){
        document.querySelector('.container').style.display = 'block';
        
          }else{
        document.querySelector('.container').style.display = 'none';  
    }
     flag=!flag;
})


// TASK2****************************************************************