"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as unknown as any }
};

function BookingForm() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkIn: searchParams.get("checkIn") || "",
        checkOut: searchParams.get("checkOut") || "",
        guests: searchParams.get("guests") || "2",
        specialRequests: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1500));
            // In the future, send this data to an API route to email the admin or save it
            
            setIsSuccess(true);
            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (err: any) {
            setError(err.message || "Failed to submit booking. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-offwhite px-4">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-12 text-center rounded-sm shadow-2xl max-w-md w-full border-t-4 border-primary-gold"
                >
                    <span className="material-symbols-outlined text-6xl text-primary-gold mb-6">check_circle</span>
                    <h2 className="text-3xl font-serif text-text-main mb-4">Request Received</h2>
                    <p className="text-text-muted mb-8 font-light leading-relaxed">
                        Thank you for your interest. Our reservations team will contact you shortly to confirm your booking details.
                    </p>
                    <p className="text-xs text-text-light uppercase tracking-widest">Redirecting to home...</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-offwhite pb-24">
            {/* Hero Banner Section */}
            <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[350px] mb-12">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)] z-10" />
                <Image 
                    src="/v2-2.jpeg" 
                    alt="Atheva Resort Booking" 
                    fill
                    className="object-fill"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-20 px-4">
                    <motion.div 
                        className="text-center"
                        {...fadeInUp}
                    >
                        <span className="text-primary-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border-b border-primary-gold/50 pb-1 px-4 inline-block mb-6 bg-black/30 backdrop-blur-sm rounded-sm">
                            Reservations
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-md">Complete Your Booking</h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <motion.div 
                    className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-border-subtle"
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-serif text-text-main mb-8 border-b border-border-subtle pb-4">Guest Details</h2>
                    
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 mb-6 rounded-sm text-sm border border-red-100 flex items-center gap-2">
                            <span className="material-symbols-outlined">error</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">First Name *</span>
                                <input required name="firstName" value={formData.firstName} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" placeholder="Jane" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Last Name *</span>
                                <input required name="lastName" value={formData.lastName} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" placeholder="Doe" />
                            </label>
                        </motion.div>
                        
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address *</span>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" placeholder="jane@example.com" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone Number *</span>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" placeholder="+1 (555) 000-0000" />
                            </label>
                        </motion.div>

                        <motion.h3 
                            className="text-lg font-serif text-text-main pt-6 border-b border-border-subtle pb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Stay Details
                        </motion.h3>
                        
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Check In</span>
                                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Check Out</span>
                                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Guests</span>
                                <select name="guests" value={formData.guests} onChange={handleChange} className="border-b border-text-light/30 py-2 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light">
                                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </label>
                        </motion.div>

                        <motion.label 
                            className="flex flex-col gap-2 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Special Requests</span>
                            <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3} className="border border-text-light/30 p-3 focus:outline-none focus:border-primary-gold transition-colors bg-transparent font-light resize-none mt-1" placeholder="Any dietary requirements, celebrations, or specific needs?"></textarea>
                        </motion.label>

                        <motion.button 
                            type="submit" 
                            disabled={isSubmitting}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="w-full mt-6 bg-primary-gold hover:bg-primary-dark disabled:bg-primary-light text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-md flex justify-center items-center gap-2 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {isSubmitting ? "Processing..." : "Book Now"}
                            {!isSubmitting && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default function BookPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background-offwhite flex items-center justify-center"><p className="text-text-muted animate-pulse">Loading booking details...</p></div>}>
            <BookingForm />
        </Suspense>
    );
}
