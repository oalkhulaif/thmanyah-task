"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; 

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState("");

    return (
        <div 
            className="relative flex items-center transition-all duration-700 ease-in-out"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => {
                if (searchText.length === 0) setIsExpanded(false);
            }}
        >
            <FaSearch 
                className="cursor-pointer transition-all duration-700 ease-in-out mx-[5px]"
                style={{ fontSize: "24px" }}  
                onClick={() => setIsExpanded(true)}
            />

            <div className={`transition-all duration-700 ease-in-out  ${isExpanded ? "w-full min-w-[200px] max-w-[500px] ml-[40] opacity-100" : "w-0 opacity-0"}`}>
                <input
                    type="text"
                    placeholder="بحث..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onBlur={() => {
                        if (searchText.length === 0) setIsExpanded(false);
                    }}
                    className="bg-transparent outline-none border rounded-full px-[5px] h-14 w-full"
                />
            </div>
        </div>
    );
}
