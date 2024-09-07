import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import usa from "../assets/united-states.svg"
const Footers = () => {
  return (
    <Footer bgDark>
      <div className="w-full text-[#81859F] bg-[#121212ff]">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className='flex justify-center items-center space-x-1 md:-ml-20 -mt-20'>
            <div className="flex items-center justify-center text-white text-2xl font-bold w-7 h-7  bg-blue-500 rounded-full ">
              F
            </div>
            <p className="self-center whitespace-nowrap text-xl font-semibold text-white">Funi<span className="text-[#1E99F5]">Flex</span></p>

          </div>
          <div>
            <Footer.Title className='text-[#FFF]' title="About US" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Master Plan</Footer.Link>
              <Footer.Link href="#">Jobs</Footer.Link>
              <Footer.Link href="#">Invest</Footer.Link>
              <Footer.Link href="#">Pressroom</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-[#FFF]' title="Explore EEVE" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Unlock my Robot Power</Footer.Link>
              <Footer.Link href="#">Starlight</Footer.Link>
              <Footer.Link href="#">Robot Platform</Footer.Link>
              <Footer.Link href="#">EEVE Roadmap</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-[#FFF]' title="Community & Support" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Willow X Community</Footer.Link>
              <Footer.Link href="#">Developer & Maker Access</Footer.Link>
              <Footer.Link href="#">Special Cases</Footer.Link>
            </Footer.LinkGroup>
          </div>

        </div>
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          <div className="mt-4 flex  flex-wrap space-x-2 md:space-x-3 sm:mt-0 sm:justify-center">
            <Link href="#">March22 Recap</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">General Terms</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="mt-4 flex items-center space-x-3 sm:mt-0 sm:justify-center">
            <img src={usa} alt="USA flag"  className='size-5'/>
            <span>United States (English)</span>
          </div>
          
        </div>
        <Footer.Copyright className='mx-auto p-4' href="#" by="All rights reserved™" year={2024} />
      </div>
    </Footer>
  );
};

export default Footers;