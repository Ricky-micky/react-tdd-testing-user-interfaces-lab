import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Erick Tembo`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself", () => {
    render(<App />);

    const image = screen.getByAltText("Profile image");

    expect(image).toHaveAttribute("src", "blob:https://web.whatsapp.com/ec4c4687-eb9a-4644-a3a8-1ad508174344");
  });

test("displays second-level heading with the text About Me", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });

    expect(secondLevelHeading).toBeInTheDocument();
  });

  test("displays a paragraph for your biography", () => {
    render(<App />);

    const bio = screen.getByText(/Presently/i);

    expect(bio).toBeInTheDocument();
  });

  test("displays the correct links", () => {
    render(<App />);

    const githubLink = screen.getByRole("link", {
      name: /Github Link/i,
    });


    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com/Ricky-micky")
    );


  });