import MovieCarousel from '@/components/desney/MovieCarousel'
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies'
import React from 'react'

type Props={
    params:{
        id:string
    }
}
async function page({ params: { id}}: Props) {
  const decode = decodeURI(id)

  const movies = await getSearchMovies(decode)
  const popularMovies = await getPopularMovies()
  return (
    <div className='max-w-7xl mx-auto'>
         <div className='flex flex-col space-y-4 mt-32 '>
          <h1 className='text-6xl font-bold'>Results for {decode}</h1>
          <MovieCarousel title='Movies' movies={movies} isVertical/>
          <MovieCarousel title='You may also like' movies={popularMovies}/>
         </div>
      </div>
  )
}

export default page