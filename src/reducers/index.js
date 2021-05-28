import { combineReducers }  from "redux";

const songsReducer = () => {
    return [
        {
            title: 'Smells Like Teen Spirit',
            duration: '5:42'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'Victory',
            duration: '3:25'
        },
        {
            title: 'I Want it That way',
            duration: '1:25'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});