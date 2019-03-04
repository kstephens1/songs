import { combineReducers } from "redux"; //getting named export to combine the reducers

const songsReducer = () => {
  //fixed array
  return [
    { title: "Smells like teen spirit", duration: "4:05" },
    { title: "God put a smile on my face", duration: "4:56" },
    { title: "You suffer but why, part 2", duration: "0:02" },
    { title: "Wierd Fishes/Aprpeggi", duration: "5:32" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong; //default action in case action.type is not SONG_SELECTED, return the curretly selected song
};

export default combineReducers({
  //using this redux func to combine my reducers to one object called reducers
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
