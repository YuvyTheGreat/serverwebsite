//VERY USEFUL
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//______________________________________________________________________

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
})

async function fetchData() {
    try {
        var data = fetch('functions/fetch'); //by default a GET request, do not put the .js doesn't work
        const result = await data.json();
        console.log(result)
    } catch (error) {
        console.log(error.message);
    }

    document.getElementById("playernumber").textContent = "result"
}

