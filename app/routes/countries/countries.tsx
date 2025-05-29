import { NavLink } from "react-router";
import FilterCountry from "./compenents/filters/filterCountry";
import { useModelCountries } from "./model.countries";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";

// export async function clientLoader() {
//  const { data } = useModelCountries();
// }
export default function Countries() {
 const { data, state, actions } = useModelCountries();

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
     <FilterCountry
      onChange={(e) => actions.setInputText(e.target.value)}
      name={state.inputText}
     />
     <select
      value={state.selectText}
      onChange={(e) => actions.setSelectText(e.target.value)}
      className="w-full my-8 border border-gray-300 rounded"
     >
      {data.filterRegions?.map((region) => (
       <option key={region} value={region}>
        {region}
       </option>
      ))}
     </select>
    </div>
    {state.isPending ? "Loading countries..." : ""}
    <div className=" flex md:justify-start justify-center">
     <ul className="flex md:flex-row md:justify-between justify-center flex-wrap bg-white space-y-2">
      {data.filteredCountries?.map((country) => (
       <li className="w-96 min-h-28 p-4 shadow-sm rounded" key={country.cca3}>
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
   </div>
  </section>
 );
}
