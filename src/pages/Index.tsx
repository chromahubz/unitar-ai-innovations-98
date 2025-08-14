import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedSphere from "@/components/AnimatedSphere";
import { 
  Code2, 
  Smartphone, 
  Brain, 
  Building2, 
  Zap, 
  Shield, 
  Users, 
  Target,
  Globe,
  Mail,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  Database,
  MonitorSpeaker,
  Video,
  Music,
  Scissors,
  ChevronRight,
  Star
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:contact@unitar.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 font-montserrat relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Giant Animated Sphere Background */}
      <AnimatedSphere className="top-0 right-0 w-[150vh] h-[150vh] z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-xl">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">UNITAR</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Services</a>
              <a href="#portfolio" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Portfolio</a>
              <a href="#about" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">About</a>
              <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-3 text-sm font-bold text-yellow-300">Trusted by innovative companies worldwide</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tight">
              <span className="text-white">Building the</span>
              <br />
              <span className="text-white">Future of</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Software</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              We create AI-first mobile and web applications that transform ideas into 
              <span className="text-cyan-400 font-semibold"> powerful digital solutions</span>. 
              From rapid prototypes to enterprise-grade systems that scale with your ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 rounded-2xl overflow-hidden"
                onClick={() => scrollToSection('portfolio')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Rocket className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Explore Our Apps</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative backdrop-blur-xl bg-white/5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden"
                onClick={() => scrollToSection('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Request a Project</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">What We Do</h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
              We specialize in cutting-edge software development with AI at the core of everything we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-cyan-400/30">
                  <Globe className="h-12 w-12 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Web App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Modern, responsive web applications built with the latest technologies. From single-page apps to complex enterprise platforms.
                </p>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-purple-400/30">
                  <Smartphone className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Mobile App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Native iOS and Android applications that deliver exceptional user experiences. Cross-platform solutions that work seamlessly everywhere.
                </p>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-emerald-400/20 to-green-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-emerald-400/30">
                  <Brain className="h-12 w-12 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">AI-Powered Solutions</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Intelligent software that learns and adapts. Machine learning, natural language processing, and predictive analytics.
                </p>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-orange-400/20 to-red-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-orange-400/30">
                  <Building2 className="h-12 w-12 text-orange-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">B2B App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Enterprise-grade business applications that streamline operations and drive growth. Custom solutions for unique business needs.
                </p>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-red-400/20 to-pink-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-red-400/30">
                  <Target className="h-12 w-12 text-red-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">MVP Launches</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Rapid prototyping and MVP development to validate your ideas quickly. Get to market faster with lean, focused solutions.
                </p>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-white/5 border border-white/20 p-12 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-indigo-400/20 to-blue-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-indigo-400/30">
                  <Users className="h-12 w-12 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Consulting & Strategy</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Strategic guidance for your digital transformation. Product planning, architecture design, and technology consulting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Catalogue Preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tight">App Catalogue Coming Soon</h2>
            <p className="text-2xl text-white/70 mb-16 leading-relaxed font-light">
              We're preparing to launch a comprehensive catalogue of cutting-edge applications that showcase the power of AI-driven development. 
              Stay tuned for revolutionary tools that will transform how you work and create.
            </p>
            <Button className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get Early Access</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">Featured Projects</h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
              Get a sneak peek at our upcoming applications that will revolutionize their respective industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <Card className="group relative backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 p-12 text-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:shadow-blue-500/25 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-28 h-28 rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-blue-400/50">
                  <Video className="h-14 w-14 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-8 text-white">VIDEYE</h3>
                <p className="text-white/70 mb-10 leading-relaxed text-xl font-light">
                  Transform simple ideas into viral videos with AI-powered content creation. The future of mobile video production.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold shadow-xl backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 p-12 text-center hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:shadow-purple-500/25 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-28 h-28 rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-purple-400/50">
                  <Music className="h-14 w-14 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-8 text-white">INFIRADIO</h3>
                <p className="text-white/70 mb-10 leading-relaxed text-xl font-light">
                  Create professional music mixes with one click. AI-driven audio processing that understands rhythm and mood.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold shadow-xl backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group relative backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 p-12 text-center hover:bg-gradient-to-br hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:shadow-green-500/25 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-28 h-28 rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-green-400/50">
                  <Scissors className="h-14 w-14 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-8 text-white">VIDEOBLADE</h3>
                <p className="text-white/70 mb-10 leading-relaxed text-xl font-light">
                  Lightning-fast web-based video editor that rivals desktop applications. Professional editing made simple and accessible.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold shadow-xl backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why UNITAR Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">Why Choose UNITAR?</h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
              We bring together cutting-edge technology, innovative thinking, and proven expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-cyan-400/30">
                <Brain className="h-12 w-12 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">AI-First Development</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Every solution we build leverages artificial intelligence to create smarter, more efficient applications that adapt and learn.
              </p>
            </div>

            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-yellow-400/30">
                <Zap className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Rapid Prototyping</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                From concept to working prototype in record time. We validate ideas quickly and iterate based on real user feedback.
              </p>
            </div>

            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-green-400/30">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Enterprise-Grade Engineering</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Robust, scalable architecture built to handle growth. Security and performance are built into every line of code.
              </p>
            </div>

            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-purple-400/30">
                <Users className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Human-Centered UX</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Beautiful, intuitive interfaces designed around real user needs. Technology should enhance human capabilities, not complicate them.
              </p>
            </div>

            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="bg-gradient-to-br from-red-400/20 to-rose-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-red-400/30">
                <CheckCircle className="h-12 w-12 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Secure & Scalable</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Built for the future with security by design. Our systems grow with your business and protect your valuable data.
              </p>
            </div>

            <div className="group text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="bg-gradient-to-br from-indigo-400/20 to-blue-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-indigo-400/30">
                <Database className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Data-Driven Insights</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Every decision backed by real data. We build analytics and intelligence into applications from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tight">AI Solutions</h2>
            <p className="text-2xl text-white/70 leading-relaxed font-light">
              We harness the power of artificial intelligence across natural language processing, computer vision, and predictive analytics 
              to create intelligent software that transforms how businesses operate and users interact with technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-12">What We Build</h3>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mt-1 backdrop-blur-sm border border-cyan-400/30">
                    <ArrowRight className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Intelligent Chatbots & Assistants</h4>
                    <p className="text-white/70 text-lg">Conversational AI that understands context and provides meaningful responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mt-1 backdrop-blur-sm border border-purple-400/30">
                    <ArrowRight className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Process Automation</h4>
                    <p className="text-white/70 text-lg">Smart workflows that learn from patterns and optimize business operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-emerald-400/20 to-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mt-1 backdrop-blur-sm border border-emerald-400/30">
                    <ArrowRight className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Predictive Analytics</h4>
                    <p className="text-white/70 text-lg">Data intelligence that forecasts trends and enables proactive decision-making.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/20 p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-12">Client Benefits</h3>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-10 w-10 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Increased Efficiency</h4>
                    <p className="text-white/70 text-lg">Automate repetitive tasks and free your team to focus on high-value activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-10 w-10 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Better Decision Making</h4>
                    <p className="text-white/70 text-lg">AI-powered insights reveal hidden patterns and opportunities in your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-10 w-10 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-4 text-xl">Enhanced User Experience</h4>
                    <p className="text-white/70 text-lg">Personalized, responsive applications that adapt to user preferences and behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About UNITAR Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-16 tracking-tight">About UNITAR</h2>
            
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 p-16 rounded-3xl shadow-2xl">
              <div className="text-left space-y-10 text-xl text-white/80 leading-relaxed font-light">
                <p>
                  UNITAR is a forward-thinking software development company founded on the belief that artificial intelligence 
                  should enhance human capabilities, not replace them. We specialize in creating intelligent applications that 
                  learn, adapt, and evolve with their users.
                </p>
                
                <p>
                  We started UNITAR because we saw a gap between the promise of AI and its practical application in everyday 
                  software. Too many companies bolt AI onto existing systems as an afterthought. We take a different approach — 
                  AI is woven into the fabric of everything we build, from the initial architecture to the final user interface.
                </p>
                
                <p>
                  Our mission is to democratize access to intelligent software solutions. Whether you're a startup with a 
                  groundbreaking idea or an enterprise looking to transform your operations, we provide the expertise and 
                  technology to turn your vision into reality. We believe the future belongs to organizations that can harness 
                  the power of AI while maintaining a human-centered approach to problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tight">Get In Touch</h2>
            <p className="text-2xl text-white/70 mb-20 leading-relaxed font-light">
              Ready to transform your ideas into intelligent software? We'd love to hear about your project and 
              explore how we can help you build something extraordinary.
            </p>

            <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-16 shadow-2xl">
              <div className="mb-16">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-12 backdrop-blur-sm border border-cyan-400/30">
                  <Mail className="h-12 w-12 text-cyan-400" />
                </div>
                <h3 className="text-4xl font-bold mb-12 text-white">Let's Start a Conversation</h3>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
                  <div className="space-y-8">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="backdrop-blur-xl bg-white/10 border border-white/30 text-white placeholder-white/50 h-16 text-lg rounded-2xl focus:border-cyan-400/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="backdrop-blur-xl bg-white/10 border border-white/30 text-white placeholder-white/50 h-16 text-lg rounded-2xl focus:border-cyan-400/50"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/50 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 h-16 px-12 text-xl font-bold rounded-2xl w-full shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </div>
                </form>

                <div className="border-t border-white/20 pt-12">
                  <p className="text-white/70 text-xl">
                    Or email us directly at <a href="mailto:contact@unitar.app" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">contact@unitar.app</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-white/5 border-t border-white/20 py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">UNITAR</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-16">
              <a href="#services" className="text-white/70 hover:text-cyan-400 transition-colors text-xl font-medium backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Services</a>
              <a href="#portfolio" className="text-white/70 hover:text-cyan-400 transition-colors text-xl font-medium backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Portfolio</a>
              <a href="#about" className="text-white/70 hover:text-cyan-400 transition-colors text-xl font-medium backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">About</a>
              <a href="mailto:contact@unitar.app" className="text-white/70 hover:text-cyan-400 transition-colors text-xl font-medium backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">Contact</a>
            </div>
            <div className="border-t border-white/20 pt-12">
              <p className="text-white/60 text-xl">
                © 2025 UNITAR. Building the future of software with AI-first development.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
