import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const initialValue = 11;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor incial en 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp />);
    const counterElement = screen.getByRole("heading", { level: 2 });
    const initialValue = parseInt(counterElement.textContent, 10);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp />);
    const counterElement = screen.getByRole("heading", { level: 2 });
    const initialValue = parseInt(counterElement.textContent, 10);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("debe funcionar el boton reset", () => {
    render(<CounterApp />);
    const counterElementInitial = screen.getByRole("heading", {
      level: 2,
    }).textContent;
    // const buttonReset = screen.getByText("Reset");
    const buttonReset = screen.getByRole("button", { name: "btn-reset" });
    const buttonIncrement = screen.getByText("+1");

    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonIncrement);

    fireEvent.click(buttonReset);

    const counterElementFinal = screen.getByRole("heading", {
      level: 2,
    }).textContent;
    expect(counterElementFinal).toBe(counterElementInitial);
  });
});
