import GameList from "./scoreGamesList";
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
                scores: [2, 0]
            },{
                home: "Liverpool", 
                away: "West Ham United",
                time: "22:00",
                scores: [0, 0]
            },{
                home: "Everton", 
                away: "Tottenham Hotspur",
                time: "23:00",
                scores: [2, 0]
            },{
                home: "West ham United", 
                away: "Wolves",
                time: "23:00",
                scores: [2, 3]
            },{
                home: "Leicester United", 
                away: "Aston Villa",
                time: "23:00",
                scores: [2, 0]
            },{
                home: "Newcastle United", 
                away: "Brentford",
                time: "23:00",
                scores: [1, 1]
            },{
                home: "Brigton", 
                away: "Leeds United",
                time: "23:00",
                scores: [2, 0]
            },{
                home: "Watford", 
                away: "Crystal Palace",
                time: "23:00",
                scores: [2, 0]
            },{
                home: "Norwich", 
                away: "Southampthon",
                time: "23:00",
                scores: [2, 0]
            }
        ]},
        Spain: {
            name: 'La Liga',
            img: "logo3.png",
            game: [{
                home: "Athletico Madrid", 
                away: "Real Sociedad",
                time: "18:00",
                scores: [2, 0]
            },{
                home: "Villareal", 
                away: "Barcelona",
                time: "19:00",
                scores: [2, 0]
            },{
                home: "Real Madrid", 
                away: "Celta Vigo",
                time: "16:00",
                scores: [2, 0]
            },{
                home: 'Alaves',
                away: 'Athletic Club',
                time: '19:00',
                scores: [2, 0]
            },{
                home: 'Cadiz',
                away: 'Elche',
                time: '20:00',
                scores: [2, 0]
            },{
                home: 'Espanyol',
                away: 'Getafe',
                time: '20:00',
                scores: [2, 0]
            },{
                home: "Levante", 
                away: "Mallorca",
                time: "20:00",
                scores: [2, 0]
            }, {
                home: "Granada CF", 
                away: "Osasuna",
                time: "20:00",
                scores: [2, 0]
            },{
                home: "Rayo Vellecano", 
                away: "Real Betis",
                time: "20:00",
                scores: [2, 0]
            },{
                home: "Sevilla", 
                away: "Valencia FC",
                time: "20:00",
                scores: [2, 0]
            }
        ]},
        Germany: {
            name: 'Bundesliga',
            img: "logo7.png",
            game: [{
                home: "Bayern Munchen", 
                away: "Bayer Leverkusen",
                time: "18:00",
                scores: [2, 0]
            }, {
               home: "Borussia Dortmund",
               away: "Volkswagen",
               time: "18:00",
               scores: [2, 0]
            }, {
                home: "Red Bull Salzburg", 
                away: "Deutsche",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Leipzig", 
                away: "Borussia Monchengladbach",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Augsburg", 
                away: "Hertha BSC",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Union Berlin", 
                away: "VFL Bochum",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Arminia Bielefeld", 
                away: "Borussia Monchengladbach",
                time: "18:00",
                scores: [2, 0]
            },{
                home: "Eintracht Frankfurt", 
                away: "Freiburg",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Hamburger", 
                away: "Schalke 04",
                time: "18:00",
                scores: [2, 0]
            }, {
                home: "Stuttgart", 
                away: "Numberg",
                time: "18:00",
                scores: [2, 0]
            }
        ]}
    };
    const [games, setGames] = useState(state);
    
  return (
    <>
        <section className="game-div" aria-label="Games section">
        {/* <div class="error-div">
                    <h1>Error loading the content of this page</h1>
                    <p>Please enable javascript to render this page. <br /><br />
                        This may also be due to slow internet connection. You can wait for some time or try reloading the page.</p>
                </div> */}
        
        <GameList state={games} />
        </section>
      </>
  );
};

export default Games;
