import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("should render correctly", () => {
  test("should render ul", async () => {
    render(<Users />);
    const ulElement = await screen.findByRole('list');
    expect(ulElement).toBeInTheDocument();
  });
 
});

