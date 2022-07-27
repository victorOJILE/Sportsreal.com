import GameList from "./GameList";
import { useState } from "react";
const Games = () => {
    let state = {
        England: {
            name: 'English Premier League',
            img: "logo2.png",
            game: [{
                home: "Manchester United", 
                away: "Chelsea",
                time: "21:00",
            },{
                home: "Liverpool", 
                away: "West Ham United",
                time: "22:00",
            },{
                home: "Everton", 
                away: "Tottenham Hotspur",
                time: "23:00",
            },{
                home: "West ham United", 
                away: "Wolves",
                time: "23:00",
            },{
                home: "Leicester United", 
                away: "Aston Villa",
                time: "23:00",
            },{
                home: "Newcastle United", 
                away: "Brentford",
                time: "23:00",
            },{
                home: "Brigton", 
                away: "Leeds United",
                time: "23:00",
            },{
                home: "Watford", 
                away: "Crystal Palace",
                time: "23:00",
            },{
                home: "Norwich", 
                away: "Southampthon",
                time: "23:00",
            }
        ]},
        Spain: {
            name: 'La Liga',
            img: "logo3.png",
            game: [{
                home: "Athletico Madrid", 
                away: "Real Sociedad",
                time: "18:00",
            },{
                home: "Villareal", 
                away: "Barcelona",
                time: "19:00",
            },{
                home: "Real Madrid", 
                away: "Celta Vigo",
                time: "16:00",
            },{
                home: 'Alaves',
                away: 'Athletic Club',
                time: '19:00',
            },{
                home: 'Cadiz',
                away: 'Elche',
                time: '20:00',
            },{
                home: 'Espanyol',
                away: 'Getafe',
                time: '20:00',
            },{
                home: "Levante", 
                away: "Mallorca",
                time: "20:00",
            }, {
                home: "Granada CF", 
                away: "Osasuna",
                time: "20:00",
            },{
                home: "Rayo Vellecano", 
                away: "Real Betis",
                time: "20:00",
            },{
                home: "Sevilla", 
                away: "Valencia FC",
                time: "20:00",
            }
        ]},
        Germany: {
            name: 'Bundesliga',
            img: "logo7.png",
            game: [{
                home: "Bayern Munchen", 
                away: "Bayer Leverkusen",
                time: "18:00",
            }, {
               home: "Borussia Dortmund",
               away: "Volkswagen",
               time: "18:00",
            }, {
                home: "Red Bull Salzburg", 
                away: "Deutsche",
                time: "18:00",
            }, {
                home: "Leipzig", 
                away: "Borussia Monchengladbach",
                time: "18:00",
            }, {
                home: "Augsburg", 
                away: "Hertha BSC",
                time: "18:00",
            }, {
                home: "Union Berlin", 
                away: "VFL Bochum",
                time: "18:00",
            }, {
                home: "Arminia Bielefeld", 
                away: "Borussia Monchengladbach",
                time: "18:00",
            },{
                home: "Eintracht Frankfurt", 
                away: "Freiburg",
                time: "18:00",
            }, {
                home: "Hamburger", 
                away: "Schalke 04",
                time: "18:00",
            }, {
                home: "Stuttgart", 
                away: "Numberg",
                time: "18:00",
            }
        ]}
    };
    const [games, setGames] = useState(state);
    return (
        <section className="game-div" aria-label="Games section">
        {/* <div class="error-div">
                    <h1>Error loading the content of this page</h1>
                    <p>Please enable javascript to render this page. <br /><br />
                        This may also be due to slow internet connection. You can wait for some time or try reloading the page.</p>
                </div> */}
        
        <GameList state={games} />
        </section>
    );
};

export default Games;
