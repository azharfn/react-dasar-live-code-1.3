import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Card from "./Card";

describe("App", () => {
    it("should render the Card component as direct children", async () => {
        const { container } = render(<App />);
        await waitFor(() => screen.findByText("Levi Ackermann"));
        expect(container.querySelectorAll("character-card")).toBeTruthy();
    });
});

describe("Card", () => {
    it("should render image with 'src' from the 'imageUrl' and 'alt' from the 'name'", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
                    name: "Levi Ackermann",
                    residence: "Wall Rose",
                    rank: "Squad Captain",
                    affiliation: "Scout Regiment",
                }}
            />
        );
        let image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            "src",
            "https://cdn.myanimelist.net/images/characters/2/241413.jpg"
        );
        expect(image).toHaveAttribute("alt", "Levi Ackermann");
    });

    it("should render residence name from the 'residence' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
                    name: "Levi Ackermann",
                    residence: "Wall Rose",
                    rank: "Squad Captain",
                    affiliation: "Scout Regiment",
                }}
            />
        );
        expect(screen.getByText(/Wall Rose/)).toBeInTheDocument();
    });

    it("should render name from the 'name' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
                    name: "Levi Ackermann",
                    residence: "Wall Rose",
                    rank: "Squad Captain",
                    affiliation: "Scout Regiment",
                }}
            />
        );
        expect(screen.getByText(/Levi Ackermann/)).toBeInTheDocument();
    });

    it("should render affiliation name from the 'affiliation' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
                    name: "Levi Ackermann",
                    residence: "Wall Rose",
                    rank: "Squad Captain",
                    affiliation: "Scout Regiment",
                }}
            />
        );
        expect(screen.getByText(/Scout Regiment/)).toBeInTheDocument();
    });

    it("should render rank from the 'rank' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
                    name: "Levi Ackermann",
                    residence: "Wall Rose",
                    rank: "Squad Captain",
                    affiliation: "Scout Regiment",
                }}
            />
        );
        expect(screen.getByText(/Squad Captain/)).toBeInTheDocument();
    });
});
