import { useQuery } from "@tanstack/react-query";
import { cacheKey } from "~/cache/cacheKey";
import { getCountries } from "../services";
import { useEffect, useMemo, useState } from "react";

export function useModelCountries() {
 const [inputText, setInputText] = useState("");
 const [selectText, setSelectText] = useState("All Regions");
 const [findCountry, setFindCountry] = useState("");
 const { isPending, data: listCountries } = useQuery({
  queryKey: [cacheKey.countries.list],
  queryFn: () => getCountries(),
 });
 const filterRegions = [
  ...new Set(
   listCountries?.map((country) => country.region).concat("All Regions")
  ),
 ];

 const filteredCountries = useMemo(() => {
  console.log(listCountries);
  if (!listCountries) return [];
  if (inputText.trim().length === 0 && selectText !== "All Regions") {
   return listCountries?.filter((country) => country.region === selectText);
  }
  return listCountries?.filter((country) =>
   country.name.common.toLowerCase().includes(inputText.toLowerCase())
  );
 }, [listCountries, inputText, selectText]);

 // find page country

 return {
  state: { isPending, inputText, selectText },
  data: { filteredCountries, filterRegions },
  actions: { setInputText, setSelectText },
 };
}
