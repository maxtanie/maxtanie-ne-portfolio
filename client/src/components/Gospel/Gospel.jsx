import React from "react";

const Gospel = ({ urlVideo, txt }) => {
  return (
    <div>
      <iframe
        width="500"
        height="300"
        src={urlVideo}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="time-to-read left">
        <i className="far fa-clock yellow"></i>
        <span className="yellow"> 1 minute 20 de lecture</span>
      </div>
      <article className="block-txt-about-me left">
        <p className="txt-hobbies-content">
          Enfant j'étais déjà attirée par la musique, je m'en rappelle qu'à
          l'âge de deux ans, je chantais dans les radios des chansons
          enfantines, à l'époque où j'étais encore dans mon pays de naissance,
          Haïti, nommé également Haïti chéri pour les intimes. Ainsi la chanson
          est ancrée en moi, j'ai toujours été une grande melomane appréciant
          autrefois tous genres de musique cependant ce n'est plus vraiment le
          cas actuellement à la suite d'une grande révélation spirituelle et
          d'un changement de vie.{" "}
        </p>
        <p className="txt-hobbies-content">
          Néanmoins je sais toujours reconnaître le talent. Actuellement je suis
          davantage focalisée sur le Gospel qui me permet d'être en harmonie
          parfaite avec ma spiritualité et de me performer avec ses divers
          chantres du corps de Christ qui me permettent de monter dans les
          hauteurs spirituelles en esprit.
        </p>

        <p className="txt-hobbies-content">
          Je n'ai pas non plus perdu ma passion pour le fait de chanter car cela
          me permet de m'évader et de travailler ma tonalité, ainsi que ma voix
          et cela de manière individuelle et collective, dans mon église où je
          suis chantre. La chanson est vraiment un diamant qui adoucit les
          coeurs. Je pense qu'un monde sans musique serait bien triste, voilà
          pourquoi, je considère que la musique est plus profonde et intense que
          ce que l'on pense car derrière chaque chansons se cache une adoration
          à l'individu auquel elle est destinée.
        </p>
      </article>
    </div>
  );
};

export default Gospel;
