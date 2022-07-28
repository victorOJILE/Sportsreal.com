let otherNews = {
    "authors": "['Ojile Victor', 'Olanrewaju Efuwape', 'Idris Alaba']",
    "category": "['Premier League', 'La Liga', 'BundesLiga', 'Serie A']",
    "previousNews": [{ imgsrc: '../Ronaldo.PNG', 
        asrc: '#', 
        ainnerText: 'Mercedes will not pursue appeal against F1 title-deciding Abu Dhabi result',
        date: 'Saturday, 7 April 2021' },
        { imgsrc: '../Lionel_messi.jpg', 
        asrc: '#', 
        ainnerText: 'Snowfall box set: Hard-hitting drama on the epidemic that hit 1980s Los Angeles.',
        date: 'Saturday, 7 April 2021' },
        { imgsrc: '../skysports-chelsea.jpg', 
        asrc: 'http://localhost:3000', 
        ainnerText: 'Arsenal beats 10 - man West Ham to replace them in top four',
        date: 'Saturday, 7 April 2021' },
        { imgsrc: '../skysports-chelsea.jpg', 
        asrc: 'http://localhost:3000', 
        ainnerText: 'Arsenal beats 10 - man West Ham to replace them in top four',
        date: 'Saturday, 7 April 2021' }
	],
    "previousSponsored": [{imgsrc: '../Lione_messi.jpg', ahref: '#', ainnerText: 'Mercedes will not pursue appeal against F1 title-deciding Abu Dhabi result'}, 
        {imgsrc: '../Coach.PNG', ahref: '#', ainnerText: 'Mercedes will not pursue appeal against F1 title-deciding Abu Dhabi result'},
        {imgsrc: '../Lionel_messi.jpg', ahref: '#', ainnerText: 'Mercedes will not pursue appeal against F1 title-deciding Abu Dhabi result'}
    ]
}
exports.otherNews = JSON.stringify(otherNews);
let users = {
    "John mercy": {
        id: 452625,
        role: "user",
        email: "johnmercy@gmail.com"
    },
    "Ojile victor": {
        id: 1,
        role: "Admin",
        email: "ojilevictor11@gmail.com"
    },
    "Ojile Daniel": {
        id: 12,
        role: "Publisher",
        email: "ojiledaniel@gmail.com"
    }
}
exports.otherNews = JSON.stringify(users);