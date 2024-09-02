const pokeAbilityBtn = document.getElementById("ability");
const pokeDiv = document.getElementById("pokemon-info");

/**
   * Fonction qui attribu au Pokemon de l'utilisateur un pouvoir aléatoire parmi
   * ceux disponible dans l'apo pokeapi.
   * Elle fonctionne sensiblement de la même façon que celle qui génère un
   * Pokemon avec le même système de mise en forme.
   * Une différence, elle n'a pas 2 console error, mais un.
   * Si foundAbilities n'est pas valide (après le fetch), alors la variable sera
   * rempli avec un message d'erreur.
   */
const fetchPokemonAbilities = async () => {
    const pokedexNum = Math.floor(Math.random() * 266);
    let foundAbilities = "";
    const pokeAbility = document.getElementById("pokeAbility");
    let jsonAbilities = {};
    let abilityToDisplay = "";

    try {
      foundAbilities = await fetch(
        `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        jsonAbilities = await foundAbilities.json();
        if ("" !== jsonAbilities.name && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`;
        } else {
          abilityToDisplay = "Tackle";
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonAbilities = "No ability found...";
    }

    if (pokeAbility.innerText !== "") {
      pokeAbility.innerText = "";
    }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

    /**
   * Ecoute l'evenement click sur un bouton pour déclencher la fonction
   * fetchPokemonAbilities.
   * Puis ajoute une div pour afficher le résultat.
   */
    const pokemonAbility = () => {
      pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
      pokeDiv.appendChild(pokeAbility);
    };

export default pokemonAbility;