import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  FaHeart,
  FaEnvelope,
  FaUserCircle,
  FaBalanceScale,
  FaSearch,
} from "react-icons/fa";
import logo from "../../public/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthModal from "./AuthModal"; // Faqat import qilib chaqirilmoqda

interface Category {
  id: number;
  name: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get(
    "https://api.ashyo.fullstackdev.uz/categories/all?limit=0"
  );
  return data;
};

const translations = {
  uz: {
    location: "📍 Toshkent",
    about: "Biz haqimizda",
    products: "Mahsulotlar",
    contacts: "Kontaktlar",
    phone: "+998 (71) 123-45-67",
    language: "Uz",
    category: "Kategoriya",
    loading: "Yuklanmoqda...",
    error: "Xatolik...",
    searchPlaceholder: "Nimani izlayapsiz?",
    navItems: [
      "Aksiyalar",
      "Smartfonlar",
      "Noutbooklar",
      "Kondetsionerlar",
      "Telivizorlar",
      "Muzlatgichlar",
      "Kir yuvish mashinalari",
    ],
  },
  ru: {
    location: "📍 Ташкент",
    about: "О нас",
    products: "Продукты",
    contacts: "Контакты",
    phone: "+998 (71) 123-45-67",
    language: "Рус",
    category: "Категории",
    loading: "Загрузка...",
    error: "Ошибка...",
    searchPlaceholder: "Что вы ищете?",
    navItems: [
      "Акции",
      "Смартфоны",
      "Ноутбуки",
      "Кондиционеры",
      "Телевизоры",
      "Холодильники",
      "Стиральные машины",
    ],
  },
  en: {
    location: "📍 Tashkent",
    about: "About Us",
    products: "Products",
    contacts: "Contacts",
    phone: "+998 (71) 123-45-67",
    language: "EN",
    category: "Category",
    loading: "Loading...",
    error: "Error...",
    searchPlaceholder: "What are you looking for?",
    navItems: [
      "Sales",
      "Smartphones",
      "Laptops",
      "Air Conditioners",
      "TVs",
      "Fridges",
      "Washing Machines",
    ],
  },
};

export default function Header() {
  const [lang, setLang] = React.useState<"uz" | "ru" | "en">("uz");
  const [showCategory, setShowCategory] = React.useState(false);
  const [showLang, setShowLang] = React.useState(false);
  const [showAuth, setShowAuth] = React.useState(false);

  const t = translations[lang];

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Yuqori bo'lim */}
        <div className="hidden sm:flex justify-between items-center bg-gray-100 px-4 py-2 text-sm border">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <span>{t.location}</span>
            <span className="cursor-pointer">{t.about}</span>
            <span className="cursor-pointer">{t.products}</span>
            <span className="cursor-pointer">{t.contacts}</span>
          </div>
          <div className="relative flex items-center gap-4">
            <span>{t.phone}</span>
            <span className="cursor-pointer" onClick={() => setShowLang(!showLang)}>
              {t.language} ⌄
            </span>
            {showLang && (
              <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded text-sm z-20">
                <div onClick={() => setLang("uz")} className="px-4 py-2 hover:bg-gray-200">
                  Uzbek
                </div>
                <div onClick={() => setLang("ru")} className="px-4 py-2 hover:bg-gray-200">
                  Русский
                </div>
                <div onClick={() => setLang("en")} className="px-4 py-2 hover:bg-gray-200">
                  English
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logotip + Qidiruv + Iconlar */}
        <div className="w-full bg-white shadow-sm">
          <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex w-full items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <img src={logo} alt="" />
                <h1 className="text-4xl text-[#134E9B] font-bold">Ashyo</h1>
                <p className="ml-4 text-[#203F68] text-sm font-semibold flex sm:hidden">
                  +998 (71) 123-45-67
                </p>
                <GiHamburgerMenu className="flex sm:hidden ml-2" />
              </div>

              <div className="flex items-center gap-2 sm:gap-4 flex-grow sm:justify-center w-full sm:w-auto">
                <div className="relative">
                  <button
                    onClick={() => setShowCategory(!showCategory)}
                    className="border px-4 py-2 rounded text-sm bg-[#134E9B] text-white font-semibold"
                  >
                    {t.category}
                  </button>
                  {showCategory && (
                    <div className="absolute mt-2 bg-white shadow-md rounded text-sm z-10 w-40">
                      {isLoading ? (
                        <div className="px-4 py-2 text-gray-500">{t.loading}</div>
                      ) : isError ? (
                        <div className="px-4 py-2 text-red-500">{t.error}</div>
                      ) : (
                        categories?.map((cat) => (
                          <div
                            key={cat.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {cat.name}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center bg-gray-100 px-3 py-1 rounded w-full">
                  <input
                    className="bg-transparent w-full outline-none text-sm py-2"
                    placeholder={t.searchPlaceholder}
                  />
                  <FaSearch className="text-white bg-[#134E9B] p-2 size-10 rounded-[5px]" />
                </div>
              </div>

              <div className="items-center gap-2 sm:gap-4 text-lg hidden md:flex">
                {[FaBalanceScale, FaHeart, FaEnvelope, FaUserCircle].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-[#EBEFF3] rounded cursor-pointer"
                    onClick={() => Icon === FaUserCircle && setShowAuth(true)}
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pastgi navigatsiya */}
        <div className="hidden sm:flex flex-wrap justify-between bg-white px-4 py-2 text-sm gap-2">
          {t.navItems.map((item, idx) => (
            <span key={idx} className="cursor-pointer hover:underline">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}
