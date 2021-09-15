const url = "https://randomuser.me/api";
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson) {
        const email = myJson.results[0].email;
        const p = document.createElement("p");
        p.innerText = email;
        document.body.appendChild(p);
        const name = myJson.results[0].name;
        const q = document.createElement("q");
        q.innerText = name;
        document.body.appendChild(q);
    });