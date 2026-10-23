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
    } catch (error) {
        console.log(error.message);
    }

    document.getElementById("playernumber").textContent = result;
}

