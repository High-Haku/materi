import { render, screen } from "@testing-library/react";
import App from "./App";
import Logo from "./logo.svg";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("edit text", () => {
  render(<App />);
  const editElement = screen.getByText(/edit/i);
  expect(editElement).toBeInTheDocument();
});

test("Logo Show", () => {
  render(<App />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("alt", "logo");
  expect(logo).toHaveAttribute("src", "logo.svg");
  expect(logo).toHaveClass("App-logo");
});
