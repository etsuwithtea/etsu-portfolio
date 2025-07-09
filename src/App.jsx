import './index.css';

import mainProfile from './assets/mainprofile.jpg';

import certificateCoursera from './assets/certificate_coursera.png';
import certificateCybersecurity from './assets/certificate-cybersecurity.png';

import { useState } from 'react';

const SOCIALS = [
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/etsuwithtea/' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/etsuwithtea' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/etsuwithtea' },
];


import ecom_project1 from './assets/prototype_cloth_e_commerce_1.png';
import ecom_project2 from './assets/prototype_cloth_e_commerce_2.png';
import ecom_project3 from './assets/prototype_cloth_e_commerce_3.png';
import ecom_project4 from './assets/prototype_cloth_e_commerce_4.png';
import ecom_project5 from './assets/prototype_cloth_e_commerce_5.png';
import ecom_project6 from './assets/prototype_cloth_e_commerce_6.png';
import ecom_project7 from './assets/prototype_cloth_e_commerce_7.png';

import Carousel from './components/Carousel.jsx';

const PROJECTS = [
  {
    title: 'Cloth E-Commerce',
    images: [ecom_project1, ecom_project2, ecom_project3, ecom_project4, ecom_project5, ecom_project6, ecom_project7],
    link: 'https://www.figma.com/proto/F0KR84V7gLRwX2bZKg8XA1/Cloth--E-Commerce?node-id=37-3&p=f&t=knOFLvcgd9f9wzZp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A3',
    desc: 'My first UX/UI project — an e-commerce app prototype designed in Figma while learning the basics of user-centered design.',
    role: 'Role : UX/UI Designer',
    isPrototype: true,
  },
];

const CERTIFICATES = [
  {
    title: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    desc: 'Coursera Project Network · Apr 18, 2025',
    image: certificateCoursera,
    link: 'https://coursera.org/verify/FRCJ9CQKZLIB',
  },
  {
    title: 'Basic Cybersecurity',
    desc: 'MOOC NCSA Thailand · Aug 31, 2024',
    image: certificateCybersecurity,
    link: '', // No verify link
  },
];

