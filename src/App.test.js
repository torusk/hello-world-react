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

// 新規追加: クリック回数のテストケース
test("increments click count", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /click me/i });
  await userEvent.click(button);
  // 新規追加: クリック回数が1になっていることを確認
  const countText = screen.getByText(/クリック回数: 1/i);
  expect(countText).toBeInTheDocument();
});
