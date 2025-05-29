import { navigation } from "./datanavigation";

export function Navbar() {
 return (
  <nav className="bg-white p-4 md:flex items-center space-x-3">
   <div className="flex md:justify-start justify-center">
    <h1 className=" text-xl font-bold text-black">
     <span className="text-red-500 font-bold text-2xl mr-1">REST</span>Explorer
    </h1>
   </div>
   <ul className="flex md:flex-row flex-col items-center space-x-4 border-l pl-2 border-gray-500">
    {navigation.map((navItem) => {
     return (
      <li>
       <a href={navItem.to} className="text-black hover:underline">
        {navItem.name}
       </a>
      </li>
     );
    })}
   </ul>
  </nav>
 );
}
