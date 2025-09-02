import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
// GSAP animations removed
import { Mail, Send, MessageCircle, User, FileText } from "lucide-react";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // GSAP animations disabled
  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/message/send`,
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };
  return (
    <section ref={sectionRef} className="section relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-blue-50/20 dark:from-slate-900 dark:via-emerald-950/20 dark:to-blue-950/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="flex text-responsive-title font-black tracking-tight mb-2">
              <span className="gradient-text">CONTACT</span>
              <span className="text-tubeLight-effect ml-4">ME</span>
            </h2>
            <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-responsive-body text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s work together to bring your ideas to life. I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div>
            <div className="card-premium p-8 lg:p-12">
              <form ref={formRef} onSubmit={handleMessage} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-500" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 text-lg border-2 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-xl transition-colors duration-300"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-500" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What&apos;s this about?"
                    className="w-full px-4 py-3 text-lg border-2 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-xl transition-colors duration-300"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-emerald-500" />
                    Message
                  </Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="w-full px-4 py-3 text-lg border-2 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-xl transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {!loading ? (
                    <Button 
                      type="submit"
                      className="btn-premium w-full px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 bg-slate-400 dark:bg-slate-600 cursor-not-allowed"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center premium-shadow-md">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">chiragparmar4780@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center premium-shadow-md">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Response Time</h3>
              <p className="text-slate-600 dark:text-slate-400">Within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center premium-shadow-md">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Availability</h3>
              <p className="text-slate-600 dark:text-slate-400">Open for projects</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-full premium-shadow-md">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Ready to start your next project?
            </span>
            <Mail className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
