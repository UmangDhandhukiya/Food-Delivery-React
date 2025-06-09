import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

//we can also wrap all test in discribe which take two parameter one is string and anotheer is callBack function
//in test case also replace it with test

describe("Test case for Contact us page", () => {
  it("should check heading is there in contact or not", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument;
  });

  it("should check textboxes is there in contact or not", () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole("textbox");
    //Assertion
    expect(textboxes.length).toBe(2);
  });

  test("should check button is there in contact or not", () => {
    render(<Contact />);
    const button = screen.getAllByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument;
  });
});
