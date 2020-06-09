// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import infos from "../../object/creations.json";

// import "./Creations.scss";
// import Slider from "react-slick";
// import CreationsPage2 from "./CreationsPages2.jsx";

// let url = "",
//   loc = "",
//   his = "",
//   profiles = "",
//   x = 0;

// profiles = infos;

// class Main extends Component {
//   state = {
//     url: "",
//     loc: "",
//     his: "",
//     selected: "",
//     index: x,
//     disabledNext: false,
//     disabledPrev: false
//   };

//   componentDidMount() {
//     const maxNu = profiles.length;
//     if (this.state.index.length >= maxNu) {
//       this.setState({
//         index: x + 1
//       });
//     } else {
//       this.setState({
//         index: x - 1
//       });
//     }
//   }

//   togglePrev(e) {
//     let index = this.state.index - 1;
//     let disabledPrev = index === 0;
//     this.setState({
//       index: index,
//       disabledPrev: disabledPrev,
//       disabledNext: false
//     });
//   }

//   toggleNext(e) {
//     let index = this.state.index + 1;
//     let disabledNext = index === this.props.profiles.length - 1;

//     this.setState({
//       index: index,
//       disabledNext: disabledNext,
//       disabledPrev: false
//     });
//   }

//   getUrl = e => {
//     this.setState({
//       url: this.state.url,
//       url: ""
//     });
//   };

//   render() {
//     url = this.state;
//     url = this.props.urls;

//     loc = this.state;
//     loc = this.props.loc;

//     his = this.state;
//     his = this.props.his;

//     console.log(this.state);

//     let { index, disabledNext, disabledPrev } = this.state;
//     // const titleCreations = this.props.match.params.id;
//     const v = profiles.map(list => {
//       const num = loc.includes(list.creationName.toLowerCase()) + " " + list.id;
//       return num;
//     });
//     const m = [];

//     let y = v.map((list, index) => {
//       const l = list.split("");
//       if (list.includes("true")) {
//         m.push(list);
//       }
//     });

//     const c = m.map(el => {
//       let m = el[5];
//       return (x = parseInt(m));
//     });

//     if (index >= profiles.length) {
//       index = 0;
//     }

//     const profile = this.props.profiles ? this.props.profiles[index] : null;

//     // let z = ["e", 3];
//     // const l = z.filter(Number);
//     // alert(l);

//     // var numbers = y.filter(numbersOnly);
//     // console.log(numbers);

//     // function numbersOnly(value) {
//     //   if (typeof value === "number") {
//     //     return value;
//     //   }
//     // }

//     if (profile) {
//       return (
//         <div className="profile">
//           <div className="container-arrow top">
//             <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
//             <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
//           </div>
//           <Profile {...profile} />
//           <div className="container-arrow bottom">
//             <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
//             <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// // Function prev with onclick and disabled event with props inside
// function Prev(props) {
//   return (
//     <button
//       onClick={props.toggle}
//       disabled={props.active}
//       className="arrow-btn left"
//     >
//       &larr; Previous project
//     </button>
//   );
// }

// // Function next with onclick and disabled event with props inside
// function Next(props) {
//   return (
//     <button
//       onClick={props.toggle}
//       disabled={props.active}
//       className="arrow-btn right"
//     >
//       Next project &rarr;
//     </button>
//   );
// }

// function Des(props) {
//   return (
//     <div className="block-txt">
//       <h2 className="title-infos">{props.title}</h2>
//       <p className="txt-infos">{props.txt}</p>
//     </div>
//   );
// }

// function Profile(props) {
//   const pub = "../";
//   let crName = props.creationName.toLowerCase();
//   console.log("Profiles", profiles.length);
//   console.log("url", url, "cName", crName);
//   const infos = () => {
//     return (
//       <div>
//         <CreationsPage2
//           id={props.id}
//           projLength={profiles.length}
//           creationName={props.creationName.toUpperCase()}
//           urlImg={`${pub}${props.urlImg}`}
//           alt={props.alt}
//           item={props.item}
//         >
//           {props.FullDescriptions.map(lists => {
//             return <Des title={lists.title} txt={lists.txt} />;
//           })}
//         </CreationsPage2>
//       </div>
//     );
//   };

//   if (url === crName) {
//     return infos();
//   } else {
//     return <div>{his.push(`/portfolio/${crName}`)}</div>;
//   }
// }

