import React from "react";
import Card from "./Card";

const App = () => {
    const charList = [
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/10/216895.jpg",
            name: "Eren Jaeger",
            residence: "Wall Rose",
            rank: "-",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/9/215563.jpg",
            name: "Mikasa Ackermann",
            residence: "Wall Rose",
            rank: "-",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/8/220267.jpg",
            name: "Armin Arlelt",
            residence: "Wall Rose",
            rank: "Commander",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/6/251937.jpg",
            name: "Sasha Blouse",
            residence: "Wall Rose",
            rank: "-",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/9/206357.jpg",
            name: "Annie Leonhart",
            residence: "Wall Sina",
            rank: "-",
            affiliation: "Military Police Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/16/206489.jpg",
            name: "Reiner Braun",
            residence: "Liberio",
            rank: "Vice Chief",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/3/206431.jpg",
            name: "Erwin Smith",
            residence: "Wall Rose",
            rank: "Commander",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/15/208637.jpg",
            name: "Hange Zoë",
            residence: "Wall Rose",
            rank: "Commander",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/2/241413.jpg",
            name: "Levi Ackermann",
            residence: "Wall Rose",
            rank: "Squad Captain",
            affiliation: "Scout Regiment",
        },
    ];

    return (
        <>
            <div
                data-testid="app"
                style={{ maxWidth: "1040px", padding: "0 14px" }}
            >
                <h2 style={{ color: "#49515b", marginBottom: "0.2em" }}>
                    Shingeki no Kyojin
                </h2>
            </div>
            <div style={{ maxWidth: "1040px", display: "flex" }}>
                <div style={{ padding: "14px" }}>
                    <img
                        style={{ borderRadius: "4px" }}
                        src="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
                        alt="shingeki-no-kyojin"
                    />
                </div>
                <div style={{ padding: "14px" }}>
                    <section>
                        <h3 style={{ color: "#49515b", marginTop: "0" }}>
                            Synopsis
                        </h3>
                        <hr />
                        <p style={{ color: "#49515b" }}>
                            Centuries ago, mankind was slaughtered to near
                            extinction by monstrous humanoid creatures called
                            Titans, forcing humans to hide in fear behind
                            enormous concentric walls. What makes these giants
                            truly terrifying is that their taste for human flesh
                            is not born out of hunger but what appears to be out
                            of pleasure. To ensure their survival, the remnants
                            of humanity began living within defensive barriers,
                            resulting in one hundred years without a single
                            titan encounter. However, that fragile calm is soon
                            shattered when a colossal Titan manages to breach
                            the supposedly impregnable outer wall, reigniting
                            the fight for survival against the man-eating
                            abominations.
                            <br />
                            <br />
                            After witnessing a horrific personal loss at the
                            hands of the invading creatures, Eren Yeager
                            dedicates his life to their eradication by enlisting
                            into the Survey Corps, an elite military unit that
                            combats the merciless humanoids outside the
                            protection of the walls. Eren, his adopted sister
                            Mikasa Ackerman, and his childhood friend Armin
                            Arlert join the brutal war against the Titans and
                            race to discover a way of defeating them before the
                            last walls are breached.
                        </p>
                    </section>
                    <section>
                        <h3 style={{ color: "#49515b", marginTop: "0" }}>
                            Characters
                        </h3>
                        <hr />
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px 10px",
                                justifyItems: "center",
                            }}
                        >
                            {/* PANGGIL COMPONENT CARD KALIAN DISINI! */}
                            {/* TODO: answer here */}
                            {charList.map((char, index) =>(
                                <Card key={index} data={char}/>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default App;
