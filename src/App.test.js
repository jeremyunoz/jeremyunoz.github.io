import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";

test("renders hero content", () => {
   render(
      <HashRouter>
         <App />
      </HashRouter>
   );
   const contactText = screen.getByText(/Based in Irvine, CA/i);
   expect(contactText).toBeInTheDocument();
});
