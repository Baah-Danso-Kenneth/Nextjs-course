import MovieCarousel from "@/components/desney/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
    params: {
        term: string;
    },
    searchParams:{
        genre: string
    }
}

async function page({ params: { term}, searchParams: {genre} }: Props) {
  const movies = await getDiscoverMovies(term)
  return (
    <div className="max-w-7xl mx-auto">
       <div className="flex flex-col space-y-5 mt-32 xl:mt-32 ">
        <h1>Results for {genre}</h1>
        <MovieCarousel title="Genre" movies={movies} isVertical/>
       </div>
       </div>
  )
}

export default page