import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
// GSAP animations removed
import { Monitor, Smartphone, Palette, Code, Database, Globe } from "lucide-react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const sectionRef = useRef(null);

  // GSAP animations disabled

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/softwareapplication/getall`,
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
    };
    getMyApps();
  }, []);

  // App categories for better organization
  const appCategories = [
    { icon: Code, title: "Development", color: "from-blue-500 to-blue-600" },
    { icon: Palette, title: "Design", color: "from-purple-500 to-purple-600" },
    { icon: Database, title: "Database", color: "from-green-500 to-green-600" },
    { icon: Globe, title: "Browser", color: "from-orange-500 to-orange-600" },
    { icon: Monitor, title: "Desktop", color: "from-indigo-500 to-indigo-600" },
    { icon: Smartphone, title: "Mobile", color: "from-pink-500 to-pink-600" },
  ];

  return (
    <section ref={sectionRef} className="section relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-blue-50/20 dark:from-slate-900 dark:via-indigo-950/20 dark:to-blue-950/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-responsive-title font-black tracking-tight mb-6">
              <span className="text-tubeLight-effect dancing_text">MY APPS</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-responsive-body text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tools and applications I use daily to create amazing digital experiences
          </p>
        </div>

        {/* App Categories */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {appCategories.map((category, index) => (
              <div key={index} className="card-premium p-6 text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center premium-shadow-md group-hover:premium-shadow-lg transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {apps &&
            apps.map((element) => {
              return (
                <div
                  key={element._id}
                  className="card-premium p-6 flex flex-col items-center gap-4 group cursor-pointer"
                >
                  {/* App Icon Container */}
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 group-hover:from-indigo-100 group-hover:to-blue-100 dark:group-hover:from-indigo-900/20 dark:group-hover:to-blue-900/20 transition-all duration-300 premium-shadow-md group-hover:premium-shadow-lg">
                      <img
                        src={element.svg && element.svg.url}
                        alt={element.name}
                        className="h-10 w-10 sm:h-12 sm:w-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Hover Effect Ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* App Name */}
                  <h4 className="text-sm font-semibold text-center text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {element.name}
                  </h4>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-full premium-shadow-md">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Always exploring new tools and technologies
            </span>
            <Monitor className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApps;
