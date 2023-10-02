import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("should render correctly", () => {
  test("should render ul", async () => {
    render(<Users />);
    const ulElement = await screen.findByRole('list');
    expect(ulElement).toBeInTheDocument();
  });
  test('should a list of users', async () => { 
    render(<Users />);
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3);
   })
 
});

