const pokeDiv = document.getElementById("pokemon-info");
const pokeP = document.getElementById("pokeInfo");
const pokeAbilityBtn = document.getElementById("ability");

/**
   * Fonction qui va chercher aléatoirement un pokémon parmi 896 disponible
   * dans une api.
   * "foundPokemon" stock la réponse en entier.
   * Si "foundPokemon" est valide, "jsonPokemon" stock le json parser de
   * "foundPokemon". L'ojet "pokeInfo" va alors servir a stocker l'espèce de
   * pokémon après l'avoir formaté.
   * Une fois fait, les informations seront visible dans une div qui sera
   * préalablement remise à zero si elle contenait déjà quelque chose
   * Des messages d'erreur seront affichés dans la console error.
   * Si aucun pokémon n'est trouvé mais que tout c'est bien passé, alors un
   * message indiquera qu'aucun pokémon n'a été trouvé
   */
const fetchPokemon = async () => {
    const pokedexNum = Math.floor(Math.random() * 897);
    let foundPokemon = "";
    let jsonPokemon = "";
    const pokeInfo = {};

    try {
      foundPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = "No Pokémon found...";
    }

    if (pokeP.innerText !== "") {
      pokeP.innerText = "";
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute("disabled");
  };

    /**
   * Ecoute l'evenement click sur un bouton pour déclencher la fonction
   * fetchPokemon
   * Puis ajoute une div pour afficher le résultat.
   */
    const invoquePokemon = () => {
      const pokeBtn = document.getElementById("pokemon");
      pokeBtn.addEventListener("click", fetchPokemon);
      pokeDiv.appendChild(pokeP);
    };

    export default invoquePokemon;