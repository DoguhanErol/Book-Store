import bookImg from "./../../assets/book1.jpg";
const BookCard:React.FC = () => {
  return (
    <>
    <article className="w-[35rem] m-2">
        <div className="card card-side bg-opacity-95 bg-accent shadow-lg w-[35rem]">
          <figure className="w-40"><img src={bookImg} alt="Book"/></figure>
          <div className="card-body">
          <div className="badge badge-secondary">Philosophy</div>
            <h3 className="card-title text-neutral-800">Böyle Söyledi Zerdüşt</h3>
            <h4 className=" text-neutral-600">Frederich Nietche</h4>
            <div className="divider divider-secondary text-2xl">30$</div>
            <div className="card-actions  justify-end">
                <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
    </article>
    </>
  )
}

export default BookCard