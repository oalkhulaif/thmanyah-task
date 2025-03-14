"use client";
import { useEffect, useRef } from "react";

export default function Banner() {
    const adImages = [
        "/ad-1.webp",
        "/ad-2.webp",
        "/ad-3.webp",
        "/ad-4.webp",
        "/ad-5.webp",
        "/ad-6.webp",
        "/ad-7.webp",
        "/ad-8.webp"
    ];
    
    return (
        <section className="bg-[#1E1E1E] text-white text-center px-6 min-h-[425px] flex flex-col justify-start relative overflow-hidden">
            
            <div className="w-full h-14 overflow-hidden bg-[#1E1E1E] mb-6 flex items-center">
                <div className="flex items-center animate-seamless-scroll flex-nowrap">
                    {[...adImages, ...adImages].map((ad, index) => (
                        <img 
                            key={`${ad}-${index}`}
                            src={ad} 
                            alt={`Ad ${(index % adImages.length) + 1}`}
                            className="h-6 w-auto object-contain mx-2 shrink-0"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto z-10 pt-6 mt-[50px]">
                <h1 
                    className="text-[#E1DCCC] font-extrabold mb-8"
                    style={{ fontSize: "5rem", lineHeight: "1.2" }} 
                >
                    اشترك في ثمانية
                </h1>

                <p 
                    className="text-[#E1DCCC] mb-[20px]"
                    style={{ fontSize: "2rem", lineHeight: "1.5" }} 
                >
                    احصل على تجربة استماع فريدة للبودكاست والمزيد من المحتوى المميز
                </p>
                <a
    href="https://thmanyah.com/subscribe"
    className="bg-[#3e3c3c] text-[#E1DCCC] px-8 py-4 text-3xl font-bold flex items-center justify-center gap-6 w-fit mx-auto hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-103"
    style={{ borderRadius: "10px" ,fontSize: "1.5rem", lineHeight: "1.5"}} 
>
    <span>اشترك الآن 🌟</span>
</a>




            </div>
        </section>
    );
}
