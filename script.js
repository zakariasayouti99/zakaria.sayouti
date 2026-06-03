function lireLivre(titre){
    alert("Vous avez choisi : " + titre);
}

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let filtre = search.value.toLowerCase();

    let livres = document.querySelectorAll(".book");

    livres.forEach(function(livre){

        let titre = livre.querySelector("h2").textContent.toLowerCase();

        if(titre.includes(filtre)){
            livre.style.display = "block";
        }else{
            livre.style.display = "none";
        }
    });
});