import Header from './Header'
import useNowPlayingMovies from '@/hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearch from './GPTSearch'


const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <GPTSearch/>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
