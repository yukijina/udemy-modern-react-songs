import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div>
                <h3>Select a song</h3>
            </div>
        )
    }

    return (
        <div>
            <h3>Details for</h3>
            <p>{song.title}</p>
        </div>
    )
}

const mapStateToProps = state => {
  return {
      song: state.selectedSong 
  }
}
export default connect(mapStateToProps)(SongDetail);
