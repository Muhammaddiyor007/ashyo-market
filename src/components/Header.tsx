import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  FaHeart, FaEnvelope, FaUserCircle, FaBalanceScale, FaSearch,
} from "react-icons/fa";

interface Category {
  id: number;
  name: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get("https://api.ashyo.fullstackdev.uz/categories/all?limit=0");
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
    navItems: ["Aksiyalar", "Smartfonlar", "Noutbooklar", "Kondetsionerlar", "Telivizorlar", "Muzlatgichlar", "Kir yuvish mashinalari"],
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
    navItems: ["Акции", "Смартфоны", "Ноутбуки", "Кондиционеры", "Телевизоры", "Холодильники", "Стиральные машины"],
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
    navItems: ["Sales", "Smartphones", "Laptops", "Air Conditioners", "TVs", "Fridges", "Washing Machines"],
  },
};

export default function Header() {
  const [lang, setLang] = React.useState<"uz" | "ru" | "en">("uz");
  const t = translations[lang];

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [showCategory, setShowCategory] = React.useState(false);
  const [showLang, setShowLang] = React.useState(false);

  const toggleCategory = () => setShowCategory(!showCategory);
  const toggleLang = () => setShowLang(!showLang);

  return (
    <div className="container">
      {/* Top bar */}
      <div className="hidden sm:flex justify-between items-center bg-gray-100 px-4 py-2 text-sm">
        <div className="flex gap-4">
          <span>{t.location}</span>
          <span className="cursor-pointer">{t.about}</span>
          <span className="cursor-pointer">{t.products}</span>
          <span className="cursor-pointer">{t.contacts}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>{t.phone}</span>
          <span className="cursor-pointer" onClick={toggleLang}>
            {t.language} ⌄
          </span>
          {showLang && (
            <div className="absolute mt-2 bg-white shadow-md rounded text-sm">
              <div onClick={() => setLang("uz")} className="px-4 py-2 hover:bg-gray-200">Uzbek</div>
              <div onClick={() => setLang("ru")} className="px-4 py-2 hover:bg-gray-200">Русский</div>
              <div onClick={() => setLang("en")} className="px-4 py-2 hover:bg-gray-200">English</div>
            </div>
          )}
        </div>
      </div>

      {/* Middle header */}
      <div className="w-full bg-white shadow-sm">
        <div className="flex flex-col items-center gap-2 p-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl text-[#134E9B] font-bold">Ashyo</h1>
            
            <div className="flex items-center gap-4 flex-grow justify-center">
              <div className="relative">
                <button
                  onClick={toggleCategory}
                  className="border px-[20px] py-[10px] rounded text-sm bg-[#134E9B] text-white font-semibold"
                >
                  {t.category}
                </button>
                {showCategory && (
                  <div className="absolute mt-2 bg-white shadow-md rounded text-sm z-10">
                    {isLoading ? (
                      <div className="px-4 py-2 text-gray-500">{t.loading}</div>
                    ) : isError ? (
                      <div className="px-4 py-2 text-red-500">{t.error}</div>
                    ) : (
                      categories?.map((cat) => (
                        <div key={cat.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {cat.name}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

              <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1 rounded w-72">
                <input
                  className="bg-transparent w-full outline-none text-sm py-[10px]"
                  placeholder={t.searchPlaceholder}
                />
                <FaSearch className="text-white bg-[#134E9B] px-2 py-2 ] size-10 rounded-[5px]" />
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#] text-lg">
              <div className="px-2 py-2 bg-[#EBEFF3]">
              <FaBalanceScale className="relative" />

              </div>
              <div className="px-2 py-2 bg-[#EBEFF3]">
              <FaHeart className="relative" />

              </div>
              <div className="px-2 py-2 bg-[#EBEFF3]">
              <FaEnvelope className="relative" />

              </div>
              <div className="px-2 py-2 bg-[#EBEFF3]">
              <FaUserCircle />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 bg-white px-4 py-2 text-sm">
        {t.navItems.map((item, idx) => (
          <span
            key={idx}
            className="cursor-pointer hover:underline"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
