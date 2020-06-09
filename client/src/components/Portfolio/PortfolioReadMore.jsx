import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import infos from "../../object/creations.json";

import "./Creations.scss";
import Slider from "react-slick";
import CreationsPage2 from "./CreationsPages2.jsx";

let profiles = [
  {
    id: "01",
    item: "personal",
    creationName: "BibleVerse",
    itemNumber: 2,
    urlImg: "img/portfolio/personal-projects/bible-verse.png",
    alt: "Bible verse design",
    shortDescription: "A design inspired by the chapter of John 14 verse 6.",
    FullDescriptions: [
      {
        title: "The projects",
        txt:
          "Projet personnel réalisé en 2017. Création du logo, Design web et Développement du site vitrine responsive d'un restaurant / sushi bar."
      },
      {
        title: "Goals",
        txt:
          "Pour ce projet, j'ai voulu créer une identité visuelle ainsi qu'un site web pour un hypothétique restaurant car je souhaitais pratiquer un peu le design et le développement"
      },
      {
        title: "Software",
        txt: "Affinity Designer, Sublime Text 3."
      }
    ]
  },
  {
    id: "02",
    item: "personal",
    creationName: "BeYou",
    itemNumber: 2,
    urlImg: "img/portfolio/personal-projects/design-home.png",
    alt: "Homepage design",
    shortDescription: "A beautiful design of a home shop page.",
    FullDescriptions: [
      {
        title: "The projects",
        txt:
          "Uniformisation des développements par la création d'un coeur commun à tous les projets du périmètre. Le projet est conçu en responsive design avec détection de device côté serveur. Création d'un framework CSS interne. Rédaction des guidelines de développement front-end (templates de pages, blocs et strips, SASS, charte graphique à respecter, ...)"
      },
      {
        title: "Goals",
        txt:
          "Pour ces projets, j'ai du mettre en place des solutions adaptables et modulables pour faciliter l'export et l'implémentation du tronc commun sur chaque projet existant et à venir, dans le respect de la charte graphique et des contraintes imposées (notamment la compatibilité IE7 et IE8 et le responsive design)."
      },
      {
        title: "Software",
        txt: "Affinity Designer, Sublime Text 3."
      }
    ]
  },
  {
    id: "03",
    item: "personal",
    creationName: "Girlsplay",
    itemNumber: 2,
    urlImg: "img/portfolio/personal-projects/girl-play-3.png",
    alt: "Bible verse design",
    shortDescription: "A design inspired by the chapter of John 14 verse 6.",
    FullDescriptions: [
      {
        title: "The projects",
        txt:
          "Projet personnel réalisé en 2017. Création du logo, Design web et Développement du site vitrine responsive d'un restaurant / sushi bar."
      },
      {
        title: "Goals",
        txt:
          "Pour ce projet, j'ai voulu créer une identité visuelle ainsi qu'un site web pour un hypothétique restaurant car je souhaitais pratiquer un peu le design et le développement"
      },
      {
        title: "Software",
        txt: "Affinity Designer, Sublime Text 3."
      }
    ]
  },
  {
    id: "04",
    item: "logo",
    creationName: "Testify",
    itemNumber: 3,
    urlImg: "img/portfolio/logo/logo-testify.png",
    alt: "Testify logo design",
    shortDescription: "A christian Logo for my outfit for christian",
    FullDescriptions: [
      {
        title: "The projects",
        txt:
          "Uniformisation des développements par la création d'un coeur commun à tous les projets du périmètre. Le projet est conçu en responsive design avec détection de device côté serveur. Création d'un framework CSS interne. Rédaction des guidelines de développement front-end (templates de pages, blocs et strips, SASS, charte graphique à respecter, ...)"
      },
      {
        title: "Goals",
        txt:
          "Pour ces projets, j'ai du mettre en place des solutions adaptables et modulables pour faciliter l'export et l'implémentation du tronc commun sur chaque projet existant et à venir, dans le respect de la charte graphique et des contraintes imposées (notamment la compatibilité IE7 et IE8 et le responsive design)."
      },
      {
        title: "Software",
        txt: "Affinity Designer, Sublime Text 3."
      }
    ]
  }
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    };
  }

  componentDidMount() {
    const bodyId = document.getElementById("body");
    const loc = window.location.pathname;
    return loc.includes("/portfolio")
      ? (bodyId.className = "yellow-bg")
      : (bodyId.className = "yellow-bg");
  }
  componentWillUnmount() {
    document.getElementById("body").className = "yellow-bg";
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = index === 0;

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false
    });
  }

  toggleNext(e) {
    let index = this.state.index + 1;
    let disabledNext = index === this.props.profiles.length - 1;

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false
    });
  }

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    // const titleCreations = this.props.match.params.id;
    const profile = this.props.profiles ? this.props.profiles[index] : null;

    if (profile) {
      return (
        <div className="profile">
          <div>
            <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
            <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
          </div>
          <Profile {...profile} />
        </div>
      );
    } else {
      return <span>error</span>;
    }
  }
}

function Prev(props) {
  return (
    <button onClick={props.toggle} disabled={props.active}>
      Previous
    </button>
  );
}

function Next(props) {
  return (
    <button onClick={props.toggle} disabled={props.active}>
      Next
    </button>
  );
}

function Des(props) {
  return (
    <div className="block-txt">
      <h2 className="title-infos">{props.title}</h2>
      <p className="txt-infos">{props.txt}</p>
    </div>
  );
}

function Profile(props) {
  const pub = "../";
  return (
    <div>
      <CreationsPage2
        id={props.id}
        creationName={props.creationName.toUpperCase()}
        urlImg={`${pub}${props.urlImg}`}
        alt={props.alt}
        item={props.item}
      >
        {props.FullDescriptions.map(lists => {
          return <Des title={lists.title} txt={lists.txt} />;
        })}
      </CreationsPage2>
    </div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const titleCreations = this.props.match.params.id;

    const choice = infos.map(lists => {
      const lower = lists.creationName.toLowerCase();
      const pub = "../";
      const listsDes = lists.FullDescriptions.map(el => {
        return (
          <div className="block-txt">
            <h2 className="title-infos">{el.title}</h2>
            <p className="txt-infos">{el.txt}</p>
          </div>
        );
      });
      if (titleCreations === lower) {
        return (
          <React.Fragment>
            <CreationsPage2
              id={lists.id}
              creationName={lists.creationName.toUpperCase()}
              urlImg={`${pub}${lists.urlImg}`}
              alt={lists.alt}
              item={lists.item}
            >
              {listsDes}
            </CreationsPage2>
          </React.Fragment>
        );
      } else {
      }
    });

    return (
      <div>
        {choice} <Main profiles={profiles} />
      </div>
    );
  }
}
