"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        try {
            const [episodesRes, showsRes] = await Promise.all([
                fetch(`https://api.dev.library.servers8.com/v2/search?query=${query}&type=episode&from=0&size=10`),
                fetch(`https://api.dev.library.servers8.com/v2/search?query=${query}&type=podcast&from=0&size=10`)
            ]);

            const episodesData = await episodesRes.json();
            const showsData = await showsRes.json();

            const combinedResults = [
                ...(episodesData.data || []),
                ...(showsData.data || [])
            ];

  
            setSearchResults(combinedResults);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
        setLoading(false);
    };

    return (
        <header className="bg-[#E1DCCC] flex items-center px-[10px] min-h-[70px]">
            <div className="flex items-center gap-[30px]">  
                <img 
                    src="/thamnyah-logo.webp" 
                    alt="logo"  
                    className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
                />
                <SearchBar onSearch={handleSearch} searchResults={searchResults} />
            </div>

            <div className="mr-auto"> 
                <a
                    href="https://thmanyah.com"
                    className="border border-red-500 text-[#DD7258] text-sm lg:text-lg font-medium px-3 lg:px-6 py-1.5 lg:py-3 rounded-full transition hover:bg-[#DD7258] hover:text-white flex items-center justify-center"
                    style={{ minWidth: "150px", minHeight: "40px" }}
                >
                    الذهاب لموقع ثمانية
                </a>
            </div>
        </header>
    );
}
