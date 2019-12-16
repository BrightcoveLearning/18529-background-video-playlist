videojs.registerPlugin('backgroundPlaylist', function() {
  var myPlayer = this;

// +++ Set the playlist to repeat, but stop after 3 time through +++
  myPlayer.playlist.repeat(true);

   myPlayer.on('playlistitem',function(){
     counter ++;
     if (counter > 8){
       myPlayer.playlist.repeat(false);
     }
   })

  // +++ Display the title and description +++
  myPlayer.on('loadstart',function(){
    videoTitle.textContent = myPlayer.mediainfo.name;
    videoDescription.textContent = myPlayer.mediainfo.description;
  })
});
