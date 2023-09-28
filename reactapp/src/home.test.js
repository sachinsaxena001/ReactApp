import App from "./App";
import { render, screen } from "@testing-library/react";



test("renders Home Component", () => {
    render(<App/>);
    expect(screen.getByText("Create")).toBeInTheDocument();
    
  });