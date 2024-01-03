import { Route, Routes} from "react-router-dom";
import BookList from "../../pages/BookList";

const MyRoutes:React.FC = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/:id' element={<BookList />} />
          <Route path="*" element={`Error`} />

        </Routes>
    </>
  )
}

export default MyRoutes