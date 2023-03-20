const url = "https://pokeapi.co/api/v2/pokemon/";

const amountPokemon = 891;

var queryString = decodeURIComponent(window.location.search); //parsing 
console.log(queryString);

pokemonName = 0;

if (queryString.length == 0){
    pokemonName = 1;
} else {
    pokemonName = queryString.substring(6); 
}

$("#searchForPokemon :input").change(function() {
    console.log("bang");
 });

 document.getElementById("searchForPokemon").addEventListener("input", function () {
     createPokemon();
 });
 


fetch(url + "1" + "/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
            pokemon = data;
            
            selectedPokemon = pokemon["name"];
            selectedSprite = pokemon["sprites"]["front_default"];
            types = pokemon["types"];
            pokeId = pokemon["id"];

            console.log(selectedPokemon);
            console.log(selectedSprite);
            
            $(".nameImage").empty();

            $(".nameImage").append('<h2 id="pokemonName">' + selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1) + '</h1>');

            $(".nameImage").append('<img id="pokemonImage" src="' + selectedSprite + '" alt="Pokemon">')

            
            $(".typing").empty();

            $(".typing").append('<div class="col-2">')
            $(".typing").append('<p id="typeLabel"><b>Type</b></p>')
            $(".typing").append('</div>')


            for (i = 0; i < types.length; i++){

                if (i == 0){
                    $(".typing").append('<div class="col-md-auto firstType">');
                    $(".firstType").append('<p id="type1">' + types[i]["type"]["name"] + '</p>');
                } else {
                    console.log("brrrrrrrr")
                    $(".typing").append('<div class="col secondType">');
                    $(".secondType").append('<p id="type2">' + types[i]["type"]["name"] + '</p>');
                }
            
                $(".typing").append('</div>');

            }


            $(".pokeNum").empty();

            $(".pokeNum").append('<p id="pokemonNumber">' + pokeId.toString().padStart(3, "0") + '</p>');
            
        }).catch(err => console.log(err))
    }
    else{
        alert("Could not connect online");
    }
})

function createPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
            pokemon = data;
            var inputVal = document.getElementById("searchForPokemon").value;
            console.log(inputVal);
            $(".allPokes").empty();
            for (i = 0; i < amountPokemon; i++){
                if (pokemon["results"][i]["name"].substring(0, inputVal.length) == inputVal || !inputVal){
                    $(".allPokes").append('<option value="' + pokemon["results"][i]["name"] + '">' + pokemon["results"][i]["name"] + '</option>');
                }
                
            }
            
        }).catch(err => console.log(err))
    }
    else{
        alert("Could not connect online");
    }
    })
}

createPokemon();
function updatePokemon(){

    value = $('.allPokes').val();

    console.log(value);

    fetch(url + value + "/").then(res=>{
        if (res.status === 200){
            // SUCCESS
            res.json().then(data=>{
                pokemon = data;
                
                selectedPokemon = pokemon["name"];
                selectedSprite = pokemon["sprites"]["front_default"];
                types = pokemon["types"];
                pokeId = pokemon["id"];

    
                console.log(selectedPokemon);
                console.log(selectedSprite);
                
                $(".nameImage").empty();

                $(".nameImage").append('<h2 id="pokemonName">' + selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1) + '</h1>');
    
                $(".nameImage").append('<img id="pokemonImage" src="' + selectedSprite + '" alt="Pokemon">')


                
                $(".typing").empty();

                $(".typing").append('<div class="col-2">')
                $(".typing").append('<p id="typeLabel"><b>Type</b></p>')
                $(".typing").append('</div>')
    

                for (i = 0; i < types.length; i++){

                    if (i == 0){
                        $(".typing").append('<div class="col-md-auto firstType">');
                        $(".firstType").append('<p id="type1" class=move_' + types[i]["type"]["name"] + '>' + types[i]["type"]["name"] + '</p>');
                    } else {
                        console.log("brrrrrrrr")
                        $(".typing").append('<div class="col secondType">');
                        $(".secondType").append('<p id="type2" class=move_' + types[i]["type"]["name"] + '>' + types[i]["type"]["name"] + '</p>');
                    }
                
                    $(".typing").append('</div>');

                }

                $(".pokeNum").empty();

                $(".pokeNum").append('<p id="pokemonNumber">' + pokeId.toString().padStart(3, "0") + '</p>');
                
                
            }).catch(err => console.log(err))
        }
        else{
            alert("Could not connect online");
        }
    })
}



$(".moreButton").click(function () {
    if($('.allPokes').val()){
        console.log("pow")
        window.location.href = "ShowPokemon.html" + "?name=" + $('.allPokes').val();
    } else {
        console.log("bang")
        window.location.href = "ShowPokemon.html" + "?name=" + "bulbasaur";
    }
});
