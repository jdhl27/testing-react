import { render } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hola, Mundo!";
  //   const { container } = render(<FirstApp title={title} />);
  //   // console.log(container);
  //   expect(container).toMatchSnapshot();
  // });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola, Mundo!";
    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(title);

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Mundo!";
    const subtitle = "Soy un subtitulo!";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle)).toBeTruthy();
  });
});
