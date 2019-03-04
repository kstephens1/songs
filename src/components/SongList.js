//boilerplate code used on all redux projects to get redux state into a component as props
import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        //this inner return statement returns for the map func
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  //the state is all songs and the selected song
  //taking the state object in redux to map it to React props
  return { songs: state.songs }; //returning an object that shows up as props inside our component
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList); // this syntax executes a function that returns a function. We are passing in the
