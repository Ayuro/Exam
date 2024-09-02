import invoquePokemon from "./invocation.js";
import pokemonAbility from "./abilities.js";

window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeAbility = document.getElementById("pokeAbility");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbilityBtn = document.getElementById("ability");
  const sendButton = document.getElementById("sendButton");

  /**
   * Rends visible la div "comment" ainsi que le formulaire contenu dedans.
   * Met à jour le contenu de la section
   * @param {event} event L'évenement qui déclenche cette fonction.
   */
  const displayComment = (event) => {
    const comment = document.getElementById("myComment");
    event.preventDefault();
    comment.style.visibility = "visible";
    $("#message").text($("#messageInput").val());
  };

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

  // /**
  //  * Ecoute l'evenement click sur un bouton pour déclencher la fonction
  //  * fetchPokemon
  //  * Puis ajoute une div pour afficher le résultat.
  //  */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
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

  /**
   * Fonction IIFE qui lance les autres fonction de ce fichier.
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
    sendButton.addEventListener("click", displayComment);
  })();
});
