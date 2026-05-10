import { useState } from 'react'

const skills = [
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Figma',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'WordPress',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg' },
  { name: 'C#',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'Flutter',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Bootstrap',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Canva',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
]

function SkillCard({ name, icon }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center justify-center gap-4 p-7 bg-brand-mid/30 border border-white/5 rounded-2xl transition-all duration-500 ease-out hover:bg-brand-mid/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md overflow-hidden aspect-square"
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon Area */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className={`w-full h-full object-contain transition-all duration-500 ${isHovered ? 'scale-110 grayscale-0 rotate-3' : 'grayscale'}`} 
        />
        {/* Soft aura behind icon */}
        <div className={`absolute inset-0 bg-primary/10 blur-2xl rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Name Tag */}
      <span className={`relative z-10 font-display font-bold text-[10px] tracking-widest uppercase text-center transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-500'}`}>
        {name}
      </span>
      
      {/* Bottom accent line on hover */}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-dark" aria-labelledby="skills-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block border border-white/10 rounded-full px-4 py-1 text-xs font-medium text-brand-grey mb-4 tracking-wide bg-white/5">
            Expertise & Stack
          </span>
          <div className="flex items-end justify-between flex-wrap gap-6 text-white">
            <h2
              id="skills-title"
              className="font-display font-extrabold leading-tight text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Senjata utama untuk<br />merealisasikan ide
            </h2>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed border-l border-primary/30 pl-4">
              Pilihan teknologi terbaik untuk membangun solusi digital yang cepat dan skalabel.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}