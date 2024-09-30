import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h4 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h4>
        <p className="text-sm md:text-2xl tracking-tight my-10 ">
          I am a motivated individual, always eager to take on new challenges.
          With a passion for learning I am dedicated to delivering high-quality
          results. With a positive attitude and a growth mindset, I am ready to
          make a meaningful contribution and achieve great things..
        </p>

        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a
            href="https://drive.google.com/file/d/14xr3m58MRW6M5j_Ztd9ghAsrNjRKsGvY/view?usp=sharing"
            target="_main"
          >
            Resume
          </a>
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
