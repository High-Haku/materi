import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("render button component", () => {
  render(<Button />);
  const btn = screen.queryByTitle("btn-theme");

  expect(btn).toBeTruthy();
});

test("button class", () => {
  render(<Button />);
  const btn = screen.queryByTitle("btn-theme");

  expect(btn).toHaveClass("btn-theme");
});

test("button theme event", () => {
  render(<Button />);
  const buttonText = screen.getByText(/Current Theme/i);
  userEvent.click(buttonText);
  expect(buttonText).toHaveTextContent(/dark/i);
  userEvent.click(buttonText);
  expect(buttonText).toHaveTextContent(/light/i);
});
