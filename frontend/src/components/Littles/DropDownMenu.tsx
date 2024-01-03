import * as React from "react"


const DropDownMenu:React.FC = () => {
  return (
    <>
    <menu className="h-full ">
        <ul className="menu rounded-none bg-base-200 overflow-auto w-56 h-full">
            <li>
              <h2 className="menu-title text-accent">Book Categories</h2>
              <ul className="text-lg">
                <li className="bg-base-300 rounded-md"><a>All</a></li>
                <li><a>Novels</a></li>
                <li><a>Classics</a></li>
                <li><a>Philosophy</a></li>
                <li><a>Science and Technology</a></li>
                <li><a>History</a></li>
                <li><a>Art</a></li>
                <li><a>Children and Youth</a></li>
                <li><a>Education and Academic</a></li>
                <li><a>Personal Development</a></li>
              </ul>
            </li>
        </ul>
    </menu>
    </>
  )
}

export default DropDownMenu