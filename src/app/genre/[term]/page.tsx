
type Props = {
    params: {
        term: string;
    },
    searchParams:{
        genre: string
    }
}

function page({ params: { term}, searchParams: {genre} }: Props) {

  return (
    <div>This is the genre {term} and parmas: {genre} </div>
  )
}

export default page