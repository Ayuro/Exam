import invoquePokemon from "./invocation.js";
import pokemonAbility from "./abilities.js";

window.addEventListener("DOMContentLoaded", () => {
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

  /**
   * Fonction IIFE qui lance les autres fonction de ce fichier.
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
    sendButton.addEventListener("click", displayComment);
  })();
});
