document.getElementById("clickButton").addEventListener("click", function(){
    let backgroundColor = prompt("Please enter a Color: ");
    document.body.style.backgroundColor = backgroundColor;
    document.querySelector("h1").innerText = "Changed by JS!";
});

const input = document.getElementById("calc");

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){ 
        const value = input.value;
        fetch("/calculate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: value })
        })
        .then(response => response.json())
        .then(data => {
           let result = data.result;
           document.querySelector("h1").innerText = result;
        });

    }
});
