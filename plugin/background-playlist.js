videojs.registerPlugin('backgroundPlaylist', function() {
  var myPlayer = this,
    counter = 0;

// +++ Set the playlist to repeat, but stop after 2 times through +++
  myPlayer.playlist.repeat(true);

   myPlayer.on('playlistitem',function(){
     counter ++;
     if (counter > 4){
       myPlayer.playlist.repeat(false);
     }
   })

  // +++ Display the title and description +++
  myPlayer.on('loadstart',function(){
    videoTitle.textContent = myPlayer.mediainfo.name;
    videoDescription.textContent = myPlayer.mediainfo.description;
  })
});
