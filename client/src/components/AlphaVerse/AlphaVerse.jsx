import React, { useState, useEffect } from "react";
import BoxVerse from "./BoxVerse";

// IMPORTATION OF ALL MY VERSE FROM A TO Z
import verseA from "./BibleVerseObject/verseA.json";
import verseB from "./BibleVerseObject/verseB.json";
import verseC from "./BibleVerseObject/verseC.json";

let dataVerses = [verseA, verseB, verseC];

const AlphaVerse = () => {
  //HOOKS FOR A VERSE
  const [letterA, setLetterA] = useState("");
  const [verseA, setVerseA] = useState("");
  const [nameVerseA, setNameVerseA] = useState("");

  // HOOKS FOR B VERSE
  const [letterB, setLetterB] = useState("");
  const [verseB, setVerseB] = useState("");
  const [nameVerseB, setNameVerseB] = useState("");

  // HOOKS FOR C VERSE
  const [letterC, setLetterC] = useState("");
  const [verseC, setVerseC] = useState("");
  const [nameVerseC, setNameVerseC] = useState("");

  useEffect(() => {
    getVerseA();
    getVerseB();
    getVerseC();
  }, []);

  // GET ALL THE VERSE A
  const getVerseA = () => {
    let dataVerse = dataVerses[0].verseA;
    let randomNum = Math.floor(Math.random() * dataVerse.length);
    let randomVerse = dataVerse[randomNum];

    setLetterA(randomVerse.letter);
    setVerseA(randomVerse.verse);
    setNameVerseA(randomVerse.name);
  };

  const handleChangeVerseA = () => {
    getVerseA();
  };

  // GET ALL THE VERSE B
  const getVerseB = () => {
    let dataVerse = dataVerses[1].verseB;
    let randomNum = Math.floor(Math.random() * dataVerse.length);
    let randomVerse = dataVerse[randomNum];

    setLetterB(randomVerse.letter);
    setVerseB(randomVerse.verse);
    setNameVerseB(randomVerse.name);
  };

  const handleChangeVerseB = () => {
    getVerseB();
  };

  // GET ALL THE VERSE C
  const getVerseC = () => {
    let dataVerse = dataVerses[2].verseC;
    let randomNum = Math.floor(Math.random() * dataVerse.length);
    let randomVerse = dataVerse[randomNum];

    setLetterC(randomVerse.letter);
    setVerseC(randomVerse.verse);
    setNameVerseC(randomVerse.name);
  };

  const handleChangeVerseC = () => {
    getVerseC();
  };

  const infosVerse = [
    {
      letter: letterA,
      name: nameVerseA,
      verse: verseA,
      func: handleChangeVerseA
    },
    {
      letter: letterB,
      name: nameVerseB,
      verse: verseB,
      func: handleChangeVerseB
    },
    {
      letter: letterC,
      name: nameVerseC,
      verse: verseC,
      func: handleChangeVerseC
    }
  ];

  const outputVerse = infosVerse.map((vals, index) => {
    return (
      <BoxVerse
        key={index}
        letter={vals.letter}
        chosenVerse={vals.name}
        verse={vals.verse}
        onClick={vals.func}
      ></BoxVerse>
    );
  });

  console.log(outputVerse.length);

  return <div>{outputVerse}</div>;
};

export default AlphaVerse;
