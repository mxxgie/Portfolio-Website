import React, { useState, useEffect } from 'react';
import {
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Layers,
  ChevronRight,
  Menu,
  X,
  User,
  Monitor
} from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import Elogbook from './assets/dilg_e_logbook.png';
import mg from './assets/mg.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const projects = [
    {
      title: "DILG E-Logbook",
      description: "A full-stack visitor e-logbook management system for the DILG Provincial Office",
      tech: ["React", "Node.js", "Tailwind", "PostgreSQL"],
      image: Elogbook,
      link: "https://dilg-e-logbook.vercel.app/"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "MySQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Vite", "Figma", "Antigravity", "VSCode"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <img src={mg} alt="MG Logo" className="w-14 h-14 rounded-full border border-indigo-500/30" />
              <span className="font-bold text-xl tracking-tight text-white">MG.Dev</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'projects', 'skills', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-indigo-400 font-medium' : 'text-slate-400 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition-all text-sm font-medium">
                Resume
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            {['home', 'projects', 'skills', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left capitalize py-2 text-slate-400 hover:text-white px-4"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md text-indigo-300 text-sm font-medium mb-8 hover:border-indigo-500/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">digital experiences</span> that matter.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I'm a full-stack developer specialized in building exceptional digital products,
              scalable systems, and interactive interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] hover:-translate-y-0.5"
              >
                View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3">
                <a href="https://github.com/mxxgie" className="p-3.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:-translate-y-0.5 transition-all text-slate-300 hover:text-white shadow-lg">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/maxxiex/" className="p-3.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:-translate-y-0.5 transition-all text-slate-300 hover:text-white shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 hover:border-indigo-500/30 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(79,70,229,0.3)]">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors group/link">
                      View Project <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
              <p className="text-slate-400">The tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="group bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                    {idx === 0 ? <Monitor /> : idx === 1 ? <Terminal /> : <Layers />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/5 backdrop-blur-3xl"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-indigo-500 via-cyan-500 to-indigo-500 p-1 bg-[length:200%_200%] animate-gradient shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] group-hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] transition-all duration-500">
                    <div className="w-full h-full bg-slate-950 rounded-[30px] flex items-center justify-center overflow-hidden">
                      <User className="w-24 h-24 text-slate-700 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  {/* Stats overlap */}
                  {/* <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl hidden lg:block">
                    <p className="text-4xl font-bold text-white">4+</p>
                    <p className="text-indigo-100 text-sm">Years Experience</p>
                  </div> */}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    I'm a passionate developer that graduated in Information Technology.
                    I also have hands-on experience building desktop programs, websites, and android apps during my college days.
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    I am enthusiastic about learning new programming tools and continuously growing as a developer.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 text-center hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300">
                      <p className="text-3xl font-extrabold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">20+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Happy Clients</p>
                    </div>
                    <div className="p-6 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 text-center hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300">
                      <p className="text-3xl font-extrabold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">50+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Projects Done</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's work together</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Have a project in mind? Whether it's a mobile app, a complex web system, or just a chat about technology,
              I'm always open to discussing new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex items-center gap-6">
                <a href="https://github.com/mxxgie" className="text-slate-400 hover:text-indigo-400 transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/in/maxxiex/" className="text-slate-400 hover:text-indigo-400 transition-colors"><Linkedin /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={mg} alt="MG Logo" className="w-14 h-14 rounded-full border border-indigo-500/30" />
            <span className="font-bold text-white tracking-tight">MG.Dev</span>
          </div>
          <p className="text-slate-500 text-sm italic">
            Built with React, and Tailwind.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;