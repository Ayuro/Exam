/**
 * Cette fonction prend en argument un tableau destructuré pour le transformer
 * en object.
 * Si l'argement à une longeur, alors la fonction va remplir la variable objet
 * avec les valeur du tableau.
 * Si l'argument n'est pas valide, alors l'objet va se voir assigner une string
 * d'erreur.
 * La variable créée sera alors retournée.
 *
 * @param {Array} args Tableau destructuré
 * @return {object}
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};

/**
 * La fonction prend en argument un tableau de nombre.
 * Si le tableau est valide, elle remplie la variable "response" avec le
 * résultat multiplié par deux.
 * Puis elle affiche dans la console le résultat.
 * Sinon, elle remplie "response" avec un message d'erreur.
 * "response" sera retourner à la fin de l'exécution de la fonction.
 *
 * @param {Array} arrayOfNumbers Tableau de nombres
 * @return {number | string}
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array().constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log("arrayTimesTwo: ", response);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};

export default multiplyAllByTwo;
