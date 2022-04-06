import { render, screen, fireEvent } from "@testing-library/react";
import InputBar from "./InputBar";

test("render inputbar", () => {
  render(<InputBar />);
  const input = screen.queryByTitle("input-component");
  expect(input).toBeTruthy();
});

test("simulasi ketik input", () => {
  render(<InputBar />);
  const input = screen.queryByTitle("input-component");

  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "high haku" } });
  expect(input.value).toBe("high haku");
});