// export default class More extends Component {
//   render() {
//     const titleCreations = this.props.match.params.id;
//     const locationName = this.props.location.pathname;
//     const histor = this.props.history;
//     return (
//       <div>
//         <Main
//           profiles={profiles}
//           urls={titleCreations}
//           loc={locationName}
//           his={histor}
//         />
//       </div>
//     );
//   }
// }

// New update

// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import infos from "../../object/creations.json";

// import "./Creations.scss";
// import Slider from "react-slick";
// import CreationsPage2 from "./CreationsPages2.jsx";

// let url = "",
//   loc = "",
//   his = "",
//   profiles = {},
//   nums = 0;

// profiles = infos;

// class Main extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       url: "",
//       loc: "",
//       his: "",
//       selected: "",
//       index: nums,
//       disabledNext: false,
//       disabledPrev: false
//     };
//   }

//   componentDidMount() {
//     const maxNu = profiles.length;
//     const k = profiles.map(list => {
//       let v = loc.includes(list.creationName.toLowerCase()) + " " + list.id;
//       if (v.includes("true" || "false")) {
//         const z = v.substr(5);
//         nums = parseInt(z);
//         return nums;
//       } else {
//         return nums;
//       }
//     });

//     if (this.state.index >= 20) {
//       this.setState({
//         index: nums + 1
//       });
//     } else {
//       this.setState({
//         index: nums - 1
//       });
//     }
//   }

//   togglePrev(e) {
//     let index2 = this.state.index - 1;
//     let disabledPrev = index2 === 0;
//     this.setState({
//       index: index2,
//       disabledPrev: disabledPrev,
//       disabledNext: false
//     });
//   }

//   toggleNext(e) {
//     let index2 = this.state.index + 1;
//     let disabledNext = index2 === this.props.profiles.length - 1;

//     this.setState({
//       index: index2,
//       disabledNext: disabledNext,
//       disabledPrev: false
//     });
//   }

//   getUrl = e => {
//     this.setState({
//       url: this.state.url,
//       url: ""
//     });
//   };

//   render() {
//     url = this.state;
//     url = this.props.urls;

//     loc = this.state;
//     loc = this.props.loc;

//     his = this.state;
//     his = this.props.his;

//     // console.log(this.state);

//     let { index, disabledNext, disabledPrev } = this.state;
//     // const titleCreations = this.props.match.params.id;
//     // const v = profiles.map(list => {
//     //   num = loc.includes(list.creationName.toLowerCase()) + " " + list.id;

//     //   return num;
//     // });
//     // const m = [];

//     // let y = v.map((list, index) => {
//     //   const l = list.split("");
//     //   if (list.includes("true")) {
//     //     m.push(list);
//     //   }
//     // });

//     // const c = m.map(el => {
//     //   let m = el[5];
//     //   return (x = parseInt(m));
//     // });

//     // alert(nums);
//     // if (index >= 20) {
//     //   this.setState({
//     //     index: nums + 1
//     //   });
//     // }

//     const profile = this.props.profiles ? this.props.profiles[index] : null;

//     // let z = ["e", 3];
//     // const l = z.filter(Number);

//     // var numbers = y.filter(numbersOnly);
//     // console.log(numbers);

//     // function numbersOnly(value) {
//     //   if (typeof value === "number") {
//     //     return value;
//     //   }
//     // }

//     if (profile) {
//       return (
//         <div className="profile">
//           <div className="container-arrow top">
//             <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
//             <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
//           </div>
//           <Profile {...profile} />
//           <div className="container-arrow bottom">
//             <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
//             <Next toggle={e => this.toggleNext(e)} active={disabledNext} />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// // Function prev with onclick and disabled event with props inside
// function Prev(props) {
//   return (
//     <button
//       onClick={props.toggle}
//       disabled={props.active}
//       className="arrow-btn left"
//     >
//       &larr; Previous project
//     </button>
//   );
// }

// // Function next with onclick and disabled event with props inside
// function Next(props) {
//   return (
//     <button
//       onClick={props.toggle}
//       disabled={props.active}
//       className="arrow-btn right"
//     >
//       Next project &rarr;
//     </button>
//   );
// }

// function Des(props) {
//   return (
//     <div className="block-txt">
//       <h2 className="title-infos">{props.title}</h2>
//       <p className="txt-infos">{props.txt}</p>
//     </div>
//   );
// }

