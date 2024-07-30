describe("Prueba en <DemoComponent/>", () => {
  test("This test must not fail", () => {
    // 1. Inicialización
    const message = "Hola mundo!";

    // 2. Estimulo
    const message2 = message.trim();

    // 3. Observar el comportamiento... esperado
    expect(message).toBe(message2);
  });
});
