import type { Route } from "./+types/countries";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "Countries" },
  { name: "description", content: "All countries" },
 ];
}
export function Countries() {
 return (
  <div>
   <h1>Countries</h1>
   <p>List of countries will be displayed here.</p>
  </div>
 );
}
