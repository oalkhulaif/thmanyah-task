"use client"; 

import { useRef, useState } from "react";
import PodcastEpisode from "./PodcastEpisode";

export default function ScrollablePodcastList({ episodes }) {
    const scrollRef = useRef(null); 
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div 
            ref={scrollRef}
            className="w-full whitespace-nowrap scroll-smooth flex gap-[30px] cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", overflowY: "hidden" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {episodes.map((episode) => (
                <PodcastEpisode key={episode.episode_id} episode={episode} />
            ))}
        </div>
    );
}
