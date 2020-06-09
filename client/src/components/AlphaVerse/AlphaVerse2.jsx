import React, { Component } from "react";
import "./AlphaVerse.scss";
import data from "../../alpha.json";
import BoxVerse from "./BoxVerse";

export default class AlphaVerse extends Component {
  state = {
    data: data.alpha,

    chosen: [],
    randomArray: [
      {
        array: [
          {
            id: 1,
            arrayVerse: "Aie pitié de moi Eternel car je suis sans force !",
            verseArray: "Psaumes 6 : 3",
            letter: "A"
          }
        ]
      },
      {
        array: [
          {
            id: 2,
            arrayVerse:
              "Bénis Dieu car avec lui nous ferons des exploits. Il écrasera nos ennemis .",
            verseArray: "Psaumes 60 : 14",
            letter: "B"
          }
        ]
      }
    ],
    letter: "",
    verse: "",
    arrayVerse: ""
  };

  // infs = () => {
  //   const arrayAlph = this.state.data.map((elem, index) => {
  //     const chosen = elem.chosenVerse;
  //     return chosen;
  //   });
  // };

  handleClick = event => {
    const ids = parseInt(event.target.id);

    return this.state.randomArray.map(arr => {
      arr.array.map(vals => {
        if (ids === vals.id) {
          return (
            <BoxVerse
              id={vals.id}
              key={vals.id}
              letter={this.setState({ letter: vals.letter })}
              verse={this.setState({ verse: vals.verseArray })}
              chosenVerse={this.setState({ arrayVerse: vals.arrayVerse })}
            />
          );
        }
      });
    });
  };

  render() {
    const { data, letter, verse, chosenVerse, arrayVerse } = this.state;

    // // const getRandom = () =>
    //   `${
    //     elem.arrayVerse[Math.floor(Math.random() * elem.arrayVerse.length)]
    //   }${
    //     elem.verseArray[Math.floor(Math.random() * elem.verseArray.length)]
    //   }`;

    const defaultVerse = data.map((elem, index) => {
      const n = 2;
      if (elem.id === n) {
        return (
          <BoxVerse
            id={elem.id}
            key={index}
            letter={letter}
            verse={verse}
            chosenVerse={arrayVerse}
            onClick={e => this.handleClick(e)}
          />
        );
      } else {
        return (
          <BoxVerse
            id={elem.id}
            key={index}
            letter={elem.letter}
            verse={elem.verse}
            chosenVerse={elem.arrayVerse}
            onClick={e => this.handleClick(e)}
          />
        );
      }
    });

    console.log(letter, arrayVerse, verse);
    return <section className="verse-block">{defaultVerse}</section>;
  }
}

import React, { Component } from "react";
import "./AlphaVerse.scss";
import data from "../../alpha.json";
import BoxVerse from "./BoxVerse";

// Default array who will output the default info verse
const arr = [
  {
    name: "Je suis le chemin la vérité et la vie.",
    id: 1,
    letter: "A",
    verse: "Psaumes 35:1"
  },
  { name: "Je suis le pain de vie.", id: 2, letter: "B", verse: "Psaumes 15:5" }
];

const newArr = [
  {
    name: "Tu es la lumière de ma vie",
    id: 1,
    letter: "A",
    verse: "Psaumes 1:5"
  },
  {
    name: "Tu es la source d'eau vive",
    id: 2,
    letter: "B",
    verse: "Psaumes 2:4"
  }
];

const v = arr.map(el => {
  return `${el.name}`;
});

const y = newArr.map(el => {
  return `${el.name}`;
});
const j = newArr.map(el => {
  return `${el.letter}`;
});
const p = newArr.map(el => {
  return `${el.verse}`;
});

const i = newArr.map(el => {
  return `${el.id}`;
});

let l = "";

export default class AlphaVerse extends Component {
  state = {
    defaultVerse: arr,
    id: i,
    name: v,
    letter: j,
    verset: p
  };

  handleChange(e) {
    const i = parseInt(e.target.id);
    const x = v;
    const t = y;

    return arr.map((el, idx) => {
      l = y;
      if (i === el.id) {
        this.setState({
          name: l
        });
      }
    });
  }

  render() {
    const { defaultVerse, letter, name, verset, id } = this.state;
    const block = defaultVerse.map((verse, index) => {
      return (
        <BoxVerse
          id={verse.id}
          letter={letter[index]}
          verse={verset[index]}
          chosenVerse={name[index]}
          onClick={e => this.handleChange(e)}
        ></BoxVerse>
      );
    });

    const j = defaultVerse.map((verse, index) => {
      if (verse.id === 2) {
        return block[index];
      } else {
        return (
          <BoxVerse
            id={verse.id}
            letter={verse.letter}
            verse={verse.verse}
            chosenVerse={verse.name}
            onClick={e => this.handleChange(e)}
          ></BoxVerse>
        );
      }
    });

    return (
      <section className="verse-block">
        <h2>Verse</h2>
        {j}
        <div id="inf"></div>
      </section>
    );
  }
}
import React, { Component } from "react";
import "./AlphaVerse.scss";
import BoxVerse from "./BoxVerse";

