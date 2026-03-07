"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DateRange, Range } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar, Users, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingWidget() {
    const router = useRouter();
    
    const [dateRange, setDateRange] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 2)), // Default 2 nights
            key: 'selection'
        }
    ]);
    const [guests, setGuests] = useState(2);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside the calendar popover to close it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (dateRange[0].startDate) {
            params.append("checkIn", dateRange[0].startDate.toISOString().split("T")[0]);
        }
        if (dateRange[0].endDate) {
            params.append("checkOut", dateRange[0].endDate.toISOString().split("T")[0]);
        }
        params.append("guests", guests.toString());

        router.push(`/book?${params.toString()}`);
    };

    const formatDateDisplay = (date: Date | undefined) => {
        if (!date) return "Add Date";
        return format(date, "MMM dd, yyyy");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-sm p-4 relative z-30 flex flex-col md:flex-row items-center justify-between gap-4 -translate-y-1/2 border border-border-subtle"
        >
            {/* Date Selection Area */}
            <div className="flex-[2] w-full relative" ref={calendarRef}>
                <div 
                    className="flex items-center w-full border-b md:border-b-0 md:border-r border-border-subtle cursor-pointer hover:bg-background-offwhite transition-colors rounded-sm"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                    {/* Check In Display */}
                    <div className="flex-1 flex px-4 py-2">
                        <div className="flex items-center gap-3">
                            <Calendar className="text-primary-gold w-5 h-5" />
                            <div className="flex flex-col flex-1 pl-1">
                                <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Check In</span>
                                <span className="text-sm font-medium text-text-main mt-0.5">
                                    {formatDateDisplay(dateRange[0].startDate)}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Check Out Display */}
                    <div className="flex-1 flex px-4 py-2 border-l border-border-subtle/50">
                        <div className="flex items-center gap-3">
                            <Calendar className="text-primary-gold w-5 h-5 hidden sm:block" />
                            <div className="flex flex-col flex-1 pl-1">
                                <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Check Out</span>
                                <span className="text-sm font-medium text-text-main mt-0.5">
                                    {formatDateDisplay(dateRange[0].endDate)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dual Calendar Popover */}
                <AnimatePresence>
                    {isCalendarOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-4 bg-white shadow-2xl rounded-sm border border-border-subtle z-50 overflow-hidden"
                        >
                            <DateRange
                                ranges={dateRange}
                                onChange={(item) => setDateRange([item.selection])}
                                moveRangeOnFirstSelection={false}
                                months={typeof window !== 'undefined' && window.innerWidth > 768 ? 2 : 1}
                                direction="horizontal"
                                minDate={new Date()}
                                rangeColors={["#C5A059"]} // primary-gold
                                showDateDisplay={false}
                                showMonthAndYearPickers={false}
                            />
                            <div className="p-4 bg-background-offwhite border-t border-border-subtle flex justify-end">
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsCalendarOpen(false);
                                    }}
                                    className="bg-text-main text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Guests */}
            <div className="flex-1 w-full relative group">
                <div className="flex items-center gap-3 px-4 py-2 hover:bg-background-offwhite transition-colors cursor-pointer rounded-sm">
                    <Users className="text-primary-gold w-5 h-5" />
                    <div className="flex flex-col flex-1 pl-1">
                        <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Guests</span>
                        <select
                            className="text-sm font-medium text-text-main bg-transparent outline-none cursor-pointer appearance-none w-full mt-0.5"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Book Button */}
            <div className="w-full md:w-auto px-2 pb-2 md:pb-0">
                <button 
                    onClick={handleSearch}
                    className="w-full md:w-auto bg-primary-gold hover:bg-primary-dark text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap border border-primary-gold"
                >
                    Check Availability
                </button>
            </div>
        </motion.div>
    );
}
