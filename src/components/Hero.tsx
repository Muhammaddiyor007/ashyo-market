// import heroImg from "../assets/heroImg.svg";

const Hero = () => {
  return (
    <div className="bg-[#F3F0F0] w-full mt-4">
      <div className="container flex flex-col sm:flex-row">
        <div className="flex flex-col items-center justify-center">
          <p className="font-black text-[40px]">
            Siz kutgan Xiaomi 12 Mi Laite
          </p>
          <p className="text-[#545D6A] text-[16px] mt-[6px]">
            Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
            uchun eng yaxshi arziydigan takliflarimizdan biridir!ii
          </p>
          <button className="bg-[#0F4A97] rounded-[6px] text-white text-[16px] px-12 py-[18px] mt-[22px]">
            Batafsil
          </button>
        </div>

        <div>
          {/* <img src={heroImg} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
