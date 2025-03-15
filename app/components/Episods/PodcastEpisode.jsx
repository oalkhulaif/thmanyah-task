export default function PodcastEpisode({ episode }) {
    const imageUrl = episode.avatar_url || "/placeholder.png";

    return (
        <div className="w-[260px] flex-shrink-0 flex flex-col items-center">
            {/* Podcast Image */}
            <div 
                className="relative w-full h-[180px] overflow-hidden shadow-lg"
                style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
            >
                <img 
                    src={imageUrl} 
                    alt={episode.name} 
                    className="w-full h-full object-cover bg-gray-300" 
                    style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} 
                />
            </div>

            {/* Podcast Details Box */}
            <div 
                className="bg-[#E1DCCC] p-[4px] shadow-md w-full flex flex-col items-center text-center justify-between"
                style={{ 
                    borderBottomLeftRadius: "20px", 
                    borderBottomRightRadius: "20px", 
                    height: "140px" 
                }}
            >
                <div className="flex flex-col w-full items-center">
                    <h3 
className="text-md font-bold break-words whitespace-normal leading-tight"                        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                    >
                        {episode.name}
                    </h3>
                    <p className="text-center w-full">{episode.podcast_name || "بودكاست غير معروف"}</p>
                </div>

                <div className="flex items-center justify-between w-full p-[16px]"> 
                    <button 
                        className="bg-[#DB3C1D] text-[#E1DCCC] p-[3px] font-bold flex items-center justify-center "
                        style={{ borderRadius: "6px", fontSize: "1.1rem", lineHeight: "1.5" }}
                    >
                        تشغيل
                    </button>
                    <span className="text-sm">⏳ {Math.floor((episode.duration || 0) / 60)} دقيقة</span>
                </div>
            </div>
        </div>
    );
}
