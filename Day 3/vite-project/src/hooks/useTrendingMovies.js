import { useEffect } from "react"
import axios from 'axios'
import { GET_OPTIONS } from "@/utils/constants"
import { useDispatch } from "react-redux"
import { addTrendingMovies } from "@/utils/moviesSlice"

export const  useTrendingMovies = ()=>{

  const dispatch = useDispatch();

    useEffect(()=>{
    
         const getTrendingMovies = async()=>{
            try{
               const trendingMovies = await axios.get(
                 "https://api.themoviedb.org/3/trending/movie/day",GET_OPTIONS
               );
               console.log(trendingMovies.data.results,"trending movies")
               dispatch(addTrendingMovies(trendingMovies.data.results))
            }
            catch(error){
                console.log(error.message);
            }
         } ;getTrendingMovies();

    

    },[])
}