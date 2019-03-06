import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { requestData } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.requestData();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>
          <p>that's so fetch</p>
        </div>
      );
      // return something here to indicate that you are fetching data
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.characters,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    requestData
    /* action creators go here */
  }
)(CharacterListView);
