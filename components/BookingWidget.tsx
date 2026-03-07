"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DateRange, Range } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { ChevronDown, Plus, Minus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const CITIES = [
    { id: "agra", name: "Agra" },
    { id: "ajmer", name: "Ajmer" },
    { id: "ambala", name: "Ambala" },
    { id: "amritsar", name: "Amritsar" },
    { id: "ayodhya", name: "Ayodhya" },
    { id: "bhowali", name: "Bhowali" },
    { id: "dehradun", name: "Dehradun" },
    { id: "mussoorie", name: "Mussoorie" },
];

const PROPERTIES: Record<string, { id: string, name: string }[]> = {
    "agra": [
        { id: "agra-1", name: "Bhawna Clarks Inn" },
        { id: "agra-2", name: "Clarks Inn Suites" },
        { id: "agra-3", name: "Neel Clarks Inn Express" },
    ],
    "ajmer": [
        { id: "ajmer-1", name: "Clarks Collection Grand Sapphire" },
        { id: "ajmer-2", name: "Clarks Resort, Ajmer" },
    ],
    "ambala": [
        { id: "ambala-1", name: "Clarks Inn, Ambala" },
    ],
    "amritsar": [
        { id: "amritsar-1", name: "Bharawan Clarks Inn Express" },
        { id: "amritsar-2", name: "HK Clarks Inn" },
    ],
    "ayodhya": [
        { id: "ayodhya-1", name: "Clarks Inn Express, Ayodhya" },
    ],
    "bhowali": [
        { id: "bhowali-1", name: "Clarks Inn, Near Kainchi Dham" },
    ],
    "dehradun": [
        { id: "dehradun-1", name: "Clarks Inn Express, Dehradun" },
    ],
    "mussoorie": [
        { id: "mussoorie-1", name: "Starz Clarks Inn, Mussoorie" },
    ],
};

