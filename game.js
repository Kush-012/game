let usersc=0;
let compsc=0; 
const choices=document.querySelectorAll(".imgee");
const p=document.querySelector("#msg"); 
const userzzscore=document.querySelector("#userscore");
const compzzscore=document.querySelector("#compscore");

const genCompCh=()=>{
    const opt=["Rock","Paper","Scissor"];
    const indx=Math.floor(Math.random()*3);
    return opt[indx];
} 

const drawGame=()=>{
p.innerText="Game was draw";
p.style.backgroundColor="orange";
}

const showwin=(userwin,compch,userch)=>{
    if(userwin==true){
    p.innerText=`You Win! ${userch} beats ${compch}`;
    p.style.backgroundColor="green";
    usersc++; 
    userzzscore.innerText=usersc; 
    }  
    else{
        p.innerText=`You Lose! ${compch} beats ${userch}`; 
        compsc++; 
        compzzscore.innerText=compsc; 
        p.style.backgroundColor="red";
    }
} 
const playGame=(userch)=>{
    console.log(userch);
    const compch=genCompCh();
    console.log(compch);
    if(userch==compch){
        drawGame();
    } 
    else{
        let userwin=true;
        if(userch=="Rock"){
            userwin=compch=="Paper"?false:true;
        } 
        else if(userch=="Paper"){
            userwin=compch=="Rock"?true:false; 
        }
        else{
            userwin=compch=="Rock"?false:true;
        }
        showwin(userwin,compch,userch);
    }

}; 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const chid=choice.getAttribute("id");
        playGame(chid);
    }); 
});   