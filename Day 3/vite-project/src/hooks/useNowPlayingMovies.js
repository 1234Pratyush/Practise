import { GET_OPTIONS } from "@/utils/constants";
import { addNowPlayingMovie } from "@/utils/moviesSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";



const useNowPlayingMovies = ()=>{
 
    const dispatch = useDispatch();

    const [movies,setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            GET_OPTIONS,
          );
    
          console.log(response.data.results,"Now playing data ");
          dispatch(addNowPlayingMovie(response.data.results))
          setMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchMovies();
    }, [dispatch]);
}



export default useNowPlayingMovies