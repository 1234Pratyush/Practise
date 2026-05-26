import axios from "axios";
import { GET_OPTIONS } from "@/utils/constants"; 
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "@/utils/moviesSlice";


export const useTopRatedMovies = ()=>{
 const dispatch = useDispatch();

        useEffect(()=>{
    
       const getTopRatedMovies = async()=>{
        try{
            const upcomingMovies = await axios.get(
              "https://api.themoviedb.org/3/movie/top_rated",
              GET_OPTIONS,
            );
          
            dispatch(addTopRatedMovies(upcomingMovies.data.results))
        
        }
        catch(error){
            console.log(error.message);
        }
       };getTopRatedMovies();
    
        },[dispatch])
}