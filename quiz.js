const Questions = [{
    'que':'which of following is a markup language?',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'php',
    'correct':'a',
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b",
}
]

let index = 0;
let total  = Questions.length;
let right  =0;
let wrong = 0;
const qu = document.getElementById('Qu');
const inputoption = document.querySelectorAll('.option');
let box = document.getElementById('box');



const loadquestion =()=>{
    const data = Questions[index]
    // console.log(data.que);
    // document.getElementById('Qu').innerText = data.que;
    if(index == total){
        return end();
    }
reset();
    qu.innerText = `${index+1} ${data.que}`

    inputoption[0].nextElementSibling.innerText = data.a;
    inputoption[1].nextElementSibling.innerText = data.b;
    inputoption[2].nextElementSibling.innerText = data.c;
    inputoption[3].nextElementSibling.innerText = data.d;

}


const submitquiz = ()=>{
    const data = Questions[index]
   const ans = getAnswerd();
   if(ans==data.correct){
    right++;
   }else{
    wrong++;
   }
   index++;
   loadquestion();
   return;
}
const getAnswerd = ()=>{
    let ans;
    inputoption.forEach(
        (input)=>{
            if(input.checked){
                ans =input.value;
            }
        }
    )
    return ans
}
const reset = ()=>{
    inputoption.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}
const end = ()=>{
    box.innerText = `
    Thanks for playing
 ${right}/${total} are correct
    
    `
}
loadquestion();