import React from "react";
import {
  render,
  screen,
  waitForDomChange,
  fireEvent
} from "@testing-library/react";
import { App } from "../App";

test("app correctly fetches and displays the products", async () => {
  render(<App />);
  // wait for elements to be displayed
  await waitForDomChange();
  // check number of products
  expect(screen.getAllByTestId("product")).toHaveLength(4);
});

test("app correctly filters items", async () => {
  render(<App />);
  // wait for elements to be displayed
  await waitForDomChange();
  // simulate click on 'red'
  fireEvent.click(screen.getByText(/Filter by colour/i), {
    button: 1
  });
  fireEvent.click(screen.getByText("Red"), {
    button: 1
  });
  // check number of items
  expect(screen.getAllByTestId("product")).toHaveLength(1);
});

test("app correctly handles total price ", async () => {
    render(<App />);
    const total = screen.getByTestId("total");
    // wait for elements to be displayed
    await waitForDomChange();

    // click on - doesn't affect total
    fireEvent.click(screen.getAllByText("-")[0], { button: 1 });
    expect(total.textContent).toBe('£0');

    // click on + increases total
    fireEvent.click(screen.getAllByText("+")[0], { button: 1 });
    expect(total.textContent).not.toBe('£0');

    // simulate click on 'red'
    fireEvent.click(screen.getByText(/Filter by colour/i), { button: 1 });
    fireEvent.click(screen.getByText("Red"), { button: 1 });

    // total is reset after filtering for another product
    expect(total.textContent).toBe('£0');
  });
  
  