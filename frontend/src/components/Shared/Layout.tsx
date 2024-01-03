import * as React from "react"
import DropDownMenu from "../Littles/DropDownMenu"
import Header from "./Header"
import MyRoutes from "./MyRoutes"

const Layout:React.FC = () => {
  return (
    <main className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <section className="drawer-content">
      {/* Header */}
      <Header />
      {/* Page content here */}
      <MyRoutes />
    </section> 
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <DropDownMenu />
    </div>
  </main>
  )
}

export default Layout