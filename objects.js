var playlist = {
  SOJA: "I don't wanna wait"

}
function updatePlaylist(playlist, artistName, songTitle){
  return object.assign ({}, playlist, {[artistName]: songTitle})
}
