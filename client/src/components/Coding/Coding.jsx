import React from "react";

const Coding = ({ img, txt }) => {
  return (
    <div>
      <img src={img} alt="" className="hobbies-img" />
      <div className="time-to-read left">
        <i className="far fa-clock yellow"></i>
        <span className="yellow"> 2 minutes de lecture</span>
      </div>
      <article className="block-txt-about-me left">
        <p className="txt-hobbies-content">
          J'ai eu la chance de découvrir l'univers de la programmation pendant
          que j'étais au lycée, plus précisément en terminale. Etant curieuse je
          m'étais toujours interessée à l'idée de savoir comment les sites
          internet étaient crées cependant cette curiosité était seuleument
          imaginative, jusqu'au jour où je me suis enfin lancée dans le premier
          visionnage de tutoriel sur youtube sur comment créer un site internet.
        </p>
        <p className="txt-hobbies-content">
          C'est ainsi que j'ai découvert le HTML5 et le CSS3, j'ai tout de suite
          eu un grand coup de coeur. Comme tout débutant qui vient de s'initier
          dans une voie inconnue les débuts sont fragiles et maladroits,
          néanmoins j'étais fier de moi car j'avais enfin réalisée ma première
          page internet statique.
        </p>
        <p className="txt-hobbies-content">
          Après la découverte de cette nouvelle passion, j'ai continué à
          travailler dur et à peaufiner mes connaissances par la pratique et le
          visionnage de divers tutoriels sur youtube, qui était à cette époque
          mon meilleur ami et qui l'est toujours.
        </p>

        <p className="txt-hobbies-content">
          C'était décidé je voulais réellement faire de cette passion mon
          métier, c'est ainsi que j'ai débuté des études dans cette branche
          après mon Bac. Ce n'était pas forcément la direction sur laquelle je
          m'étais orienté à la suite d'une mauvaise orientation cependant un an
          après j'ai changé de direction pour réellement entâmer des études dans
          le domaine que j'aime.
        </p>

        <p className="txt-hobbies-content">
          Durant mes formations j'ai pu apprendre à aller au delà des sites
          statiques pour effectuer des sites dynamiques avec le Javascript, le
          PHP et d'autres langages encore, qui étaient comme du chinois pour
          moi. Néanmoins avec la pratique et l'approfondissement de mes études
          j'ai su m'améliorer, jusqu'à aujourd'hui où je suis capable d'être
          davantage autonome et d'apprendre des nouveaux frameworks tels que
          React ou Angular et de débloquer mes erreurs.
        </p>

        <p className="txt-hobbies-content">
          Je ne sais certes pas tout, mais avec ma détermination et ma soif
          d'apprendre je peux absolument tout car j'aime cet univers qui est
          sans limites et qui devient davantage le vecteur de notre société
          actuelle.
        </p>
      </article>
    </div>
  );
};

export default Coding;