// function Profile(props) {
//   const pub = "../";
//   let crName = props.creationName.toLowerCase();
//   // console.log("Profiles", profiles.length);
//   // console.log("url", url, "cName", crName);
//   const infos = () => {
//     return (
//       <div>
//         <CreationsPage2
//           id={props.id}
//           projLength={profiles.length}
//           creationName={props.creationName.toUpperCase()}
//           urlImg={`${pub}${props.urlImg}`}
//           alt={props.alt}
//           item={props.item}
//         >
//           {props.FullDescriptions.map(lists => {
//             return <Des title={lists.title} txt={lists.txt} />;
//           })}
//         </CreationsPage2>
//       </div>
//     );
//   };

//   /// Get the url and creationName and change it
//   if (url === crName) {
//     return infos();
//   } else {
//     return <div>{his.push(`/portfolio/${crName}`)}</div>;
//   }
// }

// class More extends Component {
//   render() {
//     const titleCreations = this.props.match.params.id;
//     const locationName = this.props.location.pathname;
//     const histor = this.props.history;
//     return (
//       <div>
//         <Main
//           profiles={profiles}
//           urls={titleCreations}
//           loc={locationName}
//           his={histor}
//         />
//       </div>
//     );
//   }
// }

// export default withRouter(More);

// New update again 18h46 the 18/05/20207

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import infos from "../../object/creations.json";

import "./Creations.scss";
import Slider from "react-slick";
import CreationsPage2 from "./CreationsPages2.jsx";

let url = "",
  loc = "",
  his = "",
  profiles = {},
  nums = 0;

profiles = infos;

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      url: "",
      loc: "",
      his: "",
      index: nums
    };
  }

  componentDidMount() {
    const maxNu = profiles.length;
    const k = profiles.map(list => {
      let v = loc.includes(list.creationName.toLowerCase()) + " " + list.id;
      if (v.includes("true" || "false")) {
        const z = v.substr(5);
        nums = parseInt(z);
        return nums;
      } else {
        return nums;
      }
    });

    if (this.state.index >= maxNu) {
      this.setState({
        index: nums + 1,
        url: this.props.url,
        loc: this.props.loc,
        his: this.props.his
      });
    } else {
      this.setState({
        index: nums - 1,
        url: this.props.url,
        loc: this.props.loc,
        his: this.props.his
      });
    }
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    if (this.state.index === 0) {
      this.setState({
        index: profiles.length - 1
      });
    } else {
      this.setState({
        index: index
      });
    }
  }

  toggleNext(e) {
    let index = this.state.index + 1;
    if (this.state.index === profiles.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: index
      });
    }
  }

  render() {
    url = this.state;
    url = this.props.urls;

    loc = this.state;
    loc = this.props.loc;

    his = this.state;
    his = this.props.his;

    let { index } = this.state;

    const profile = this.props.profiles ? this.props.profiles[index] : null;

    if (profile) {
      return (
        <div className="profile">
          <div className="container-arrow top">
            <Prev toggle={e => this.togglePrev(e)} />
            <Next toggle={e => this.toggleNext(e)} />
          </div>
          <Profile {...profile} />
          <div className="container-arrow bottom">
            <Prev toggle={e => this.togglePrev(e)} />
            <Next toggle={e => this.toggleNext(e)} />
          </div>
        </div>
      );
    }
  }
}

// Function prev with onclick and disabled event with props inside
function Prev(props) {
  return (
    <button
      onClick={props.toggle}
      disabled={props.active}
      className="arrow-btn left"
    >
      &larr; Previous project
    </button>
  );
}

// Function next with onclick and disabled event with props inside
function Next(props) {
  return (
    <button
      onClick={props.toggle}
      disabled={props.active}
      className="arrow-btn right"
    >
      Next project &rarr;
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
  let crName = props.creationName.toLowerCase();
  const infos = () => {
    return (
      <div>
        <CreationsPage2
          id={props.id}
          projLength={profiles.length}
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
  };

  /// Get the url and creationName and change it
  if (url === crName) {
    return infos();
  } else {
    return <div>{his.push(`/portfolio/${crName}`)}</div>;
  }
}

class More extends Component {
  render() {
    const titleCreations = this.props.match.params.id;
    const locationName = this.props.location.pathname;
    const histor = this.props.history;
    return (
      <div>
        <Main
          profiles={profiles}
          urls={titleCreations}
          loc={locationName}
          his={histor}
        />
      </div>
    );
  }
}

export default withRouter(More);