export default class AlphaVerse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verseArr: [
        {
          id: 1,
          letter: "A",
          verse: "Psaume 15:3",
          name: "Je suis le chemin la vérité et la vie.",

          arrTab: [
            {
              id: 1,
              letter: "A",
              verse: "Psaume 5:3",
              name: "Name verse 1"
            },
            {
              id: 1,
              letter: "A",
              verse: "Psaume 15:3",
              name: "Name verse 2"
            }
          ]
        },
        {
          id: 2,
          letter: "B",
          verse: "Psaume 5:4",
          name: "Mon père et moi nous sommes un.",
          arrTab: [
            {
              id: 2,
              letter: "B",
              verse: "Psaume 1:30",
              name: "Name verse 1"
            },
            {
              id: 2,
              letter: "B",
              verse: "Psaume 5:8",
              name: "Name verse 2"
            },
            {
              id: 2,
              letter: "B",
              verse: "Psaume 2:30",
              name: "Name verse 3"
            },
            {
              id: 2,
              letter: "B",
              verse: "Psaume 45:8",
              name: "Name verse 4"
            }
          ]
        }
      ],
      letter: "",
      verse: "",
      name: ""
    };
  }

  handleRand = e => {
    const { verseArr } = this.state;
    const i = parseInt(e.target.id);
    let v = verseArr.map(elem => {
      return elem.arrTab.map(el => {
        return `
        <div className="block-verse">
        <div className="flex-verse">
          <div className="letter">${el.letter}</div>
          <div className="verse">${el.verse}</div>
        </div>
        <div className="block-quotation-verse" id=${el.id}>
          <q> ${el.name} </q>
        </div>
      </div>

        `;
      });
    });

    const getRandom = () =>
      `${v[i - 1][Math.floor(Math.random() * v[i - 1].length)]}`;

    return (document.getElementById("elem").innerHTML = getRandom());
  };
  render() {
    let { verseArr } = this.state;

    const block = verseArr.map((v, i) => {
      return (
        <BoxVerse
          id={i + 1}
          letter={v.letter}
          verse={v.verse}
          chosenVerse={v.name}
          onClick={e => this.handleRand(e)}
        ></BoxVerse>
      );
    });

    return (
      <section className="verse-block">
        <h1>My bible verse</h1>
        {block}
        <div id="elem"></div>
      </section>
    );
  }
}


import React, { Component } from "react";

// OUR API WITH ALL THEIR QUOTES
const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export default class AlphaVerse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // quotesVals: [
      //   { verseA: null, verseARandom: null },
      //   { verseB: null, verseBRandom: null },
      //   { verseC: null, verseCRandom: null },
      //   { verseD: null, verseDRandom: null },
      //   { verseE: null, verseERandom: null },
      //   { verseF: null, verseFRandom: null },
      //   { verseG: null, verseGRandom: null },
      //   { verseH: null, verseHRandom: null },
      //   { verseI: null, verseIRandom: null },
      //   { verseJ: null, verseJRandom: null },
      //   { verseK: null, verseKRandom: null },
      //   { verseL: null, verseLRandom: null },
      //   { verseM: null, verseMRandom: null },
      //   { verseN: null, verseNRandom: null },
      //   { verseO: null, verseORandom: null },
      //   { verseP: null, versePRandom: null },
      //   { verseQ: null, verseQRandom: null },
      //   { verseR: null, verseRRandom: null },
      //   { verseS: null, verseSRandom: null },
      //   { verseT: null, verseTRandom: null },
      //   { verseU: null, verseURandom: null },
      //   { verseV: null, verseVRandom: null },
      //   { verseW: null, verseWRandom: null },
      //   { verseX: null, verseXRandom: null },
      //   { verseY: null, verseYRandom: null },
      //   { verseZ: null, verseZRandom: null }
      // ],
      quotes: null,
      defaultQuotes: "",
      defaultQuotesTwo: "",
      randomQuote: true,

      quotes2: null,
      randomQuote2: null
    };
  }

  // GET ALL THE VALUE OF THE API
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let dataQuotesTwo = data.quotes;

        let randNumb = Math.floor(Math.random() * dataQuotes.length);
        let randNumbTwo = Math.floor(Math.random() * dataQuotesTwo.length);

        let randomQuote = dataQuotes[randNumb];
        let randomQuoteTwo = dataQuotes[randNumbTwo];
        this.setState({
          quotes: data.quotes,
          quotes2: data.quotes,
          defaultQuotesOne: randomQuote,
          defaultQuotesTwo: randomQuoteTwo
        });
      });
  }

  randomQuoteHandlerOne = () => {
    const randNumb = Math.floor(Math.random() * this.state.quotes.length); // OUTPUT 102 THE LENGTH OF OUR API QUOTES

    //GET OUR QUOTES WHO ARE NOW RANDOM
    const randomQuote = this.state.quotes[randNumb];

    this.setState({
      randomQuote: randomQuote
    });
  };

  randomQuoteHandlerTwo = () => {
    const randNumb2 = Math.floor(Math.random() * this.state.quotes.length); // OUTPUT 102 THE LENGTH OF OUR API QUOTES

    //GET OUR QUOTES WHO ARE NOW RANDOM

    const randomQuote2 = this.state.quotes2[randNumb2];

    this.setState({
      randomQuote2: randomQuote2
    });
  };
  render() {
    console.log(this.state.defaultQuotesTwo);
    const BoxQuotes = ({ onClick, quotes, authors }) => {
      return (
        <div>
          <p>{quotes}</p>
          <span>
            <b>{authors}</b>
            <br />
          </span>
          <br />
          <button onClick={onClick}>Random Quotes</button>
        </div>
      );
    };

    return (
      <section>
        <BoxQuotes
          onClick={this.randomQuoteHandlerOne}
          quotes={
            this.state.randomQuote !== null && this.state.randomQuote.quote
          }
          authors={
            this.state.randomQuote !== null && this.state.randomQuote.author
          }
        ></BoxQuotes>
        <BoxQuotes
          onClick={this.randomQuoteHandlerTwo}
          quotes={
            this.state.randomQuote2 !== null && this.state.randomQuote2.quote
          }
          authors={
            this.state.randomQuote2 !== null && this.state.randomQuote2.author
          }
        ></BoxQuotes>
      </section>
    );
  }
}

