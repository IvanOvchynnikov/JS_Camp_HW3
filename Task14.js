//Task 14
const checkBalance=(str)=>{
    let cur=0,flag=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='(') cur=cur+1;
        else cur=cur-1;
        if(cur<0) flag=1;
    }
    if(flag) return false;
    else return true;
}
console.log("Task 14");
let str1="()()()";
let str2="(()))(";
if(checkBalance(str1)){
    let task__14=document.querySelector(".task__14");
    task__14.innerHTML=str1;
}
if(checkBalance(str2)){
    let task__14_2=document.querySelector(".task__14_2");
    task__14_2.innerHTML=str2;
}

function handleKeyDown(event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        event.preventDefault();
    }
}
function handleContextMenu(event) {
    event.preventDefault();
}
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('contextmenu', handleContextMenu);