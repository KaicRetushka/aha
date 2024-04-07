const butGetJoke = document.getElementById("butGetJoke");
const out = document.getElementById("out");

butGetJoke.addEventListener("click", ()=>{
    fetch("http://192.168.1.134:2900/getJoke", {method: "GET"})
    .then(res => res.json())
    .then((data) => {
        out.innerHTML = data;    
    });
});