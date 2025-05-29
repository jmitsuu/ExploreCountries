import { NavLink } from "react-router";
import type { Route } from "./+types/countries";
import FilterCountry from "./compenents/filters/filterCountry";
import { useModelCountries } from "./model.countries";
import { CiLocationOn } from "react-icons/ci";

// export async function clientLoader() {
//  const { data } = useModelCountries();

// }
export default function Countries() {
 const { data, state } = useModelCountries();
 const filterRegions = [
  ...new Set(data.listCountries?.map((country) => country.region)),
 ];
 return (
  <section>
   <div className="px-5">
    <div className="my-10 space-y-3">
     <h1 className="md:text-3xl font-bold">Countries</h1>
     <p className="text-gray-400 text-sm">
      List of countries will be displayed here.
     </p>
    </div>
    <div className="w-full flex md:flex-row justify-around space-x-2">
     <FilterCountry />
     <select
      value={""}
      onChange={(e) => e.target.value}
      className="w-full my-8 border border-gray-300 rounded"
     >
      <option value="">All Regions</option>
      {filterRegions?.map((region) => (
       <option key={region} value={region}>
        {region}
       </option>
      ))}
     </select>
    </div>
    {state.isPending ? "Loading countries..." : ""}
    <div className=" flex justify-center">
     <ul className="flex md:flex-row md:justify-between justify-center flex-wrap bg-white space-y-2">
      {data.listCountries?.map((country) => (
       <li className="w-96 min-h-24 p-4 shadow-sm rounded" key={country.cca3}>
        <NavLink to={`/countries/${country.cca3}`}>
         <span className="text-purple-900 font-bold">
          {country.name.common}
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
         className="float-right"
         to={country.maps.googleMaps}
         target="_blank"
        >
         <CiLocationOn className="size-8" />
        </NavLink>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </section>
 );
}
