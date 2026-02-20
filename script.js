const btn=document.querySelectorAll(".btn");
const elevatorr=document.getElementById("elevatorr");
const dingSound = document.getElementById("dingSound");
const heights=120;
const floor=5;
function lift(floor){
    closeDoors(); 
    let distance = (floor-1)*(-heights);
    elevatorr.style.transform=`translateY(${distance}px)`;

}
btn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        btn.style.backgroundColor="red";
    })
})
elevatorr.addEventListener("transitionend",(e)=>{
    if (e.target !== elevatorr||e.propertyName !== "transform") return;
    dingSound.currentTime = 0;
    dingSound.play();
    openDoors();
    btn.forEach(btn =>{
        btn.style.backgroundColor="green";
    });
})
function openDoors(){
    elevatorr.classList.remove("close");
    elevatorr.classList.add("open");
    setTimeout(()=>{
        closeDoors();
    },7000);
}

function closeDoors(){
    elevatorr.classList.remove("open");
    elevatorr.classList.add("close");
}



