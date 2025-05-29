import type { ICountry } from "~/interfaces/restApiCountries";
import type { Route } from "./+types/country";

// Mock implementation of fetchTeam function
async function fetchCountry(params:string) {
  return params
}
export async function loader({ params }: Route.LoaderArgs) {
 let country = await fetchCountry(params.countryName);
 return {country};
}
export default function Country({loaderData}: Route.ComponentProps) {
  console.log(loaderData)
 return (
  <section>
 <div className="px-5 mt-10">
 <h1>Country Details {loaderData.country}</h1>
 <p>This page will display details about the selected country.</p>
 </div>
  </section>
 );
}