function App() {
  // Modal state for certificate popup
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (img, alt) => {
    setModalImg(img);
    setModalAlt(alt);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setModalAlt('');
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#181824] to-[#101014] text-gray-100 font-sans flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-[#181824]/90 backdrop-blur-md sticky top-0 z-50 rounded-b-2xl border-b border-[#232336] shadow-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tight text-white select-none">ETSU<span className="text-yellow-400">.</span></span>
        </div>
        <ul className="flex flex-wrap gap-4 sm:gap-8 text-gray-200 text-base font-medium">
          <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#certificate" className="hover:text-yellow-400 transition">Certificate</a></li>
          <li><a href="#project" className="hover:text-yellow-400 transition" onClick={e => {
            e.preventDefault();
            const el = document.getElementById('project');
            if (el) {
              const yOffset = -100; // adjust this value to match your navbar height
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}>Project</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section  id="about" className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 pt-24 pb-12 md:pb-16 px-4">
        {/* Left: Main Profile Image (Color) */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-4 mb-8 md:mb-0">
          <div className="relative">
            <img src={mainProfile} alt="Profile" className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full border-4 border-yellow-400 shadow-2xl bg-[#232336] transition-all duration-300" style={{objectPosition: 'center 20%'}} />
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-400 rounded-full z-0 opacity-90" />
          </div>
        </div>
        {/* Right: About Me Title & Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:pl-0" id="about">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-8 h-1 bg-yellow-400 rounded-full" />
            <span className="uppercase text-sm tracking-widest text-yellow-400 font-semibold">About Me</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2">
            Hi I'm Navapan
          </h1>
          <div className="text-base sm:text-lg text-gray-400 mb-6 max-w-md">
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

      {/* Education Section */}
      <section id="education" className="w-full max-w-4xl mx-auto py-10 sm:py-14 md:py-16 px-2 sm:px-4 bg-[#181824] rounded-2xl shadow-lg border border-[#232336] relative mt-4">
        {/* Background */}
        <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-[#232336] via-[#181824] to-[#101014] opacity-90" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-yellow-400/10 blur-2xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-yellow-400/10 blur-2xl rounded-full" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 text-center mb-10 tracking-wide">Education</h2>
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-16 md:gap-24">
              {/* High School */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/2 text-right md:pr-8">
                  <span className="font-bold text-lg md:text-xl text-white">High School</span>
                  <div className="text-gray-400 text-sm md:text-base mt-1">2016 – 2022</div>
                  <div className="font-semibold text-base md:text-lg text-yellow-300 mt-1">Thammasat Klongluang Wittayakom School</div>
                  <div className="text-gray-400 text-sm md:text-base mt-1">Science-Math Program</div>
                </div>
                <div className="hidden md:block w-0.5 h-24 bg-gray-600 mx-4 rounded-full relative">
                  <span className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-yellow-400 rounded-full" />
                </div>
                <div className="md:w-1/2" />
              </div>
              {/* University */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/2" />
                <div className="hidden md:block w-0.5 h-24 bg-gray-600 mx-4 rounded-full relative">
                  <span className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-yellow-400 rounded-full" />
                </div>
                <div className="md:w-1/2 text-left md:pl-8">
                  <span className="font-bold text-lg md:text-xl text-white">University</span>
                  <div className="text-gray-400 text-sm md:text-base mt-1">2022 – Present</div>
                  <div className="font-semibold text-base md:text-lg text-yellow-300 mt-1">Bangkok University</div>
                  <div className="text-gray-400 text-sm md:text-base mt-1">Bachelor of Science in Computer Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* เพิ่มช่องว่างระหว่าง Education กับ Skills */}
      <div className="h-8 sm:h-12 md:h-16" />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-32 w-full max-w-4xl mx-auto bg-[#181824] rounded-2xl shadow-lg p-4 sm:p-8 md:p-10 mt-4 flex flex-col items-center border border-[#232336]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-8 md:mb-10">Skills</h2>
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0">
          {/* Tech Stacks */}
          <div className="flex-1 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#232336] pb-6 md:pb-0 md:pr-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Languages</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">I enjoy programming so much that I can do it all day without getting bored</p>
            <ul className="text-base sm:text-lg font-semibold text-blue-200 space-y-1 text-center ">
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>HTML, CSS, JavaScript</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="flex-1 flex flex-col items-center md:pl-8 pt-6 md:pt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Tools</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">I use these tools regularly to design, build, and refine my projects.</p>
            <ul className="text-base sm:text-lg font-semibold text-blue-200 space-y-1 text-center">
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


      {/* Certificate Section */}
      <section id="certificate" className="w-full max-w-3xl mx-auto py-10 sm:py-14 md:py-16 px-2 sm:px-4">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-yellow-400 mb-8 md:mb-10">Certificate</h2>
        <div className="flex flex-col items-center gap-8">
          {CERTIFICATES.map((c, i) => (
            <div key={c.title} className="bg-[#232336] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col md:flex-row items-center border border-[#232336] hover:border-yellow-400 transition w-full">
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                {/* Popup trigger: click image to open modal */}
                <button
                  type="button"
                  onClick={() => openModal(c.image, c.title)}
                  className="focus:outline-none group"
                  aria-label={`View certificate: ${c.title}`}
                  style={{background: 'none', border: 'none', padding: 0, margin: 0}}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="rounded-lg shadow-md max-w-xs w-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                  />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:pl-8">
                <span className="text-lg font-semibold text-white mb-2">{c.title}</span>
                <span className="text-gray-400 text-sm mb-2">{c.desc}</span>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-sm font-medium hover:underline">Verify Certificate</a>
                ) : (
                  <span className="text-gray-500 text-sm font-medium italic select-none">No verification link</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Modal Popup for certificate image */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadein"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative max-w-2xl w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-[#232336] text-gray-200 hover:text-yellow-400 rounded-full p-2 shadow-lg focus:outline-none z-10"
                aria-label="Close"
                type="button"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              <img
                src={modalImg}
                alt={modalAlt}
                className="rounded-lg shadow-2xl w-full h-auto object-contain max-h-[80vh] bg-[#181824] border-4 border-yellow-400"
                style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)'}}
              />
              <div className="mt-4 text-center text-white text-base font-semibold max-w-lg w-full truncate">{modalAlt}</div>
            </div>
          </div>
        )}
      </section>

      {/* Project Section with Carousel */}
      <section id="project" className="w-full max-w-6xl mx-auto py-10 sm:py-14 md:py-16 px-2 sm:px-4">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-yellow-400 mb-8 md:mb-10">Project</h2>
        {PROJECTS.map((p, i) => (
          <div key={i} className="bg-[#232336] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center border border-[#232336] hover:border-yellow-400 transition mb-8">
            <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
              {/* Let images keep their natural aspect ratio and size, max out at container */}
              <Carousel images={p.images} link={p.link} title={p.title} imgClassName="max-h-[420px] w-auto max-w-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col items-start md:pl-8">
              <span className="font-semibold text-white text-lg mb-1">{p.title}</span>
              <span className="text-gray-400 text-sm mb-1">{p.desc}</span>
              <span className="text-xs text-white font-medium mb-1">{p.role} · Prototype</span>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-sm font-medium mt-1 hover:underline">View Figma Prototype →</a>
            </div>
          </div>
        ))}
      </section>



      {/* Contact Section */}
      <section id="contact" className="w-full max-w-3xl mx-auto py-10 sm:py-14 md:py-16 px-2 sm:px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2">Contact Me</h2>
        <div className="flex flex-col items-center mb-8">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-2" />
          <span className="text-lg text-white font-semibold tracking-wide">Get in Touch</span>
        </div>
        <div className="bg-[#232336] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#232336] flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <svg className="text-yellow-400" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <div>
              <div className="font-bold text-white">Name</div>
              <div className="text-gray-300">Navapan Suthon</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="text-yellow-400" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 .91-1.68l3.2-2.13a2 2 0 0 1 2.18 0l2.1 1.4a2 2 0 0 0 2.22 0l2.1-1.4a2 2 0 0 1 2.18 0l3.2 2.13a2 2 0 0 1 .91 1.68z"/>
              <path d="M22 16.92c-1.2-.53-2.54-1.13-3.95-1.13-.9 0-1.77.18-2.61.53-.84.35-1.7.53-2.61.53-.9 0-1.77-.18-2.61-.53-.84-.35-1.7-.53-2.61-.53-1.41 0-2.75.6-3.95 1.13M6.54 10.88a6.5 6.5 0 0 1 10.92 0"/>
              <path d="M6.54 10.88a6.5 6.5 0 0 1 10.92 0"/>
              <path d="M16 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z"/>
              <path d="M12 17v.01"/>
              <path d="M12 21v.01"/>
              <path d="M12 19v.01"/>
              <path d="M12 15v.01"/>
              <path d="M12 13v.01"/>
              <path d="M12 11v.01"/>
              <path d="M12 9v.01"/>
              <path d="M12 7v.01"/>
              <path d="M12 5v.01"/>
              <path d="M12 3v.01"/>
              <path d="M12 1v.01"/>
              <path d="M12 23v.01"/>
              <path d="M12 25v.01"/>
              <path d="M12 27v.01"/>
              <path d="M12 29v.01"/>
              <path d="M12 31v.01"/>
              <path d="M12 33v.01"/>
              <path d="M12 35v.01"/>
              <path d="M12 37v.01"/>
              <path d="M12 39v.01"/>
              <path d="M12 41v.01"/>
              <path d="M12 43v.01"/>
              <path d="M12 45v.01"/>
            </svg>
            <div>
              <div className="font-bold text-white">Phone</div>
              <div className="text-gray-300">0960159077</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="text-yellow-400" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
            <div>
              <div className="font-bold text-white">Email</div>
              <div className="text-gray-300">navapan.suth@bumail.net</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#181824] border-t border-[#232336] py-6 sm:py-8 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center px-2 sm:px-4">
          <div className="flex gap-4 mb-2">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} className="text-gray-400 hover:text-yellow-400 text-2xl transition" aria-label={s.name} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{s.name}</span>
                {s.icon === 'instagram' && <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.5"/></svg>}
                {s.icon === 'facebook' && <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                {s.icon === 'github' && <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.17.58.68.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-4 sm:mt-6">ETSU 2024. All rights reserved.</div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex items-center gap-2 px-4 py-2 sm:px-5 rounded-full border-2 border-[#232336] bg-[#181824] text-gray-200 font-semibold shadow hover:bg-[#232336] hover:text-yellow-400 transition-all z-50 text-sm sm:text-base"
        aria-label="Back to Top"
      >
        Back to Top
        <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-[#181824]">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13V7M10 7L6 11M10 7L14 11" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default App;
