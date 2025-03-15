"use client";
import { useState } from "react";
import { FaSearch, FaPodcast, FaHeadphones } from "react-icons/fa";

export default function SearchBar({ onSearch, searchResults }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchText(query);
        onSearch(query);
    };

    return (
        <div 
            className="relative flex flex-col items-center transition-all duration-700 ease-in-out"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => {
                if (searchText.length === 0) setIsExpanded(false);
            }}
        >
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full shadow-md">
                <FaSearch className="cursor-pointer" style={{ fontSize: "18px" }} />
                <input
                    type="text"
                    placeholder="بحث عن حلقات أو برامج..."
                    value={searchText}
                    onChange={handleSearch}
                    className="outline-none w-full px-[8px]"
                />
            </div>

          {/* Search Results */}
            {searchResults.length > 0 && (
                 <div 
                                     className="absolute top-full mt-[2px] w-full bg-[#F6F4EE] border shadow-md rounded-lg p-[3px] z-50
                                     md:max-h-[300px] md:overflow-y-auto"
                                     style={{
                                         border: "1px solid #ccc",
                                         overflowY: "auto",
                                         minWidth: "200%",
                                     }}
                                 >
                    {searchResults.slice(0, 5).map((result, index) => (
                <div 
                    className={`flex items-center gap-[10px] p-[12px] cursor-pointer rounded-md transition-colors duration-200 ease-in-out 
                    ${index !== searchResults.length - 1 ? "border-b" : ""}`}
                    
                key={index}
                style={{
                    borderBottom: index !== searchResults.length - 1 ? "1px solid #ddd" : "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",

                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dad8d3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
                {/* Icon */}
                {result.type === "podcast" ? (
                    <FaPodcast className="text-[#DD7258] w-[20px] h-[20px] flex-shrink-0" />
                ) : (
                    <FaHeadphones className="text-[#DD7258] w-[20px] h-[20px] flex-shrink-0" />
                )}

                {/* Title */}
                <span
                    style={{
                        fontSize: "16px",
                        fontWeight: "500",

                    }}
                >
                {result.name}
                </span>
            </div>
        ))}
    </div>
)}

        </div>
    );
}
