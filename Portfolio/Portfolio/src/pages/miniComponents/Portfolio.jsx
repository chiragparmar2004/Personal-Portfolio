import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// GSAP animations removed
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP animations disabled

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/project/getall`,
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);
  
  return (
    <section ref={sectionRef} className="section relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-pink-50/20 to-purple-50/20 dark:from-slate-900 dark:via-pink-950/20 dark:to-purple-950/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="flex text-responsive-title font-black tracking-tight mb-6">
              <span className="gradient-text-accent">MY</span>
              <span className="text-tubeLight-effect ml-4">PORTFOLIO</span>
            </h2>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-responsive-body text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects and creative work that demonstrates my skills and passion
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {viewAll
            ? projects &&
              projects.map((element) => {
                return (
                  <Link to={`/project/${element._id}`} key={element._id} className="portfolio-item group">
                    <div className="card-premium overflow-hidden h-full">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={element.projectBanner && element.projectBanner.url}
                          alt={element.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center backdrop-blur-sm">
                              <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Project Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 glass-effect rounded-full backdrop-blur-sm">
                            <span className="text-xs font-medium text-white">Featured</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {element.title}
                          </h3>
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                          {element.description || "Click to view project details and explore the technologies used."}
                        </p>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>2024</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>Web App</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            : projects &&
              projects.slice(0, 6).map((element) => {
                return (
                  <Link to={`/project/${element._id}`} key={element._id} className="portfolio-item group">
                    <div className="card-premium overflow-hidden h-full">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={element.projectBanner && element.projectBanner.url}
                          alt={element.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center backdrop-blur-sm">
                              <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Project Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 glass-effect rounded-full backdrop-blur-sm">
                            <span className="text-xs font-medium text-white">Featured</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {element.title}
                          </h3>
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                          {element.description || "Click to view project details and explore the technologies used."}
                        </p>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>2024</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>Web App</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>

        {/* Show More/Less Button */}
        {projects && projects.length > 6 && (
          <div className="text-center mt-16">
            <Button 
              ref={buttonRef}
              onClick={() => setViewAll(!viewAll)}
              className="btn-premium px-8 py-4 text-lg font-semibold"
            >
              {viewAll ? "Show Less" : `Show All ${projects.length} Projects`}
            </Button>
          </div>
        )}

        {/* Stats Section */}
        {/* <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2 counter" data-end={projects?.length || 0}>0</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-secondary mb-2 counter" data-end="15">0</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Technologies Used</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-accent mb-2 counter" data-end="100">0</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div> */}

        {/* Coming Soon Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-full premium-shadow-md">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              More exciting projects coming soon
            </span>
            <Github className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
