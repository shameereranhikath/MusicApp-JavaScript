window.addEventListener("load",()=>{

    const sounds=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const colors=[
        "teal",
        "tomato",
        "turquoise",
        "yellow",
        "yellowgreen",
        "slategrey"
    ]
       //Function for getting the sounds

    pads.forEach((data,index)=>
    {
        data.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubble(index);
            
        })
    });
    // Function for creating the Bubble
    const createBubble=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease-in-out";
        bubble.addEventListener("animationend",function(){
       visual.removeChild(this);
        });

    }
})