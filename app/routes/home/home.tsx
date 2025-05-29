import type { Route } from "./+types/home";
import imgCity from "../../assets/images/homeImg.webp";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "REST Explore API" },
  { name: "description", content: "find your favorite country" },
 ];
}

export default function Home() {
 return (
  <div className="px-5 flex h-full md:flex-row flex-col justify-between items-center">
   <div className="w-full md:text-6xl text-4xl md:text-start text-center">
    <h1 className="text-black  font-bold">Explore Countries with </h1>
    <h2 className="text-purple-900  font-bold">Real-Time Data</h2>
    <h3 className="text-2xl text-slate-500 my-10 px-10 text-pretty">
     Discover details about every country around the world - from capitals to
     regions!
    </h3>
    <div className="flex items-center md:justify-start justify-center space-x-3">
     <NavLink
      to="/countries"
      className="py-4 px-8 flex items-center text-slate-200 bg-purple-900 hover:bg-purple-700 rounded-xl text-xl"
     >
      Explore Now <FaArrowRight className="ml-1.5" />
     </NavLink>
     <NavLink
      to="https://restcountries.com/"
      target="_blank"
      className="py-4 px-8 text-slate-800 bg-slate-200 hover:bg-slate-400 hover:text-white rounded-xl text-xl"
     >
      Learn More
     </NavLink>
    </div>
    <div className="text-sm mt-20 md:flex hidden">@Jaiomiiguel</div>
   </div>
   <div className="w-full mt-10 md:w-2/3 ">
    <img
     src={imgCity}
     alt="City"
     className="w-full h-auto md:flex hidden rounded-lg shadow-lg object-cover"
    />
   </div>
  </div>
 );
}
