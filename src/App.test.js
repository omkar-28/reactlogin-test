import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/This is React Testing Tutorial/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("render child component in the document",()=>{
    const component = render(<App />)
    const childElement = component.getByLabelText("Email")
    expect(childElement).toBeInTheDocument()
  })
});
