import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  //  console.log(props);
  if (!song) {
    return <div>No song selected</div>;
  }

  return (
    <div>
      <h3>Details for</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  //pull out the property we are intested in from the whole state object
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
