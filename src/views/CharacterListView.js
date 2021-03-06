import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchStarWarsData } from "../actions/index"
import { CharacterList } from "../components";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchStarWarsData();
    
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>Loading some data ...</div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    characters: state.characters,
    fetching: state.fetching,
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchStarWarsData,
  }, dispatch);
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
