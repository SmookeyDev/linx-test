import { SearchIcon } from '@heroicons/react/solid';

const Search = ({ onLocationChange }) => {
    return (
        <div className="w-4/5 md:w-3/5 lg:w-1/2 m-auto p-2">
            <div className="flex flex-row mx-2 p-2 justify-start border-b border-yellow-600">
                <SearchIcon className="w-6 hover:text-yellow-700 text-yellow-600 dark:text-white transition-colors duration-200" />
                <input
                    type="text"
                    placeholder="Search by city, state and country"
                    className="text-sm rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
                    onChange={onLocationChange}
                />
            </div>
        </div>
    );
};

export default Search;