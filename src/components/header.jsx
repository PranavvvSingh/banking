import { NavLink } from "react-router-dom"

const Header = () => {
   return (
      <div className="h-[65px] flex justify-between items-center text-white bg-[#100C08] px-10">
         <h1 className="text-2xl font-bold text-blue-500">Banking💸</h1>
         <nav className="flex gap-7 items-center justify-center text-lg">
            <NavLink
               to={"/"}
               className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
               Home
            </NavLink>
            <NavLink
               to={"/sign-in"}
               className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
               Sign In
            </NavLink>
            <NavLink
               to={"/log-in"}
               className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
               Log In
            </NavLink>
         </nav>
      </div>
   )
}

export default Header
