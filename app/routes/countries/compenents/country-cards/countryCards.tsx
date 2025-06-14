import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router";
import type { ICountry } from "~/interfaces/restApiCountries";
interface ICountryProps {
 dataCountry: ICountry[];
 styleCard?:string
}
export default function CountryCards({ dataCountry, styleCard }: ICountryProps) {
 const handleDragStart = (
  event: React.DragEvent<HTMLLIElement>,
  index: number,
 ) => {
  event.dataTransfer.setData("text/plain", index.toString());
 };
 return (
  <div className="">
   <ul className={`flex md:flex-row  justify-center flex-wrap space-y-2 ${styleCard}`}>
    {dataCountry?.map((country, index) => (
     <li
      className="w-96 h-40 p-4 shadow-sm rounded bg-white"
      key={country.cca3}
      draggable="true"
      onDragStart={(event) => handleDragStart(event, index)}
     >
      <NavLink to={`/countries/${country.cca3}`}>
       <span className="text-purple-900 font-bold flex justify-between items-center">
        {country.name.common}
        <img
         src={country.flags.svg}
         alt={country.flags.alt}
         className="w-10 h-7 rounded object-cover float-right"
        />
       </span>
       <br />
       <span className="text-sm">Region: {country.region}</span>
       <br />
       <span className="text-sm">
        Population:{" "}
        <b className="text-xs">{country.population.toLocaleString()}</b>
       </span>
      </NavLink>
      <NavLink
       className="float-right hover:text-blue-600"
       to={country.maps.googleMaps}
       target="_blank"
      >
       <CiLocationOn className="size-8" />
      </NavLink>
     </li>
    ))}
   </ul>
  </div>
 );
}
