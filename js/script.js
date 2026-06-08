document.addEventListener("keydown", function(event) {

    let key = document.getElementById(event.key.toLowerCase());

    if(key){
        key.classList.add("active");
    }

    document.getElementById("lastKey").textContent = event.key;
});

document.addEventListener("keyup", function(event) {

    let key = document.getElementById(event.key.toLowerCase());

    if(key){
        key.classList.remove("active");
    }
});

console.log("JavaScript loaded");