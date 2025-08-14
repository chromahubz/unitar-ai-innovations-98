
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-montserrat relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AnimatedSphere className="w-8 h-8" />
              <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">UNITAR</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#portfolio" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 opacity-40 pointer-events-none">
          <AnimatedSphere className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-cyan-400 fill-current" />
                <Star className="h-5 w-5 text-cyan-400 fill-current" />
                <Star className="h-5 w-5 text-cyan-400 fill-current" />
                <Star className="h-5 w-5 text-cyan-400 fill-current" />
                <Star className="h-5 w-5 text-cyan-400 fill-current" />
              </div>
              <span className="ml-3 text-sm font-semibold text-white/70 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">Trusted by innovative companies worldwide</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Building the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"> Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium backdrop-blur-sm">
              We create AI-first mobile and web applications that transform ideas into powerful digital solutions. 
              From rapid prototypes to enterprise-grade systems that scale with your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-300 border border-white/20 backdrop-blur-sm"
                onClick={() => scrollToSection('portfolio')}
              >
                <Rocket className="mr-3 h-6 w-6" />
                Explore Our Apps
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-cyan-400/25 transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-3 h-6 w-6" />
                Request a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">What We Do</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              We specialize in cutting-edge software development with AI at the core of everything we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group p-10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                  <Globe className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Web App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Modern, responsive web applications built with the latest technologies. From single-page apps to complex enterprise platforms.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-purple-400/30">
                  <Smartphone className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Mobile App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Native iOS and Android applications that deliver exceptional user experiences. Cross-platform solutions that work seamlessly everywhere.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-emerald-400/30">
                  <Brain className="h-10 w-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">AI-Powered Solutions</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Intelligent software that learns and adapts. Machine learning, natural language processing, and predictive analytics.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-orange-400/30">
                  <Building2 className="h-10 w-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">B2B App Development</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Enterprise-grade business applications that streamline operations and drive growth. Custom solutions for unique business needs.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-red-400/30">
                  <Target className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">MVP Launches</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Rapid prototyping and MVP development to validate your ideas quickly. Get to market faster with lean, focused solutions.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-3 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-indigo-400/30">
                  <Users className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Consulting & Strategy</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Strategic guidance for your digital transformation. Product planning, architecture design, and technology consulting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Catalogue Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 rounded-3xl p-16 border border-white/10 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">App Catalogue Coming Soon</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium">
              We're preparing to launch a comprehensive catalogue of cutting-edge applications that showcase the power of AI-driven development. 
              Stay tuned for revolutionary tools that will transform how you work and create.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 border border-white/20">
              <Sparkles className="mr-3 h-6 w-6" />
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Featured Projects</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              Get a sneak peek at our upcoming applications that will revolutionize their respective industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Card className="group p-10 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-4 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-blue-400/30">
                  <Video className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white">VIDEYE</h3>
                <p className="text-white/70 mb-8 leading-relaxed text-lg font-medium">
                  Transform simple ideas into viral videos with AI-powered content creation. The future of mobile video production.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-yellow-400/30">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group p-10 text-center hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-4 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-purple-400/30">
                  <Music className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white">INFIRADIO</h3>
                <p className="text-white/70 mb-8 leading-relaxed text-lg font-medium">
                  Create professional music mixes with one click. AI-driven audio processing that understands rhythm and mood.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-yellow-400/30">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group p-10 text-center hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-white/10 shadow-lg hover:-translate-y-4 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-green-400/30">
                  <Scissors className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white">VIDEOBLADE</h3>
                <p className="text-white/70 mb-8 leading-relaxed text-lg font-medium">
                  Lightning-fast web-based video editor that rivals desktop applications. Professional editing made simple and accessible.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-yellow-400/30">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why UNITAR Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Why Choose UNITAR?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              We bring together cutting-edge technology, innovative thinking, and proven expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">AI-First Development</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Every solution we build leverages artificial intelligence to create smarter, more efficient applications that adapt and learn.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-yellow-500/20">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-yellow-400/30">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Rapid Prototyping</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                From concept to working prototype in record time. We validate ideas quickly and iterate based on real user feedback.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-green-500/20">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-green-400/30">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Enterprise-Grade Engineering</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Robust, scalable architecture built to handle growth. Security and performance are built into every line of code.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-500/20">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-purple-400/30">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Human-Centered UX</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Beautiful, intuitive interfaces designed around real user needs. Technology should enhance human capabilities, not complicate them.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-red-500/20">
              <div className="bg-gradient-to-br from-red-500 to-rose-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-red-400/30">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Secure & Scalable</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Built for the future with security by design. Our systems grow with your business and protect your valuable data.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-500/20">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 border border-indigo-400/30">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Data-Driven Insights</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Every decision backed by real data. We build analytics and intelligence into applications from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">AI Solutions</h2>
            <p className="text-xl text-white/70 leading-relaxed font-medium">
              We harness the power of artificial intelligence across natural language processing, computer vision, and predictive analytics 
              to create intelligent software that transforms how businesses operate and users interact with technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-3xl font-black text-white mb-8">What We Build</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1 border border-cyan-400/30">
                    <ArrowRight className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Intelligent Chatbots & Assistants</h4>
                    <p className="text-white/70 text-lg">Conversational AI that understands context and provides meaningful responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1 border border-purple-400/30">
                    <ArrowRight className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Process Automation</h4>
                    <p className="text-white/70 text-lg">Smart workflows that learn from patterns and optimize business operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1 border border-emerald-400/30">
                    <ArrowRight className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Predictive Analytics</h4>
                    <p className="text-white/70 text-lg">Data intelligence that forecasts trends and enables proactive decision-making.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-3xl font-black text-white mb-8">Client Benefits</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Increased Efficiency</h4>
                    <p className="text-white/70 text-lg">Automate repetitive tasks and free your team to focus on high-value activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Better Decision Making</h4>
                    <p className="text-white/70 text-lg">AI-powered insights reveal hidden patterns and opportunities in your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Enhanced User Experience</h4>
                    <p className="text-white/70 text-lg">Personalized, responsive applications that adapt to user preferences and behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About UNITAR Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tight">About UNITAR</h2>
            
            <div className="text-left space-y-8 text-lg text-white/70 leading-relaxed font-medium backdrop-blur-md bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">Get In Touch</h2>
            <p className="text-xl text-white/70 mb-16 leading-relaxed font-medium">
              Ready to transform your ideas into intelligent software? We'd love to hear about your project and 
              explore how we can help you build something extraordinary.
            </p>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/10">
              <div className="mb-12">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-cyan-400/30">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-8 text-white">Let's Start a Conversation</h3>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
                  <div className="space-y-6">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 h-14 text-lg rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-cyan-400/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 h-14 text-lg rounded-xl backdrop-blur-sm focus:bg-white/20 focus:border-cyan-400/50"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white/20 backdrop-blur-sm"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 h-14 px-12 text-lg font-semibold rounded-xl w-full shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>

                <div className="border-t border-white/20 pt-8">
                  <p className="text-white/70 text-lg">
                    Or email us directly at <a href="mailto:contact@unitar.app" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">contact@unitar.app</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">UNITAR</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <a href="#services" className="text-white/60 hover:text-cyan-400 transition-colors text-lg font-medium">Services</a>
              <a href="#portfolio" className="text-white/60 hover:text-cyan-400 transition-colors text-lg font-medium">Portfolio</a>
              <a href="#about" className="text-white/60 hover:text-cyan-400 transition-colors text-lg font-medium">About</a>
              <a href="mailto:contact@unitar.app" className="text-white/60 hover:text-cyan-400 transition-colors text-lg font-medium">Contact</a>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-lg">
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
