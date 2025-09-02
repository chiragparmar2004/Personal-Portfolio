import React, { useRef } from 'react';
// GSAP animations removed
import { Award, Coffee, Gamepad2, Camera, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  // GSAP animations disabled

  return (
    <section ref={sectionRef} className="section relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/20 dark:to-purple-950/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-responsive-title font-black tracking-tight mb-6">
              <span className="gradient-text-secondary">ABOUT</span>
              <span className="text-tubeLight-effect ml-4">ME</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-responsive-body text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Allow me to introduce myself and share my journey in the world of technology and creativity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-3xl premium-shadow-2xl group-hover:premium-shadow-2xl transition-all duration-500">
                <img
                  src="/23.jpg"
                  alt="Chirag Parmar"
                  className="w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-80 lg:h-[32rem] object-cover rounded-2xl"
                />
                
                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center premium-shadow-lg animate-bounce">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center premium-shadow-lg animate-pulse">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-8 order-1 lg:order-2">
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-responsive-subtitle font-bold text-slate-800 dark:text-slate-200">
                Hi, I'm <span className="gradient-text">Chirag Parmar</span>
              </h3>
              <p className="text-responsive-body text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a Computer Science Engineering student at Ahmedabad University, graduating in 2025. 
                As a passionate web developer and freelancer, I love creating digital experiences that 
                make a difference and solve real-world problems.
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Beyond Code</h4>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                When I'm not coding, you'll find me exploring movies, binge-watching series, 
                conquering video games, or experimenting in the kitchen. These diverse interests 
                fuel my creativity and help me approach problems from unique angles.
              </p>
              
              {/* Interest Icons */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 p-4 glass-effect rounded-2xl">
                  <Coffee className="w-6 h-6 text-amber-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Coffee</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 glass-effect rounded-2xl">
                  <Gamepad2 className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Gaming</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 glass-effect rounded-2xl">
                  <Camera className="w-6 h-6 text-purple-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Movies</span>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">My Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-premium p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Deadline-driven</span>
                </div>
                <div className="card-premium p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Problem solver</span>
                </div>
                <div className="card-premium p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Persistent</span>
                </div>
                <div className="card-premium p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Adaptable</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div>
              <div className="card-premium p-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                <blockquote className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic">
                  "My dedication and perseverance in timely delivery of work are integral to me. 
                  I maintain the courage to face any challenges for extended periods."
                </blockquote>
                <cite className="block mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                  — Chirag Parmar
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
