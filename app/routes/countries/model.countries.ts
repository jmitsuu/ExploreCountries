import { useQuery } from "@tanstack/react-query";
import { cacheKey } from "~/cache/cacheKey";
import { getCountries } from "../services";

export function useModelCountries() {
 const { isPending, data: listCountries } = useQuery({
  queryKey: [cacheKey.countries.list],
  queryFn: () => getCountries(),
 });

 return {
  state: { isPending },
  data: { listCountries },
  actions: {},
 };
}
