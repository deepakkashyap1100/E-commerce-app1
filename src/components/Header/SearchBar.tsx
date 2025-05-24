import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  )
}

export default SearchBar 