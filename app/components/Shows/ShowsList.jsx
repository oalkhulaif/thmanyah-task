"use client";

import { useState, useEffect } from "react";
import ShowCard from "./ShowsCard";

const API_URL = "https://api.dev.library.servers8.com/v2/search?query=business&type=podcast&from=0&size=10";

export default function ShowsList() {
    const [podcasts, setPodcasts] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(2);
    const [visibleCards, setVisibleCards] = useState(5);

    useEffect(() => {
        async function fetchShows() {
            try {
                const response = await fetch(API_URL, { cache: "force-cache" });
                const data = await response.json();
                setPodcasts(data.data || []);
            } catch (error) {
                console.error("Error fetching podcasts:", error);
            }
        }
        fetchShows();
    }, []);

    useEffect(() => {
        function updateCardCount() {
            if (window.innerWidth < 768) {
                setVisibleCards(3);
                setSelectedIndex(1);
            } else {
                setVisibleCards(5);
                setSelectedIndex(2);
            }
        }
        updateCardCount();
        window.addEventListener("resize", updateCardCount);
        return () => window.removeEventListener("resize", updateCardCount);
    }, []);

    const handleSelect = (index) => {
        if (index !== selectedIndex) {
            let newPodcasts = [...podcasts];

            if (index > selectedIndex) {
                const movedItem = newPodcasts.shift();
                newPodcasts.push(movedItem);
            } else {
                const movedItem = newPodcasts.pop();
                newPodcasts.unshift(movedItem);
            }

            setPodcasts(newPodcasts);
        }
    };

    if (podcasts.length === 0) {
        return <p className="text-center">لا توجد برامج متاحة</p>;
    }

    return (
        <div className="relative">
            <h1 className="font-bold m-[6px] text-center" style={{ fontSize: "2.2rem" }}>
                🎤 برامج مقترحة من فريق ثمانية
            </h1>

            <div className="flex justify-center mb-[100px] transition-transform duration-1000 ease-in-out">
                {podcasts.slice(0, visibleCards).map((podcast, index) => (
                    <ShowCard
                        key={podcast.podcast_id}
                        show={{
                            id: podcast.podcast_id,
                            title: podcast.name,
                            image: podcast.avatar_url,
                        }}
                        isSelected={index === Math.floor(visibleCards / 2)}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </div>
        </div>
    );
}
