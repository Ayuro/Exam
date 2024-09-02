import multiplyAllByTwo from "./functionsToTest.js";

describe("TESTS pour la fonction multiplyAllByTwo :", () => {
  test("Attendu 2, 4, 6, 8, 10 quand on lui envoi 1, 2, 3, 4, 5 :", () => {
    expect(multiplyAllByTwo([1, 2, 3, 4, 5])).toBe(2, 4, 6, 8, 10);
  });
});
