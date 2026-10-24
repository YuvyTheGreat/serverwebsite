//VERY USEFUL
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//______________________________________________________________________

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
})

async function fetchData() {
    try {

        var data = await fetch('/.netlify/functions/fetch'); //by default a GET request, do not put the .js doesn't work
        const result = await data.json(); //always use await for this and fetch

        console.log(result);
        document.getElementById("playernumber").textContent = (result.playerNumber + (result.playerNumber != 1 ? " Players Online" : " Player Online")); //ternary operator :)

        if (result.isOnline == true) {
            document.getElementById("onlinestatus").innerHTML = "Server is Up <img src='Green Pulse Dot.gif' style='width: 25px; height: auto; vertical-align: middle' alt='Online'>";
        } else {
            document.getElementById("onlinestatus").textContent = "Server is Down 🔴";
        }

    } catch (error) {
        console.log(error.message);
    }

    //variables inside the try only exist inside the try
}

