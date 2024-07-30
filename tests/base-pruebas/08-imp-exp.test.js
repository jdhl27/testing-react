import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Prueba en 08-imp-exp", () => {
  test("getHeroeById debe retornar heore por id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar los 3 heroes de DC", () => {
    const expectedLength = 3;
    const owner = "DC";
    const expectedHeroes = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];
    const heros = getHeroesByOwner(owner);

    expect(heros).toEqual(expectedHeroes);
    expect(Array.isArray(heros)).toBe(true);
    expect(heros.length).toBe(expectedLength);
  });

  test("getHeroesByOwner debe retornar los 2 heroes de Marvel", () => {
    const expectedLength = 2;
    const owner = "Marvel";
    const heros = getHeroesByOwner(owner);

    expect(Array.isArray(heros)).toBe(true);
    expect(heros.length).toBe(expectedLength);
  });
});
