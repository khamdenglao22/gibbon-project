"use client";
import { useEffect } from "react";
import Image from "next/image";
import SubBanner from "@/components/SubBanner";
import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";
import { Calendar, CheckCheck, ReceiptText } from "lucide-react";

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <SubBanner
        title="Honeymoon Tour"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_3fr] gap-16">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                transform: `translateX(${mounted ? 0 : -50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.3s",
              }}
            >
              <Image
                width={2000}
                height={2000}
                src="/images/honeymoon-tour-01.jpg"
                alt="Mushrooms in forest"
              />
            </div>
            <div
              className="space-y-4"
              style={{
                transform: `translateX(${mounted ? 0 : 50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.5s",
              }}
            >
              <h1 className="text-xl font-bold">
                The Ultimate Airborne loop (2 days, 1 night)
              </h1>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Your group of up to twelve people departs Huaysai office soon
                after 8 am for two days and one night in treehouses within the
                Nam Kan National Park. The return time on the last day is
                between 3 and 4 pm.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The tour starts after a one-hour drive from Huaysai. Access walk
                is steep for over an hour, the tour is therefore recommended for
                trekkers from 10 to 60 years of age and in good physical shape.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                A series of very long ziplines flies you from mountain to
                mountain towards the heart of the Nam Kan National Park, all the
                way to the Tree King - the biggest tree to be found today in
                Laos. Your host tree in which you will spend the night stands
                right next to this giant.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                As gibbons rarely come to that area, your chances of sighting
                are very low. But for those who love flying through the canopies
                with stunning views and beautiful trees, this zipline-packed
                &#39;airborne&#39; program will be a lot of fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-end">
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="currency-label">Currency</InputLabel>
              <Select
                labelId="currency-label"
                id="currency"
                value={currency}
                label="Currency"
                onChange={handleChange}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="LAK">LAK</MenuItem>
                <MenuItem value="THB">THB</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="grid md:grid-cols-[1fr_3fr] gap-5">
            <div>
              <h1 className="text-sm font-bold mb-2">Date:</h1>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
              </LocalizationProvider>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-4">
                New Booking: Sat Nov 15, 2025
              </h1>
              <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-5  items-start">
                <div>
                  <button className="px-3 py-2 bg-green-300 hover:bg-green-400 cursor-pointer rounded w-full">
                    11 available
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 w-full group text-gray-600 rounded cursor-pointer hover:bg-gray-200">
                    <CheckCheck className="group-hover:text-blue-400" />
                    <span className="font-bold group-hover:text-blue-400 text-sm">
                      Book Now
                    </span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 w-full group text-gray-600 rounded cursor-pointer hover:bg-gray-200">
                    <ReceiptText className="group-hover:text-blue-400" />
                    <span className="font-bold group-hover:text-blue-400 text-sm">
                      Details
                    </span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 w-full group text-gray-600 rounded cursor-pointer hover:bg-gray-200">
                    <Calendar className="group-hover:text-blue-400" />
                    <span className="font-bold group-hover:text-blue-400 text-sm">
                      Availability
                    </span>
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-xl font-medium">
                      Giant loop (2 Days / 1 Night)
                    </h1>
                    <h2 className="font-bold text-gray-700">&#8364;200,000</h2>
                  </div>
                  <p className="font-bold text-gray-800 leading-relaxed text-[16px]">
                    For safety reasons, we do not allow people over 110 kg (243
                    lb).
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    <span className="font-bold text-gray-800">
                      The minimum age is 10 and the recommended maximum age is
                      60.
                    </span>
                    A copy of the passport may be required at check-in.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    <span className="font-bold text-gray-800">
                      Booking: The calendar date is the starting date for a 2
                      day tour.
                    </span>
                    Online reservations must be made the day before (5 pm at the
                    latest). Last-minute...{" "}
                    <Link href={"/"} className="text-blue-600">
                      (Read More)
                    </Link>
                  </p>
                </div>
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    transform: `translateX(${mounted ? 0 : -50}px)`,
                    opacity: mounted ? 1 : 0,
                    transition: "all 0.9s ease-out 0.3s",
                  }}
                >
                  <Image
                    width={2000}
                    height={2000}
                    src="/images/honeymoon-tour-02.jpeg"
                    alt="Mushrooms in forest"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
