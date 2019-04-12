var playlist = {artist: 'song title'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
return playlist
}

function removeFromPlaylist(playlist, artistName){
  var playlist = 
  delete artistName;
  return playlist
}