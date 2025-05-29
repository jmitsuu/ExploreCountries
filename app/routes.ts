import {
 type RouteConfig,
 index,
 prefix,
 route,
} from "@react-router/dev/routes";

export default [
 index("routes/home/home.tsx"),
 route("about", "routes/about/about.tsx"),
 ...prefix("countries", [
  route("", "routes/countries/countries.tsx"),
  route(":countryName", "routes/countries/country.tsx"),
 ]),
] satisfies RouteConfig;
