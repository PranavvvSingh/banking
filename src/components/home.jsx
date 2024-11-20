import { useState } from "react"

// list all the users herer
const Home = () => {
   const [users, setUsers] = useState([
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
      { id: 301, name: "Alice Johnson" },
      { id: 211, name: "Bob Smith" },
      { id: 109, name: "Charlie Brown" },
   ])

   return (
      <div className="h-[100%] w-[100%] px-20 py-10 overflow-y-auto">
         <div className="overflow-x-hidden">
            <table className="table">
               <thead>
                  <tr className="text-blue-600 text-lg uppercase">
                     <th></th>
                     <th className="">User Id</th>
                     <th>Name</th>
                  </tr>
               </thead>
               <tbody className="text-base">
                  {users.map((user, index) => (
                     <tr
                        key={index}
                        className="cursor-pointer hover:bg-blue-600/[0.1]"
                     >
                        <td>{index + 1}.</td>
                        <td>{user.id}</td>
                        <td className="capitalize">{user.name}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Home
