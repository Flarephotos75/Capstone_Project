import Sound from  'react-sound';


const PlayAudio = (
    handleSongLoading, 
    handleSongPlaying, 
    handleSongFinishedPlaying
    ) => {

    return (
      <div>
        <Sound 
            url='http://localhost:8080/audio/lightsout.mp3' 
            playStatus={Sound.status.PLAYING}
            onLoading={handleSongLoading} 
            onPlaying={handleSongPlaying} 
            onFinishedPlaying={handleSongFinishedPlaying}
        />
      </div>
    )

  }

  export default PlayAudio;