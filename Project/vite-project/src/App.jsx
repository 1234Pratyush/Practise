
import { fetchPhotos,fetchVideos,fetchGif} from "./api/mediaApi"


function App(){
  fetchPhotos()
  fetchVideos()
  fetchGif()
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
jhjj
    </div>
  )
}

export default App