var pages= ["Home", "About", "Interact"];

function createNav(){
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    // createButton2(pages[2]);
    document.body.appendChild(nav);

    function createButton(pg){
        var butt=document.createElement("button");
        butt.innerHTML=pg;
        butt.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(butt);
    }

}
function createWrapper (){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper)

}

function navigate(pg) {
    if (pg === "Home") {
        homePage();
    } else if (pg === "About") {
        aboutPage();
    } else {
        interactPage();
    }
    function homePage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Home of the best epic gamer";
        wrapper.appendChild(header);
    }

    function aboutPage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Jakeem Tyler";
        wrapper.appendChild(header);

    }
    function interactPage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Interact";

        var countNumber=document.createElement("h2")
        countNumber.style.color="red"
        var countChange=0
        countNumber.innerHTML= "Your number is: " +countChange

        var button= document.createElement("button")
        button.innerHTML= "Add 1"
        button.addEventListener("click", function (){
            countChange = countChange + 1;
            countNumber.innerHTML = "Your number is: " +countChange;
        })


        wrapper.appendChild(header);
        wrapper.appendChild(countNumber);
        wrapper.appendChild(button);


    }

}
createNav();
createWrapper();
navigate("home");

