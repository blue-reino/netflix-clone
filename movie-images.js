import screamImg from './images/scream.png';
import scream2Img from './images/scream2.png';
import avengersImg from './images/avengers.jpg';
import carsImg from './images/cars.png';
import duneImg from './images/dune.png';
import fordvferrariImg from './images/fordvferrari.png';
import interstellarImg from './images/interstellar.png';
import oppenheimerImg from './images/oppenheimer.jpg';
import transformersImg from './images/transformers.jpg';
import ffImg from './images/ff.png';
import ff0Img from './images/ff0.png';
import ff5Img from './images/ff5.png';
import ff6Img from './images/ff6.png';
import ff7Img from './images/ff7.png';
import ff8Img from './images/ff8.png';
import fftokyoImg from './images/fftokyo.png';

let streamURL = 'https://vidsrc.to/embed/movie/';

const movies = [
    {
        id: 1,
        title: "Scream",
        image: screamImg,
        videoSource: `${streamURL}tt0117571`,
        description: "A masked knife-wielding maniac is busy stalking the students of a high school, killing them off one by one.",
        misc: (
            <div>
                <button style={{ backgroundColor: 'transparent', border: '1px solid white', cursor: 'default', color: 'whitesmoke' }}> R </button> ‧ 1996 ‧ Horror/Mystery ‧ 1h 40m
            </div>
        ),
    },
    {
        id: 2,
        title: "Scream 2",
        image: scream2Img,
        videoSource: `${streamURL}tt0120082`,
        description: "Sydney and tabloid reporter Gale Weathers survived the events of the first Scream, but their nightmare isn't over. When two college students are murdered at a sneak preview of Stab, a movie based on the events from the first film, it's clear a copycat killer is on the loose.",
        misc: (
            <div>
                <button style={{ backgroundColor: 'transparent', border: '1px solid white', cursor: 'default', color: 'whitesmoke' }}> R </button> ‧ 1997 ‧ Horror/Mystery ‧ 2 hours
            </div>
        ),
    },
    {
        id: 3,
        title: "Avengers Endgame",
        image: avengersImg,
        videoSource: `${streamURL}tt4154796`,
        description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe",
        misc: (
            <div>
                <button style={{ backgroundColor: 'transparent', border: '1px solid white', cursor: 'default', color: 'whitesmoke' }}> PG-13 </button> ‧ 2019 ‧ Action/Sci-fi ‧ 3h 2m
            </div>
        ),
    },
    {
        id: 4,
        title: "Cars",
        image: carsImg,
        videoSource: `${streamURL}tt0317219`,
        description: "Description for the movie Cars",
        misc: "misc for movie",
    },
    {
        id: 5,
        title: "Dune: Part One",
        image: duneImg,
        videoSource: `${streamURL}tt1160419`,
        description: "Description for the movie Dune",
        misc: "misc for movie",
    },
    {
        id: 6,
        title: "Ford v Ferrari",
        image: fordvferrariImg,
        videoSource: `${streamURL}tt1950186`,
        description: "Description for the movie Ford v Ferrari",
        misc: "misc for movie",
    },
    {
        id: 7,
        title: "Interstellar",
        image: interstellarImg,
        videoSource: `${streamURL}tt0816692`,
        description: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.",
        misc: (
            <div>
                <button style={{ backgroundColor: 'transparent', border: '1px solid white', cursor: 'default', color: 'whitesmoke' }}> PG-13 </button> ‧ 2014 ‧ Sci-fi/Adventure ‧ 2h 49m
            </div>
        ),
    },
    {
        id: 8,
        title: "Oppenheimer",
        image: oppenheimerImg,
        videoSource: `${streamURL}tt15398776`,
        description: "Description for the movie Oppenheimer",
        misc: "misc for movie",
    },
    {
        id: 9,
        title: "Transformers",
        image: transformersImg,
        videoSource: `${streamURL}tt0418279`,
        description: "Description for the movie Transformers",
        misc: "misc for movie",
    },
    {
        id: 10,
        title: "Fast & Furious",
        image: ffImg,
        videoSource: `${streamURL}tt1013752`,
        description: "Description for the movie Fast & Furious",
        misc: "misc for movie",
    },
    {
        id: 11,
        title: "The Fast and The Furious: The Original",
        image: ff0Img,
        videoSource: `${streamURL}tt0232500`,
        description: "Description for the movie Fast & Furious 0",
        misc: "misc for movie",
    },
    {
        id: 12,
        title: "Fast 5",
        image: ff5Img,
        videoSource: `${streamURL}tt1596343`,
        description: "Description for the movie Fast & Furious 5",
        misc: "misc for movie",
    },
    {
        id: 13,
        title: "Fast & Furious 6",
        image: ff6Img,
        videoSource: `${streamURL}tt1905041`,
        description: "Description for the movie Fast & Furious 6",
        misc: "misc for movie",
    },
    {
        id: 14,
        title: "Furious 7",
        image: ff7Img,
        videoSource: `${streamURL}tt2820852`,
        description: "Description for the movie Fast & Furious 7",
        misc: "misc for movie",
    },
    {
        id: 15,
        title: "The Fate of the Furious",
        image: ff8Img,
        videoSource: `${streamURL}tt4630562`,
        description: "Description for the movie Fast & Furious 8",
        misc: "misc for movie",
    },
    {
        id: 16,
        title: "Fast & Furious: Tokyo Drift",
        image: fftokyoImg,
        videoSource: `${streamURL}tt0463985`,
        description: "Description for the movie Fast & Furious: Tokyo Drift",
        misc: "misc for movie",
    },
];

export default movies;
