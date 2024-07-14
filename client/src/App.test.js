import { render, screen } from "@testing-library/react";
import { act } from "react";
import App from "./App";

test("renders current count text", () => {
  act(() => {
    render(<App />);
  });
  const countText = screen.getByText(/current count/i);
  expect(countText).toBeInTheDocument();
});

test("renders increment and decrement buttons", () => {
  act(() => {
    render(<App />);
  });
  const incrementButton = screen.getByText("+");
  const decrementButton = screen.getByText("-");
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});
