import type { Route } from "./+types/countries";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "Country Details" },
  { name: "description", content: "Details about the selected country" },
 ];
}
export default function Country() {
 return (
  <div>
   <h1>Country Details</h1>
   <p>This page will display details about the selected country.</p>
  </div>
 );
}
