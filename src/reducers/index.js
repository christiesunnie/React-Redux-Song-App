import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "2.30",
    },
    {
      title: "No More",
      duration: "2.10",
    },
    {
      title: "Hello",
      duration: "2.15",
    },
    {
      title: "Bye",
      duration: "2.02",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
