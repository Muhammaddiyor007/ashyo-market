import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container bg-[#f9f9f9] px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 justify-between flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <h2 className="font-bold mb-2">Bizning ijtimoiy tarmoqlarda</h2>
          <div className="flex gap-2 flex-wrap mb-4">
            <div className="bg-white p-2 rounded">
              <FaFacebookF className="text-[#1877f2]" />
            </div>
            <div className="bg-white p-2 rounded">
              <FaYoutube className="text-[#ff0000]" />
            </div>
            <div className="bg-white p-2 rounded">
              <FaTelegramPlane className="text-[#0088cc]" />
            </div>
            <div className="bg-white p-2 rounded">
              <FaTwitter className="text-[#1da1f2]" />
            </div>
            <div className="bg-white p-2 rounded">
              <FaInstagram className="text-[#e1306c]" />
            </div>
          </div>

          <h2 className="font-bold mb-1">Mobil ilovani yuklab oling</h2>
          <div className="flex gap-3 flex-wrap">
            <button className="flex items-center gap-2 bg-[#edf2f7] px-4 py-2 rounded-xl text-sm font-normal">
              <FaApple />
              App Store
            </button>
            <button className="flex items-center gap-2 bg-[#edf2f7] px-4 py-2 rounded-xl text-sm font-normal">
              <FaAndroid />
              Google Play
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h2 className="font-bold mb-2">Menyu</h2>
          <div className="flex flex-col gap-1 text-sm">
            <span>Ashyo haqida</span>
            <span>Foydalanish shartlari</span>
            <span>Maxfiylik va xavfsizlik siyosati</span>
            <span>Mahsulotlarni va tovarlarni qaytarish siyosati</span>
            <span>Biz bilan aloqa</span>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h2 className="font-bold mb-2">Aloqa</h2>
          <p className="font-bold text-blue-600 mb-2">+998 (71) 123-45-67</p>
          <p className="mb-1 text-sm">Savolingiz bormi?</p>
          <div className="relative">
            <input
              type="text"
              placeholder="O'zingiz qiziqtirgan savollarni bering"
              className="w-full py-3 px-4 bg-[#f1f2f4] rounded-xl pr-10 outline-none"
            />
            <FaRegCommentDots className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center md:text-left text-sm text-gray-500">
        © 2022 Ashyo ro‘hatdan o‘tgan litsenzalangan bu brend.
      </div>
    </div>
  );
}
