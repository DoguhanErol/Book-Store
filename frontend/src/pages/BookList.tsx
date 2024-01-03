import BookCard from "../components/BookList/BookCard"


const BookList:React.FC = () => {
  return (
    <>
    <section className="flex w-full justify-center flex-wrap my-2">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </section>
    </>
  )
}

export default BookList