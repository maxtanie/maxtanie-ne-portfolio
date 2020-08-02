import React from "react";

const Design = ({ img, txt, isDisplayed }) => {
  if (!isDisplayed) return null;
  return (
    <div>
      <img src={img} alt="design" className="hobbies-img" />
      <div className="time-to-read-hobbies left">
        <i className="far fa-clock yellow"></i>
        <span className="yellow"> 2 minutes de lecture</span>
      </div>
      <article className="block-txt-about-me left">
        <p className="txt-hobbies-content">
          Ma passion pour le design est selon moi récente, à moins que j'ai
          toujours eu cette passion sans forcément m'en rendre compte ? telle
          est la question. Cependant cela est une chose cruxiale car le design
          est absolument partout, de notre verre d'eau jusqu'à nos vêtements il
          est absolument partout et on ne peut y échapper.
        </p>
        <p className="txt-hobbies-content">
          Malgré que les verres et les habits soient très beaux je prefère tout
          de même effectuer du design pour le web. Autrefois je pensais que le
          design était seulement lié à l'esthétique, c'était une pensée qui
          était erronée car plus j'approfondie mes connaissances, mieux je
          comprends que la première étape du design s'effectue avant tout par le
          design thinking communément appellé UX Design pour l'univers du web
          qui ets un cheminement de stratégies et de réflexions bien pensées
          afin d'offrir aux utilisateurs de notre produit une ergonomie sans
          faille et pratique.
        </p>

        <p className="txt-hobbies-content">
          Supposons que nous sommes en train de boire un bon verre d'eau après
          un footing et à chaque gorgé l'eau fuit à cause d'une fuite du verre,
          pas pratique n'est-ce pas ? C'est pour cela, mon objectif est d'offrir
          une ergonomie fluide, présice, pratique que cela soit du côté
          expérience utilisateur au user interface avec une interface plaisante
          et agréable visuellement car l'UX et l'UI doivent se compléter dans le
          but d'offrir un site web ou un produit qui frole l'excellence, afin
          que l'utilisateur puisse s'épanouir sur notre site web.
        </p>

        <p className="txt-hobbies-content">
          Ainsi j'essaye d'approfondir constamment mes connaissances dans le
          design en utilisant divers logiciels tels que Adobe XD et Photoshop
          dans le but de ne pas perdre le fil dans cet univers qui change sans
          cesse. Mais avant tout de m'inspirer des meilleurs dans ce domaine car
          il y a vraiment beaucoup de talents sur Pinterest
        </p>
      </article>
    </div>
  );
};

export default Design;
