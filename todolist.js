let result = document.querySelector(".result");
let envvoyer = document.querySelector("#envoyer");
let h = document.querySelector("#h");

envvoyer.addEventListener("click", function (e) {
    e.preventDefault();
    let newP = document.createElement("p");
    newP.textContent = `${h.value}`;
    newP.id = "newP" + document.querySelectorAll(".result p").length;
    result.appendChild(newP);

    let btn = document.createElement("BUTTON");
    btn.textContent = ("modifier")
    btn.classList.add("boutton1")

    newP.appendChild(btn);

    let btn1 = document.createElement("button");
    btn1.textContent = ("supprimer")
    btn1.classList.add("boutton2")

    newP.appendChild(btn1);




});