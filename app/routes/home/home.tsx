import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
 return [
  { title: "REST Explore API" },
  { name: "description", content: "find your favorite country" },
 ];
}

export default function Home() {
 return (
  <div>
   <h1 className="text-black">Home page</h1>
  </div>
 );
}
