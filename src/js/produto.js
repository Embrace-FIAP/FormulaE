

// const friendss = document.querySelector("h6"); 
// myHeading.textContent = "Zé gui"; 

function invite(){
    let friends = []
    if(document.getElementById("invite").onclick){
        let friend = prompt("Digite o nome do seu amigo"); 
        const element = document.createElement("h1"); 
        element.id = friend; 
    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.navegacao-item');
    const highlight = document.querySelector('.highlight');

    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            const topPosition = item.offsetTop;
            highlight.style.top = topPosition + 'px';
        });
    });
});

function menuHover(){
    let element = document.getElementsByClassName('navegacao-item'); 
    for (let i = 0; i < element.length; i++){
        element[i].style.display = 'flex'; 
    }
}


// let friends = prompt("Digite o nome do seu amigo"); 
// if(friends == "zé gui" && "Yuri"){
//     const element = document.createElement("div");
//     element.id = "zé gui"; 
//     const el = document.getElementById("zé gui"); 
//     return el
// }
