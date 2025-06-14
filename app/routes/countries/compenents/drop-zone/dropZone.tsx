import CountryCards from "../country-cards/countryCards";
import { useDropModel } from "./dropzone-model";

export default function DropZone() {
 const { actions, data } = useDropModel();
 return (
  <div
   className="w-full h-80 overflow-hidden shadow mb-20 p-2 rounded-md relative bg-slate-50"
   onDragOver={(event) => actions.handleDragOver(event)}
   onDrop={(event) => actions.handleDrop(event)}
  >
   <h1 className="text-sm font-bold underline mb-5">Your Favorites Countries</h1>
   <div className="overflow-y-auto max-h-80  w-full">
    <CountryCards
     dataCountry={data?.dataDraggedItem}
     styleCard="justify-start space-x-4"
    />
   </div>

   <div className="absolute bottom-2 right-8">
    <button className="cursor-pointer px-4 py-2 text-slate-800  rounded-md bg-amber-400 hover:bg-amber-300">
     Clear
    </button>
    <button className="cursor-pointer px-4 py-2 text-slate-200 hover:text-slate-800 rounded-md bg-blue-400 hover:bg-blue-300 ml-2">
     Save
    </button>
   </div>
  </div>
 );
}
