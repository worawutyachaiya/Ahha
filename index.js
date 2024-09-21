// function ghost(){
//     window.location.href="ghost.html";

//     setTimeout(function(){
//         window.location.href="index.html";
//     },100);
// }

function ghost(currentColor){
    // window.location.href="ghost.html";

    const show = document.querySelector("span")

    show.classList.add("show");

    let audio = new Audio('./sound/1.mp3');
    audio.volume = 1;
    audio.play(); 
        
    setTimeout(function(){changePic()},2500);

}

function changePic(){
    const show = document.querySelector("span")
    
    show.style.background="url('img/cat.jpg')"

    setTimeout(function(){
        show.classList.remove("show");
        window.location.href="index.html"
    },1000);

}