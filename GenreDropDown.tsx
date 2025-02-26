import React from 'react'
import { Genres } from './typing'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'



async function GenreDropDown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMBD_API_KEY}`
    },
    next: {
      revalidate: 60 * 60 * 24,
    }
  }

  const response = await fetch(url,options)
  const data = (await response.json()) as Genres

  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.length > 0 ? (
          data.genres.map(({ id, name }) => (
            <DropdownMenuItem key={id}>
              <Link href={`/desney/genre/${id}?genre=${name}`}>{name}</Link>
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem>No genres available</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
  
}

export default GenreDropDown