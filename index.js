const selfieButton = document.getElementById("selfie-button");
selfieButton.addEventListener("click", function () {
    if (!document.getElementById("selfie")) {
        const selfieDiv = document.createElement('div');
        selfieDiv.id = "selfie";
        selfieDiv.className = "selfie";

        const selfieImg = document.createElement("img");
        selfieImg.id = "selfie-img";
        selfieImg.src = "./hao-wu-selfie.jpg";
        selfieImg.alt = "Hao Wu";

        selfieDiv.appendChild(selfieImg);

        // append the selfie to the button section
        document.querySelector(".selfie-section").appendChild(selfieDiv);

        const style = document.createElement('style');
        style.id = "selfie-style";
        style.innerHTML = `
      .selfie img {
        border: 2px solid black;
        border-radius: 10px;
        max-width: 100%;
        height: auto;
        margin-top: 20px;
      }
    `;
        document.head.appendChild(style);
        
        // change the text of selfieButton
        selfieButton.innerText = "Don't want to see me anymore? Press again!";
    }
    else {
        selfie = document.getElementById("selfie");
        selfie.remove();

        const existingStyle = document.getElementById("selfie-style");
        if (existingStyle) {
            existingStyle.remove();
        }

        selfieButton.innerText = "You want to see me? You definitely do!";
    }
});


// Using classlist
const backgroundButton = document.getElementById("background-button");
backgroundButton.addEventListener("click", function () {
    document.body.classList.toggle("background-image");
    if (document.body.classList.contains("background-image")) {
        backgroundButton.innerText = "You want a cleaner page?";
    } else {
        backgroundButton.innerText = "You want to see a magnificent view of nature?";
    }
});