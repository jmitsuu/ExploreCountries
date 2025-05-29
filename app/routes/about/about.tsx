import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "About us" },
  { name: "description", content: "This is a description about us" },
 ];
}
export default function About() {
 return (
  <div>
   <h1>About page</h1>
   <p>This is the about page of our application.</p>
  </div>
 );
}
