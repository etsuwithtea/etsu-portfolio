import './index.css';
import mainProfile from './assets/mainprofile.jpg';
import myProfile from './assets/myprofile.jpg';

const SOCIALS = [
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/etsuwithtea/' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/etsuwithtea' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/etsuwithtea' },
];
const PROJECTS = [
  { title: 'The Vintage', img: '', link: '#' },
  { title: 'Agatha', img: '', link: '#' },
  { title: 'Marco Gills', img: '', link: '#' },
  { title: 'Moziak', img: '', link: '#' },
];
const SERVICES = [
  { title: 'UI/UX Design', desc: 'Modern, user-centered interfaces for web & mobile.' },
  { title: 'Brand Identity', desc: 'Logo, color, and visual system for your brand.' },
  { title: 'Web Development', desc: 'Responsive, fast, and accessible websites.' },
  { title: 'Consulting', desc: 'Design strategy and product consulting.' },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#181824] to-[#101014] text-gray-100 font-sans flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-5 bg-[#181824]/90 backdrop-blur-md sticky top-0 z-50 rounded-b-2xl border-b border-[#232336] shadow-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tight text-white select-none">ETSU<span className="text-yellow-400">.</span></span>
        </div>
        <ul className="flex gap-8 text-gray-200 text-base font-medium">
          <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section  id="about" className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-24 pb-16 px-4">
        {/* Left: Main Profile Image (Color) */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-4">
          <div className="relative">
            <img src={mainProfile} alt="Profile" className="w-80 h-96 md:w-[22rem] md:h-[28rem] object-cover rounded-2xl border-4 border-yellow-400 shadow-2xl bg-[#232336] transition-all duration-300" />
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-400 rounded-full z-0 opacity-90" />
          </div>
        </div>
        {/* Right: About Me Title & Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:pl-0" id="about">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-8 h-1 bg-yellow-400 rounded-full" />
            <span className="uppercase text-sm tracking-widest text-yellow-400 font-semibold">About Me</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2">
            Hi I'm Navapan
          </h1>
          <div className="text-lg text-gray-400 mb-6 max-w-md">
            <span className="font-bold text-yellow-400 text-xl">My friends call me est(etsu)</span><br/>
            <span className="text-gray-400">A Computer Science student who enjoys bringing ideas to life through code and design. I'm passionate about Frontend Development and UX/UI Design, and I love creating digital experiences that are both intuitive and engaging.</span><br/>
            <span className="block mt-2 text-base text-gray-400">
              I’m always curious about how things work and how to improve them—whether it’s through cleaner code, better design, or a smoother user flow.<br/>
              <br/>
              When I’m not coding or designing, you’ll probably find me watching anime or reading manga—my favorite way to relax and get inspired.<br/>
              <br/>
              Let’s create something awesome together!
            </span>
          </div>
          <div className="flex gap-6 mb-8">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} className="text-gray-300 hover:text-yellow-400 transition" style={{fontSize:'2.2rem'}} aria-label={s.name}>
                <span className="sr-only">{s.name}</span>
                {s.icon === 'instagram' && <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor"/><circle cx="12" cy="12" r="5" stroke="currentColor"/><circle cx="17" cy="7" r="1.5" stroke="currentColor"/></svg>}
                {s.icon === 'facebook' && <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                {s.icon === 'github' && <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.17.58.68.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-yellow-400 text-[#181824] font-semibold shadow hover:bg-yellow-300 transition">Contact</a>
            <a href="#portfolio" className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-[#181824] transition">Portfolio</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-32 w-full max-w-4xl mx-auto bg-[#181824] rounded-2xl shadow-lg p-10 mt-4 flex flex-col items-center border border-[#232336]">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Skills</h2>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
          {/* Tech Stacks */}
          <div className="flex-1 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#232336] pb-8 md:pb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
            <p className="text-gray-400 text-base mb-4 text-center">I enjoy programming so much that I can do it all day without getting bored</p>
            <ul className="text-lg font-semibold text-blue-200 space-y-1 text-center ">
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>HTML, CSS, JavaScript</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="flex-1 flex flex-col items-center md:pl-8 pt-8 md:pt-0">
            <h3 className="text-2xl font-bold text-white mb-2">Tools</h3>
            <p className="text-gray-400 text-base mb-4 text-center">I use these tools regularly to design, build, and refine my projects.</p>
            <ul className="text-lg font-semibold text-blue-200 space-y-1 text-center">
              <li>Figma</li>
              <li>Git, GitHub</li>
              <li>Apache NetBeans</li>
              <li>.NET MAUI</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio 2022</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-center text-2xl font-bold text-yellow-400 mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="bg-[#232336] rounded-2xl shadow-lg p-6 flex flex-col items-start border border-[#232336] hover:border-yellow-400 transition">
              <span className="text-lg font-semibold text-white mb-2">{s.title}</span>
              <span className="text-gray-400 text-sm">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-center text-2xl font-bold text-yellow-400 mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="bg-[#232336] rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#232336] hover:border-yellow-400 transition">
              <div className="w-full aspect-[4/3] bg-[#181824] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {/* Replace with actual images if available */}
                <span className="text-gray-700 text-5xl font-bold">{String.fromCharCode(65+i)}</span>
              </div>
              <div className="w-full flex flex-col items-start">
                <span className="font-semibold text-white text-lg">{p.title}</span>
                <a href={p.link} className="text-yellow-400 text-sm font-medium mt-1 hover:underline">Know More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="w-full max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-center text-2xl font-bold text-yellow-400 mb-10">Contact</h2>
        <form className="bg-[#232336] rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-[#232336]">
          <input type="text" placeholder="Your Name" className="bg-[#181824] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition" />
          <input type="email" placeholder="Your Email" className="bg-[#181824] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition" />
          <textarea placeholder="Your Message" rows={5} className="bg-[#181824] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition" />
          <button type="submit" className="px-6 py-3 rounded-full bg-yellow-400 text-[#181824] font-semibold shadow hover:bg-yellow-300 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#181824] border-t border-[#232336] py-8 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-lg text-white">ETSU</span>
            <ul className="flex gap-6 mt-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-400">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} className="text-gray-400 hover:text-yellow-400 text-xl transition" aria-label={s.name}>
                <span className="sr-only">{s.name}</span>
                {s.icon === 'instagram' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.5"/></svg>}
                {s.icon === 'facebook' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                {s.icon === 'github' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.17.58.68.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6">ETSU 2024. All rights reserved.</div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#232336] bg-[#181824] text-gray-200 font-semibold shadow hover:bg-[#232336] hover:text-yellow-400 transition-all z-50"
        style={{ fontSize: '1.1rem' }}
        aria-label="Back to Top"
      >
        Back to Top
        <span className="inline-block w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-[#181824]">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13V7M10 7L6 11M10 7L14 11" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default App;
