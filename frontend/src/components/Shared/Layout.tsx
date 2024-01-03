import * as React from "react"
import DropDownMenu from "../Littles/DropDownMenu"
import Header from "./Header"
import MyRoutes from "./MyRoutes"

const Layout:React.FC = () => {
  return (
    <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Header */}
      <Header />
      {/* Page content here */}
      <MyRoutes />
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <DropDownMenu />
    </div>
  </div>
  )
}

export default Layout