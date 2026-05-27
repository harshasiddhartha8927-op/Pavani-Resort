import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Compass, Star, CheckCircle, MailOpen } from "lucide-react";
import { rooms } from "../../assets/resortData";
import SectionHeading from "../SectionHeading";
import MagneticButton from "../MagneticButton";

export default function BookingSection() {
  const todayStr = new Date().toISOString().split("T")[0];
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 4);
  const nextWeekStr = nextWeek.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(nextWeekStr);
  const [selectedSuite, setSelectedSuite] = useState(rooms[0].name);
  const [guests, setGuests] = useState("2 Adults");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nights, setNights] = useState(4);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Find currently selected room details
  const roomDetails = rooms.find((r) => r.name === selectedSuite) || rooms[0];
  const rateNumeric = parseInt(roomDetails.price.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (checkIn && checkOut) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      if (d2 > d1) {
        const diffTime = Math.abs(d2.getTime() - d1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setNights(diffDays);
      } else {
        setNights(1);
      }
    }
  }, [checkIn, checkOut]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Please fill in your name and email so our concierge can contact you.");
      return;
    }
    setSubmitted(true);
  };

  const totalEstimate = rateNumeric * nights;

  return (
    <section id="booking" className="relative bg-night py-24 md:py-32 scroll-mt-10">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sanctuary Reservation"
          title="Reserve your shoreline story."
          copy="Select your preferred suite, adjust dates, and tailor your arrival. Our lead concierge will contact you within 2 hours to finalize your reservation details."
          className="mb-14"
        />

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Interactive Booking Form */}
              <form
                onSubmit={handleSubmit}
                className="glass-panel p-6 md:p-8 rounded-none flex flex-col justify-between gap-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Anika Rao"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 px-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="anika@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 px-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Check-In */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Check-In Date
                    </label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-4 text-ambered pointer-events-none" size={16} />
                      <input
                        type="date"
                        min={todayStr}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 pl-12 pr-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Check-Out */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Check-Out Date
                    </label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-4 text-ambered pointer-events-none" size={16} />
                      <input
                        type="date"
                        min={checkIn || todayStr}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 pl-12 pr-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Room Select */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Sanctuary Suite
                    </label>
                    <div className="relative flex items-center">
                      <Compass className="absolute left-4 text-ambered pointer-events-none" size={16} />
                      <select
                        value={selectedSuite}
                        onChange={(e) => setSelectedSuite(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 pl-12 pr-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {rooms.map((room) => (
                          <option key={room.name} value={room.name} className="bg-night text-linen">
                            {room.name} ({room.price}/night)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests Select */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                      Guests count
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-4 text-ambered pointer-events-none" size={16} />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-night/50 border border-linen/10 pl-12 pr-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1 Adult" className="bg-night text-linen">1 Adult</option>
                        <option value="2 Adults" className="bg-night text-linen">2 Adults</option>
                        <option value="3 Adults" className="bg-night text-linen">3 Adults</option>
                        <option value="4 Adults (2 Suites)" className="bg-night text-linen">4 Adults (2 Suites)</option>
                        <option value="2 Adults & 1 Child" className="bg-night text-linen">2 Adults & 1 Child</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-champagne/42 mb-2 font-bold">
                    Special Requests / Concierge notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., Sunrise terrace dining request, private airport transfers, dietary restrictions..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-night/50 border border-linen/10 px-4 py-3 text-linen text-sm focus:border-ambered/60 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-linen/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-champagne/42 font-bold">
                    * No payment required at this stage.
                  </div>
                  <MagneticButton type="submit">
                    Request Sanctuary
                  </MagneticButton>
                </div>
              </form>

              {/* Dynamic Interactive Visual Preview Card */}
              <div className="flex flex-col gap-6">
                <div className="border border-linen/10 bg-cocoa overflow-hidden flex-1 flex flex-col">
                  {/* Live Room Image Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-night">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={roomDetails.image}
                        src={roomDetails.image}
                        alt={roomDetails.name}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-transparent" />
                    <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-xs uppercase tracking-[0.2em] text-ambered font-bold">
                      {roomDetails.size}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-display text-4xl text-linen leading-none">
                          {roomDetails.name}
                        </h3>
                        <span className="font-display text-2xl text-ambered">
                          {roomDetails.price} <span className="text-sm text-champagne/42">/ night</span>
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-champagne/64">
                        {roomDetails.detail}
                      </p>

                      <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.16em] text-champagne/56">
                        <li className="flex items-center gap-2">
                          <Star size={12} className="text-ambered" /> Private Shoreline Access
                        </li>
                        <li className="flex items-center gap-2">
                          <Star size={12} className="text-ambered" /> Inclusive Daily Ayurvedic Breakfast
                        </li>
                        <li className="flex items-center gap-2">
                          <Star size={12} className="text-ambered" /> Complementary Airport Transfers
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-linen/10 pt-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-champagne/42 uppercase tracking-[0.2em]">
                          Nights Curated
                        </span>
                        <span className="text-linen font-bold font-display text-xl">
                          {nights} {nights === 1 ? "Night" : "Nights"}
                        </span>
                      </div>
                      <div className="flex items-end justify-between border-t border-linen/5 pt-4">
                        <span className="text-ambered uppercase tracking-[0.2em] font-bold text-xs">
                          Estimated Total
                        </span>
                        <span className="font-display text-4xl text-ambered font-semibold">
                          ${totalEstimate.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Successful Sanctuary RequestState */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="glass-panel p-8 md:p-12 text-center max-w-3xl mx-auto rounded-none relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ambered via-clay to-ambered" />
              <div className="mx-auto h-20 w-20 rounded-full border border-ambered/30 bg-ambered/5 grid place-items-center mb-8">
                <MailOpen size={36} className="text-ambered animate-bounce" />
              </div>

              <h3 className="font-display text-4xl md:text-5xl text-linen mb-4">
                Your shoreline sanctuary awaits.
              </h3>
              <p className="text-champagne/68 text-base md:text-lg max-w-xl mx-auto leading-8 mb-10">
                A personal inquiry for the <strong className="text-ambered">{selectedSuite}</strong> has been registered under your name, <strong>{fullName}</strong>.
              </p>

              <div className="border-t border-b border-linen/10 py-8 mb-10 text-left max-w-xl mx-auto">
                <p className="font-display text-2xl text-linen mb-4">A Note from the Concierge</p>
                <p className="text-champagne/56 text-sm leading-7 mb-6 font-serif italic">
                  "Dear {fullName.split(" ")[0] || "Guest"}, we are honored to receive your reservation inquiry for {nights} nights from {checkIn} to {checkOut}. Pavani Resorts is designed as a slow-paced haven, and we are preparing to curate your shoreline moments. I will personally review your preferences and reach out within 2 hours to confirm your custom transfers, private plunges, and spa requirements."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-bark grid place-items-center font-display text-lg text-ambered font-semibold border border-ambered/20">
                    DV
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-linen">David Vance</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/42">Head of Concierge, Pavani Resorts</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFullName("");
                  setEmail("");
                  setSpecialRequests("");
                }}
                className="rounded-full border border-linen/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-champagne/60 hover:text-ambered hover:border-ambered transition-colors"
              >
                Create Another Request
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
