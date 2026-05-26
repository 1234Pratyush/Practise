import { GET_OPTIONS } from "@/utils/constants"
import { addUpcomingMovies } from "@/utils/moviesSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

 export  const useUpcomingMovies = ()=>{

 const dispatch = useDispatch();

    useEffect(()=>{

   const getUpcomingMovies = async()=>{
    try{
        const upcomingMovies = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
        GET_OPTIONS);
      
        dispatch(addUpcomingMovies(upcomingMovies.data.results))
    
    }
    catch(error){
        console.log(error.message);
    }
   };getUpcomingMovies()

    },[])
}