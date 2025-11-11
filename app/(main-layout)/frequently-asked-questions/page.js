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
import { ChevronDown, ChevronUp } from "lucide-react";

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

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs = [
    {
      id: 1,
      question: "How do I travel from/to Chiang Rai (or abroad)?",
      answer:
        "Chiang Rai, Thailand, is a popular gateway to northern Laos. You can cross the border at Huay Xai via the Mekong River. From Chiang Rai, take a bus to Chiang Khong (about 2 hours), then cross the Thai-Lao Friendship Bridge to Huay Xai. From there, you can take a slow boat (2 days) or speedboat (6 hours) to Luang Prabang. Alternatively, fly from Chiang Rai International Airport to various Lao destinations.",
    },
    {
      id: 2,
      question: "How do I travel from/to Chiang Mai?",
      answer:
        "From Chiang Mai, Thailand, you have several options. Take a bus to Chiang Khong (6-7 hours), cross to Huay Xai, then travel by boat to Luang Prabang. You can also fly directly from Chiang Mai International Airport to Luang Prabang or Vientiane. Overland routes through Thailand via Nong Khai to Vientiane are also popular, taking about 12-14 hours by bus.",
    },
    {
      id: 3,
      question: "How do I travel from/to Luang Prabang?",
      answer:
        "Luang Prabang has an international airport with flights to Vientiane, Bangkok, Chiang Mai, Hanoi, and Siem Reap. By road, you can take buses to Vientiane (10-11 hours), Vang Vieng (6-7 hours), or northern destinations. The scenic slow boat from Huay Xai takes 2 days. Minivans and VIP buses offer more comfortable overland options to major cities.",
    },
    {
      id: 4,
      question: "How do I travel from/to Vientiane?",
      answer:
        "Vientiane, the capital, is well-connected internationally. Wattay International Airport has flights throughout Southeast Asia. The Thai-Lao Friendship Bridge connects to Nong Khai, Thailand (20km away), accessible by bus or taxi. International buses run to Bangkok, Hanoi, and Chinese cities. Domestic buses connect to all major Lao cities including Luang Prabang, Vang Vieng, Pakse, and Savannakhet.",
    },
    {
      id: 5,
      question: "How do I travel from/to Vang Vieng?",
      answer:
        "Vang Vieng sits between Vientiane and Luang Prabang on Route 13. Buses from Vientiane take 3-4 hours, while buses from Luang Prabang take 6-7 hours. Minivans offer faster, more comfortable options. Most guesthouses and travel agencies can arrange tickets. The town is small and walkable, though tuk-tuks and bicycle rentals are available for exploring surrounding areas.",
    },
    {
      id: 6,
      question: "How do I travel from/to Luang Namtha or Nateuy?",
      answer:
        "Luang Namtha in northern Laos is accessible by bus from Luang Prabang (9-10 hours), Huay Xai (4-5 hours), or Oudomxai (3 hours). Luang Namtha Airport has limited domestic flights. The town serves as a base for trekking and visiting ethnic villages. Nateuy (or Muang Nateuy) is a smaller district in Luang Namtha Province, reachable by local buses or hired vehicles from Luang Namtha town.",
    },
    {
      id: 7,
      question: "Are the tree houses the world highest?",
      answer:
        "The Gibbon Experience in Bokeo Nature Reserve, near Huay Xai, features some of the world's highest tree houses, built 40-50 meters (130-165 feet) above the ground in the rainforest canopy. While there may be other tall tree houses globally, the Gibbon Experience is renowned for offering one of the most dramatic elevated accommodations. Guests zipline between tree houses and can observe black-crested gibbons in their natural habitat.",
    },
  ];

  return (
    <>
      <SubBanner
        title="Frequently Asked Questions"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-2xl text-emerald-600 mt-1">+</span>
                    <span className="text-lg font-medium text-gray-800 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems[faq.id] ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems[faq.id]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 pl-16 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
