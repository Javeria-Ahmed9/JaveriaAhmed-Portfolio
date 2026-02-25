import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id='Contact' className='px-6 md:px-20 py-24 border-t border-white/5'>
      <p className='text-blue-400 text-sm tracking-widest uppercase mb-2'>Get In Touch</p>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Contact</h2>
      <p className='text-gray-400 mb-10 max-w-md'>
        I am open to opportunities and collaborations. Feel free to reach out anytime.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 mb-12'>
        <a
          href='mailto:jahmedkhan911@gmail.com'
          className='flex items-center gap-3 bg-white/3 border border-white/8 hover:border-white/20 text-gray-300 px-5 py-3 rounded-xl text-sm transition-colors'
        >
          <MdOutlineEmail size={18} /> jahmedkhan911@gmail.com
        </a>
        <a
          href='https://www.linkedin.com/in/javeria-ahmed09'
          target='_blank'
          className='flex items-center gap-3 bg-white/3 border border-white/8 hover:border-white/20 text-gray-300 px-5 py-3 rounded-xl text-sm transition-colors'
        >
          <FaLinkedin size={16} /> linkedin.com/in/javeria-ahmed09
        </a>
        <a
          href='https://github.com/Javeria-Ahmed9'
          target='_blank'
          className='flex items-center gap-3 bg-white/3 border border-white/8 hover:border-white/20 text-gray-300 px-5 py-3 rounded-xl text-sm transition-colors'
        >
          <FaGithub size={16} /> github.com/Javeria-Ahmed9
        </a>
      </div>

      <p className='text-gray-600 text-sm'>© 2024 Javeria Ahmed. All rights reserved.</p>
    </section>
  );
};

export default Footer;