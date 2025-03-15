export default function ShowCard({ show, isSelected, onClick }) {
    return (
        <div
            className={`relative flex-shrink-0 transition-all duration-1000 cursor-pointer ${
                isSelected ? "w-[280px] h-[360px]" : "w-[240px] h-[320px] opacity-60"
            } mx-[15px]`}
            onClick={onClick}
            style={{
                borderRadius: "20px",
                filter: isSelected ? "none" : "grayscale(70%)",
                transition: "all 0.8s ease-in-out",
            }}
        >
            {/* Podcast Image */}
            <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover rounded-[20px]" 
            />

            {/* Podcast Title */}
            <div 
                className="text-center rounded-b-[20px]" 
            >
                <h2 className="font-bold">{show.title}</h2>
            </div>
        </div>
    );
}
