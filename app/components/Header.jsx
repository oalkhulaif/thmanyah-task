import SearchBar from "./SearchBar";

export default function Header() {
    return (
      <header className="bg-[#E1DCCC] flex items-center px-[10px] min-h-[70px]">
        
        <div className="flex items-center gap-[30px] ">  
          <img 
            src="/thamnyah-logo.webp" 
            alt="logo"  
            className="w-auto" 
            style={{ height: "50px", maxHeight: "100px" }}
          />
          <SearchBar/>
        </div>

        <div className="mr-auto"> 
          <a
            href="https://thmanyah.com"
            className="border border-red-500 text-[#DD7258] text-xl font-medium px-6 py-3 rounded-full transition flex items-center justify-center"
            style={{ minWidth: "120px", minHeight: "40px" }}
          >
            الذهاب لموقع ثمانية
          </a>
        </div>
      </header>
    );
}
