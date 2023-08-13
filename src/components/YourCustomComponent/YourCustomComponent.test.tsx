import { render } from "@testing-library/react";

import YourCustomComponent from "./YourCustomComponent";

describe("YourCustomComponent", () => {
  test("renders the Button component", () => {
    render(<YourCustomComponent label='Hello world!' />);
  });
});
