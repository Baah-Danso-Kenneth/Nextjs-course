import CarouselBannerWrapper from '@/components/desney/CarouselBannerWrapper';
import MovieCarousel from '@/components/desney/MovieCarousel'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies';
import React from 'react'


async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();


  return (
    <main>
      <CarouselBannerWrapper/>
       <div>
        <MovieCarousel movies={upcomingMovies} title='upcoming' isVertical/>
        <MovieCarousel movies={topRatedMovies} title='top rated'/>
        <MovieCarousel movies={popularMovies} title='popular'/>

       </div>

      </main>
  )
}

export default Home