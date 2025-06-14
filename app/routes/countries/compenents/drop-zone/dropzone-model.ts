import { useState } from "react";
import { useModelCountries } from "../../model.countries";
import type { ICountry } from "~/interfaces/restApiCountries";

export function useDropModel() {
 const [dataDraggedItem, setDataDraggedItem] = useState<ICountry[]>([]);
 const { data } = useModelCountries();
 const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
 };
 const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  const index = event.dataTransfer.getData("text/plain");
  const draggedItem = data.filteredCountries[parseInt(index, 10)];
  dataDraggedItem.findIndex((item) => item.cca3 === draggedItem.cca3) === -1 &&
   setDataDraggedItem((prevItems) => [...prevItems, draggedItem]);
 };
 return {
  data: { dataDraggedItem },
  actions: { handleDragOver, handleDrop },
 };
}
