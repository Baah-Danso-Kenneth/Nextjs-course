import CarouselBanner from '@/components/CarouselBanner';
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MovieCarousel from '@/components/MovieCarousel'
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