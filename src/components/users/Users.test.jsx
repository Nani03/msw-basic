import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("should render correctly", () => {
  test("should render ul", async () => {
    render(<Users />);
    const ulElement = await screen.findByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
  test("should a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("should render error", async () => {
    server.use(rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(500))
    }))
    render(<Users />);
    const error = await screen.findByText("Error fetching users")
    console.log(error)
    expect(error).toBeInTheDocument()

  });
});
