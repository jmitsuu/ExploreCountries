import { NavLink } from "react-router";
import FilterCountry from "./compenents/filters/filterCountry";
import { useModelCountries } from "./model.countries";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import CountryCards from "./compenents/country-cards/countryCards";
import DropZone from "./compenents/drop-zone/dropZone";

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
    <DropZone />

    {state.isPending ? "Loading countries..." : ""}
    <div className="">
     <CountryCards styleCard="md:justify-between" dataCountry={data.filteredCountries} />
    </div>
   </div>
  </section>
 );
}
