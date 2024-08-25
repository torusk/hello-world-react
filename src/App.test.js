import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const helloElement = screen.getByText(/hello, world!/i);
  expect(helloElement).toBeInTheDocument();
});

test("updates text when button is clicked", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /click me/i });
  await userEvent.click(button);
  const updatedText = screen.getByText(/you clicked the button!/i);
  expect(updatedText).toBeInTheDocument();
});
