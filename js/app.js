let caro = document.querySelector(".caro");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let num = 0
const images = ["Animals/l1.jpg",
                "Animals/l2.jpg",
                "Animals/l3.jpg",
                "Animals/l1.jpg"  
               ]

const image = document.createElement("img");
next.addEventListener("click", make1)
prev.addEventListener("click", make2)

function make1(){
    if ( num === 3){
        num = 0
        image.src = images[num];
        image.classList = "caroimage"
        caro.appendChild(image);
        num++
        console.log("done")
    }else{
        image.src = images[num];
        image.classList = "caroimage"
        caro.appendChild(image);
        num++
        console.log("done")
    }
}

function make2(){
    if (num === 0){
        num = 3
        image.src = images[num];
        image.classList = "caroimage"
        caro.appendChild(image);
        num--
    }else{
        image.src = images[num];
        image.classList = "caroimage"
        caro.appendChild(image);
        num--
    }
       
}

