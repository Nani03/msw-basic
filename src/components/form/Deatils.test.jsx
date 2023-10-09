import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Details from "./Details";

test("should display submitted text after form submission", async () => {
  render(<Details />);
  
  // Fill in form data
  userEvent.type(screen.getByTestId('name'), {
    target: { value: "John Doe" },
  });
  
  userEvent.type(screen.getByTestId('email'), {
    target: { value: "john@example.com" },
  });
  
  // Submit form
 userEvent.click(screen.getByRole("button", { name: "Submit" }));

  // Assert that submitted text is displayed
  await waitFor(() => {
    const submittedText = screen.getByRole('heading', {
        name: "Submitted"
      })
      expect(submittedText).toBeInTheDocument();
  })
  
});