export default function BookingWidget() {
    const router = useRouter();
    
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedProperty, setSelectedProperty] = useState("");
    const [dateRange, setDateRange] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
            key: 'selection'
        }
    ]);
    
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedCity) params.append("city", selectedCity);
        if (selectedProperty) params.append("property", selectedProperty);
        if (dateRange[0].startDate) params.append("checkIn", dateRange[0].startDate.toISOString().split("T")[0]);
        if (dateRange[0].endDate) params.append("checkOut", dateRange[0].endDate.toISOString().split("T")[0]);
        params.append("rooms", rooms.toString());
        params.append("adults", adults.toString());
        params.append("children", children.toString());

        router.push(`/book?${params.toString()}`);
    };

    const formatDateDisplay = (date: Date | undefined) => {
        if (!date) return "Select Date";
        return format(date, "EEE, dd MMM yyyy");
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[1200px] mx-auto bg-white/95 backdrop-blur-md shadow-2xl rounded-sm p-2 relative z-30 border border-white/20"
            ref={widgetRef}
        >
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
                
                {/* City & Hotel Selection */}
                <div className="flex flex-col md:flex-row flex-[3] border-b lg:border-b-0 lg:border-r border-border-subtle/50">
                    {/* Destination/City */}
                    <div className="flex-1 relative border-b md:border-b-0 md:border-r border-border-subtle/50">
                        <div 
                            className="p-4 cursor-pointer hover:bg-background-offwhite transition-colors h-full flex flex-col justify-center"
                            onClick={() => toggleDropdown('city')}
                        >
                            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1">Destination</label>
                            <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${selectedCity ? 'text-text-main' : 'text-text-muted'}`}>
                                    {selectedCity ? CITIES.find(c => c.id === selectedCity)?.name : "Select City"}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-primary-gold transition-transform ${openDropdown === 'city' ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {openDropdown === 'city' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 border border-border-subtle mt-1 py-1 max-h-60 overflow-y-auto"
                                >
                                    {CITIES.map(city => (
                                        <div 
                                            key={city.id}
                                            className="px-4 py-2.5 text-sm hover:bg-background-offwhite cursor-pointer transition-colors text-text-main"
                                            onClick={() => {
                                                setSelectedCity(city.id);
                                                setSelectedProperty("");
                                                setOpenDropdown('hotel');
                                            }}
                                        >
                                            {city.name}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Hotel */}
                    <div className="flex-1 relative">
                        <div 
                            className={`p-4 h-full flex flex-col justify-center transition-colors ${!selectedCity ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-background-offwhite'}`}
                            onClick={() => selectedCity && toggleDropdown('hotel')}
                        >
                            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1">Hotel</label>
                            <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${selectedProperty ? 'text-text-main' : 'text-text-muted'}`}>
                                    {selectedProperty ? PROPERTIES[selectedCity]?.find(p => p.id === selectedProperty)?.name : "Select Hotel"}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-primary-gold transition-transform ${openDropdown === 'hotel' ? 'rotate-180' : ''}`} />
                            </div>
                        </div>

                        <AnimatePresence>
                            {openDropdown === 'hotel' && selectedCity && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 border border-border-subtle mt-1 py-1 max-h-60 overflow-y-auto"
                                >
                                    {PROPERTIES[selectedCity]?.map(hotel => (
                                        <div 
                                            key={hotel.id}
                                            className="px-4 py-2.5 text-sm hover:bg-background-offwhite cursor-pointer transition-colors text-text-main"
                                            onClick={() => {
                                                setSelectedProperty(hotel.id);
                                                setOpenDropdown('dates');
                                            }}
                                        >
                                            {hotel.name}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Date Selection */}
                <div className="flex flex-[3] flex-col md:flex-row border-b lg:border-b-0 lg:border-r border-border-subtle/50 relative">
                    <div 
                        className="flex-1 p-4 cursor-pointer hover:bg-background-offwhite transition-colors border-b md:border-b-0 md:border-r border-border-subtle/50 flex flex-col justify-center"
                        onClick={() => toggleDropdown('dates')}
                    >
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1">Check In</label>
                        <span className="text-sm font-medium text-text-main">{formatDateDisplay(dateRange[0].startDate)}</span>
                    </div>
                    <div 
                        className="flex-1 p-4 cursor-pointer hover:bg-background-offwhite transition-colors flex flex-col justify-center"
                        onClick={() => toggleDropdown('dates')}
                    >
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1">Check Out</label>
                        <span className="text-sm font-medium text-text-main">{formatDateDisplay(dateRange[0].endDate)}</span>
                    </div>

                    <AnimatePresence>
                        {openDropdown === 'dates' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-[calc(100%+8px)] left-0 lg:left-1/2 lg:-translate-x-1/2 bg-white shadow-2xl rounded-sm border border-border-subtle z-50 overflow-hidden"
                            >
                                <DateRange
                                    ranges={dateRange}
                                    onChange={(item) => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    months={typeof window !== 'undefined' && window.innerWidth > 1024 ? 2 : 1}
                                    direction="horizontal"
                                    minDate={new Date()}
                                    rangeColors={["#C5A059"]}
                                    showDateDisplay={false}
                                />
                                <div className="p-4 bg-background-offwhite border-t border-border-subtle flex justify-end">
                                    <button 
                                        onClick={() => setOpenDropdown('guests')}
                                        className="bg-primary-gold text-white px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Rooms & Guests */}
                <div className="flex-1 relative">
                    <div 
                        className="p-4 cursor-pointer hover:bg-background-offwhite transition-colors h-full flex flex-col justify-center"
                        onClick={() => toggleDropdown('guests')}
                    >
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1">Select Person</label>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-main whitespace-nowrap">
                                {rooms} Room, {adults + children} Guests
                            </span>
                            <ChevronDown className={`w-4 h-4 text-primary-gold transition-transform ${openDropdown === 'guests' ? 'rotate-180' : ''}`} />
                        </div>
                    </div>

                    <AnimatePresence>
                        {openDropdown === 'guests' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full right-0 w-72 bg-white shadow-2xl z-50 border border-border-subtle mt-1 p-6"
                            >
                                <div className="space-y-6">
                                    {/* Rooms */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-text-main">Rooms</span>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-4 text-center text-sm font-medium">{rooms}</span>
                                            <button onClick={() => setRooms(Math.min(10, rooms + 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Adults */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-text-main">Adults</span>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-4 text-center text-sm font-medium">{adults}</span>
                                            <button onClick={() => setAdults(Math.min(20, adults + 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Children */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm font-medium text-text-main block">Children</span>
                                            <span className="text-[10px] text-text-muted uppercase">Aged 0-12</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-4 text-center text-sm font-medium">{children}</span>
                                            <button onClick={() => setChildren(Math.min(10, children + 1))} className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:border-primary-gold transition-colors">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setOpenDropdown(null)}
                                    className="w-full bg-primary-gold text-white py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest mt-6 hover:bg-primary-dark transition-colors"
                                >
                                    Done
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Submit Button */}
                <div className="p-2">
                    <button 
                        onClick={handleSearch}
                        className="w-full lg:w-48 bg-primary-gold hover:bg-primary-dark text-white px-8 py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2 group"
                    >
                        <span>Book Now</span>
                        <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
