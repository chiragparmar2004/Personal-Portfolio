import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowDown,
  Sparkles,
} from "lucide-react";
// GSAP animations removed

const Hero = () => {
  const [user, setUser] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/portfolio/me`,
          {
            withCredentials: true,
          }
        );
        console.log(data);
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    getMyProfile();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-floating absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="hero-floating absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="hero-floating absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 glass-effect rounded-full">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for work</span>
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </div>

        {/* Hero Title */}
        <div className="space-y-6 mb-12">
          <h1 className="text-responsive-hero font-black tracking-tight">
            <span className="block text-slate-800 dark:text-slate-200 mb-4">Hey, I&apos;m</span>
            <span className="block gradient-text">Chirag Parmar</span>
          </h1>
          
          <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center">
            <h2 className="text-tubeLight-effect text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[8px] sm:tracking-[12px] md:tracking-[15px] font-bold">
              <Typewriter
                words={["FULLSTACK DEVELOPER", "UI/UX DESIGNER", "FREELANCER", "PROBLEM SOLVER"]}
                loop={50}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
        </div>

        {/* Hero Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-responsive-body text-slate-600 dark:text-slate-400 leading-relaxed">
            {user.aboutMe || "Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to={user.githubURL} target="_blank" className="group">
            <Button className="btn-premium px-8 py-4 text-lg font-semibold group-hover:shadow-2xl">
              <Github className="w-5 h-5 mr-3" />
              View GitHub
            </Button>
          </Link>
          <Link to={user.resume && user.resume.url} target="_blank" className="group">
            <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all duration-300">
              <ExternalLink className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">Follow me</p>
          <div className="flex gap-4">
            <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank" className="group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 group-hover:from-red-100 group-hover:to-red-200 dark:group-hover:from-red-950/40 dark:group-hover:to-red-900/40 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
            <Link to={user.instagramURL} target="_blank" className="group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 group-hover:from-pink-100 group-hover:to-pink-200 dark:group-hover:from-pink-950/40 dark:group-hover:to-pink-900/40 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                <Instagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
            <Link to={user.facebookURL} target="_blank" className="group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-950/40 dark:group-hover:to-blue-900/40 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
            <Link to={user.linkedInURL} target="_blank" className="group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/20 dark:to-sky-900/20 group-hover:from-sky-100 group-hover:to-sky-200 dark:group-hover:from-sky-950/40 dark:group-hover:to-sky-900/40 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                <Linkedin className="w-6 h-6 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
            <Link to={user.twitterURL} target="_blank" className="group">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-950/40 dark:group-hover:to-blue-900/40 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                <Twitter className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
