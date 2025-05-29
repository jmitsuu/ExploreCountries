import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "find your country" },
  { name: "description", content: "find your favorite country" },
 ];
}

export default function Home() {
 return (
  <div>
   <h1>Home page</h1>
  </div>
 );
}
