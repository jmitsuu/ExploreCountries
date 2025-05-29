interface IFilterCountryProps{
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function FilterCountry({name, onChange}:IFilterCountryProps) {
 return (
  <div className="flex justify-center items-center my-8 w-full">
   <input
    type="text"
    placeholder="Search by name..."
    className="border border-gray-300 rounded px-4 py-2 w-full "
    value={name}
    onChange={onChange}
   />
  </div>
 );
}
