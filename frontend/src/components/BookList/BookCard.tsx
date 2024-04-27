import bookImg from "./../../assets/book1.jpg";
const BookCard:React.FC = () => {
  return (
    <>
    <article className="w-[35rem] m-2">
        <div className="card card-side bg-opacity-95 bg-accent shadow-lg sm:w-[35rem]">
          <figure className="w-36 sm:w-40"><img src={bookImg} alt="Book"/></figure>
          <div className="card-body bg-none sm:bg-secondary sm:bg-opacity-40 rounded-lg">
          <div className="badge badge-secondary rounded-lg">Philosophy</div>
            <h3 className="card-title text-neutral-800">Böyle Söyledi Zerdüşt</h3>
            <h4 className=" text-neutral-600">Frederich Nietche</h4>
            <div className="divider divider-info text-lg sm:text-2xl">30$</div>
            <div className="card-actions  justify-end">
                <button className="btn btn-primary rounded-full sm:text-lg">Buy</button>
            </div>
          </div>
        </div>
    </article>
    </>
  )
}

export default BookCard