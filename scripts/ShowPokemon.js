var queryString = decodeURIComponent(window.location.search); //parsing 
pokemonName = queryString.substring(6); 
document.querySelector('title').textContent = pokemonName[0].toUpperCase() + pokemonName.substring(1, pokemonName.length);

const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url + pokemonName + "/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
            pokemon = data;
            selectedSprite = pokemon["sprites"]["front_default"];

            types = pokemon["types"];
            abilites = pokemon["abilities"];
            moves = pokemon["moves"];
            stats = pokemon["stats"];
            types = pokemon["types"];

            $(".pokeInfo").prepend("<h4 id='pokemonID'><b>" + pokemon["id"].toString().padStart(3, "0") + "</b></h3>")
            
            $(".pokeName").append('<b><h1>' + pokemon["name"].charAt(0).toUpperCase() + pokemon["name"].slice(1) + '</h1></b>');
            $(".pokerName").append('<h2>' + pokemon["name"].charAt(0).toUpperCase() + pokemon["name"].slice(1) + '</h2>');

            $(".pokemonImage").append('<img src="' + selectedSprite + '"id="pokemonIMG" alt="Pokemon">');

            for (i = 0; i < types.length; i++){
                if (i == 1){  
                    $("#type").append('<p id="type2">' + types[i]["type"]["name"] + '</p>');
                } else {
                    $("#type").append('<p id="type1">' + types[i]["type"]["name"] + '</p>');
                }
                
            }

            /*
            for (i = 0; i < abilites.length; i++){
                $(".abilitys").append('<h2>' + abilites[i]["ability"]["name"] + '</h2>');
            }
            */
           
            for (i = 0; i < moves.length; i++){

                //$(".moves").append('<div class="move_div_' + moves[i]["move"]["name"] + '">' + '</div>');
                console.log(moves[i]["move"]["name"])
                //$(".move_div_" + moves[i]["move"]["name"]).append('<h2>' + moves[i]["move"]["name"] + '</h2>');
                fetch(moves[i]["move"]["url"]).then(res=>{
                    if (res.status === 200){
                        // SUCCESS
                        res.json().then(data=>{
                            move = data;    
                            console.log(move["name"])

                            var move_div = `
                            <div class="move_${move["type"]["name"]} move">
                                <div class="row">
                                    <div class="col moveType">
                                        type: ${move["type"]["name"]}
                                    </div>
                                    <div class="col movePP">
                                        pp: ${move["pp"]}
                                    </div>
                                </div>
                                <div class="row moveName">
                                    ${move["name"].replace("-", " ")}
                                </div>
                                <div class="row">
                                    <div class="col moveACC">
                                        acc: ${move["accuracy"]}
                                    </div>
                                    <div class="col movePOW">
                                        pow: ${move["power"]}
                                    </div>
                                </div>
                            </div>`
                           
                            $("#moves").append(move_div);
                            //$(".move_div_" + move["name"]).append('<h3>' + "Accuracy: " + move["accuracy"] + '</h3>');
                            //$(".move_div_" + move["name"]).append('<h3>Power: ' + move["power"] + '</h3>');
                            //$(".move_div_" + move["name"]).append('<h3>pp: ' + move["pp"] + '</h3>');
                            //$(".move_div_" + move["name"]).append('<h3>Type: ' + move["type"]["name"] + '</h3>');
                        }).catch(err => console.log(err))
                    }
                    else{
                        alert("Could not connect online");
                    }
                })
            }

            


            //console.log(pokemon["name"]);
        }).catch(err => console.log(err))
    }
    else{
        alert("Could not connect online");
    }
})
