import { Component } from 'react';
import './App.scss';
import { Header } from './components/Header'
import { Tile } from './components/Tile';
import { addNotice } from './actions';
import { connect } from 'react-redux';

const tiles = [
  {
    name: "Creer avis de passage",
    action: "newNotice"
  },
  {
    name: "Consulter les avis de passages",
    action: "noticeList"
  },
];

export default class App extends Component {

  handleClick(action) {
    // if (action === "newNotice"){
    //   this.props.addNotice();
    // }
    this.props.history.push(action);
  }

  render(){
    const tilesDisplay = tiles.map((tile)=>{
      return(
        <Tile
          key={tile.action}
          name={tile.name}
          action={() => this.handleClick(tile.action)}
        />
      )
    })

    return (
      <div className="App">
        <Header
          isHome={true}
        />
        <div className="container padding-top-5">
          <div className="container-tiles">
            {tilesDisplay}
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       addNotice: () => {
//           dispatch(addNotice())
//       }
//   }
// }

// export default connect(null,mapDispatchToProps)(App);

