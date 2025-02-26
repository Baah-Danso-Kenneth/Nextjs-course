import { Movie } from "@/typing";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MovieCarousel({title, movies, isVertical}:Props) {
  return (
    <div className="z-50 ">
        <h1 className="text-2xl">{title}</h1>

      <div className={cn("flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide overflow-y-hidden", isVertical && "flex-col space-x-0")}>

        {isVertical 
        ?
        movies.map((movie)=>(
            <div key={movie.id} className={cn( isVertical && "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5")}>
                <MovieCard movie={movie}/>

                <div className="max-w-2xl">
                      <p>{movie.title} ({movie.release_date?.split("-")[0]})</p>
                     <hr className="mb-3"/>
                    <p>{movie.overview}</p>
                </div>
            </div>
        ))
        : 
        <>
        {movies?.map(movie=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </>
    }


        </div>


    </div>
  )
}

export default MovieCarousel