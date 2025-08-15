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
    <div className="min-h-screen bg-white font-montserrat">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AnimatedSphere className="w-8 h-8" />
              <div className="text-2xl font-black text-unitar-blue tracking-tight">UNITAR</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-unitar-gray hover:text-unitar-blue transition-all duration-300 font-medium">Services</a>
              <a href="#portfolio" className="text-unitar-gray hover:text-unitar-blue transition-all duration-300 font-medium">Portfolio</a>
              <a href="#about" className="text-unitar-gray hover:text-unitar-blue transition-all duration-300 font-medium">About</a>
              <a href="#contact" className="text-unitar-gray hover:text-unitar-blue transition-all duration-300 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
          <AnimatedSphere className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <span className="ml-3 text-sm font-semibold text-unitar-gray">Trusted by innovative companies worldwide</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-unitar-gray-dark mb-8 leading-[0.9] tracking-tight">
              Building the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-unitar-blue via-unitar-blue-light to-purple-600"> Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-unitar-gray mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              We create AI-first mobile and web applications that transform ideas into powerful digital solutions. 
              From rapid prototypes to enterprise-grade systems that scale with your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-unitar-blue to-unitar-blue-dark hover:from-unitar-blue-dark hover:to-slate-800 text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                <Rocket className="mr-3 h-6 w-6" />
                Explore Our Apps
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-unitar-blue text-unitar-blue hover:bg-unitar-blue hover:text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-6 tracking-tight">What We Do</h2>
            <p className="text-xl text-unitar-gray max-w-3xl mx-auto font-medium leading-relaxed">
              We specialize in cutting-edge software development with AI at the core of everything we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-unitar-blue/10 to-unitar-blue/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-unitar-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">Web App Development</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Modern, responsive web applications built with the latest technologies. From single-page apps to complex enterprise platforms.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">Mobile App Development</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Native iOS and Android applications that deliver exceptional user experiences. Cross-platform solutions that work seamlessly everywhere.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">AI-Powered Solutions</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Intelligent software that learns and adapts. Machine learning, natural language processing, and predictive analytics.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">B2B App Development</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Enterprise-grade business applications that streamline operations and drive growth. Custom solutions for unique business needs.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">MVP Launches</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Rapid prototyping and MVP development to validate your ideas quickly. Get to market faster with lean, focused solutions.
                </p>
              </div>
            </Card>

            <Card className="group p-10 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unitar-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-unitar-gray-dark">Consulting & Strategy</h3>
                <p className="text-unitar-gray leading-relaxed text-lg">
                  Strategic guidance for your digital transformation. Product planning, architecture design, and technology consulting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Catalogue Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-8 tracking-tight">App Catalogue Coming Soon</h2>
            <p className="text-xl text-unitar-gray mb-12 leading-relaxed font-medium">
              We're preparing to launch a comprehensive catalogue of cutting-edge applications that showcase the power of AI-driven development. 
              Stay tuned for revolutionary tools that will transform how you work and create.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-unitar-blue hover:from-purple-700 hover:to-unitar-blue-dark text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <Sparkles className="mr-3 h-6 w-6" />
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-6 tracking-tight">Featured Projects</h2>
            <p className="text-xl text-unitar-gray max-w-3xl mx-auto font-medium leading-relaxed">
              Get a sneak peek at our upcoming applications that will revolutionize their respective industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Card className="group p-10 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-unitar-blue to-blue-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-unitar-gray-dark">VIDEYE</h3>
                <p className="text-unitar-gray mb-8 leading-relaxed text-lg font-medium">
                  Transform simple ideas into viral videos with AI-powered content creation. The future of mobile video production.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group p-10 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-unitar-gray-dark">INFIRADIO</h3>
                <p className="text-unitar-gray mb-8 leading-relaxed text-lg font-medium">
                  Create professional music mixes with one click. AI-driven audio processing that understands rhythm and mood.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            <Card className="group p-10 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-gradient-to-br from-white via-green-50/30 to-green-100/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-700 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-unitar-gray-dark">VIDEOBLADE</h3>
                <p className="text-unitar-gray mb-8 leading-relaxed text-lg font-medium">
                  Lightning-fast web-based video editor that rivals desktop applications. Professional editing made simple and accessible.
                </p>
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why UNITAR Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Why Choose UNITAR?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              We bring together cutting-edge technology, innovative thinking, and proven expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-unitar-blue to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">AI-First Development</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Every solution we build leverages artificial intelligence to create smarter, more efficient applications that adapt and learn.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Rapid Prototyping</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                From concept to working prototype in record time. We validate ideas quickly and iterate based on real user feedback.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Enterprise-Grade Engineering</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Robust, scalable architecture built to handle growth. Security and performance are built into every line of code.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Human-Centered UX</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Beautiful, intuitive interfaces designed around real user needs. Technology should enhance human capabilities, not complicate them.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-red-500 to-rose-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Secure & Scalable</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Built for the future with security by design. Our systems grow with your business and protect your valuable data.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Data-Driven Insights</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Every decision backed by real data. We build analytics and intelligence into applications from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-8 tracking-tight">AI Solutions</h2>
            <p className="text-xl text-unitar-gray leading-relaxed font-medium">
              We harness the power of artificial intelligence across natural language processing, computer vision, and predictive analytics 
              to create intelligent software that transforms how businesses operate and users interact with technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-black text-unitar-gray-dark mb-8">What We Build</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-unitar-blue/10 to-unitar-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <ArrowRight className="h-6 w-6 text-unitar-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Intelligent Chatbots & Assistants</h4>
                    <p className="text-unitar-gray text-lg">Conversational AI that understands context and provides meaningful responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <ArrowRight className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Process Automation</h4>
                    <p className="text-unitar-gray text-lg">Smart workflows that learn from patterns and optimize business operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <ArrowRight className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Predictive Analytics</h4>
                    <p className="text-unitar-gray text-lg">Data intelligence that forecasts trends and enables proactive decision-making.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-black text-unitar-gray-dark mb-8">Client Benefits</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Increased Efficiency</h4>
                    <p className="text-unitar-gray text-lg">Automate repetitive tasks and free your team to focus on high-value activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Better Decision Making</h4>
                    <p className="text-unitar-gray text-lg">AI-powered insights reveal hidden patterns and opportunities in your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <CheckCircle className="h-8 w-8 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-unitar-gray-dark mb-3 text-lg">Enhanced User Experience</h4>
                    <p className="text-unitar-gray text-lg">Personalized, responsive applications that adapt to user preferences and behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About UNITAR Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-12 tracking-tight">About UNITAR</h2>
            
            <div className="text-left space-y-8 text-lg text-unitar-gray leading-relaxed font-medium">
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
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Get In Touch</h2>
            <p className="text-xl text-slate-300 mb-16 leading-relaxed font-medium">
              Ready to transform your ideas into intelligent software? We'd love to hear about your project and 
              explore how we can help you build something extraordinary.
            </p>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <div className="mb-12">
                <div className="bg-gradient-to-br from-unitar-blue to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-8">Let's Start a Conversation</h3>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
                  <div className="space-y-6">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 h-14 text-lg rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 h-14 text-lg rounded-xl"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-unitar-blue"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-unitar-blue to-blue-600 hover:from-unitar-blue-dark hover:to-slate-800 h-14 px-12 text-lg font-semibold rounded-xl w-full"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>

                <div className="border-t border-slate-700 pt-8">
                  <p className="text-slate-300 text-lg">
                    Or email us directly at <a href="mailto:contact@unitar.app" className="text-unitar-blue-light hover:text-unitar-blue transition-colors font-semibold">contact@unitar.app</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl font-black text-unitar-blue mb-8">UNITAR</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <a href="#services" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">Services</a>
              <a href="#portfolio" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">Portfolio</a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">About</a>
              <a href="mailto:contact@unitar.app" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">Contact</a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a href="/privacy-policy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium">Privacy Policy</a>
              <a href="/terms-conditions" className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium">Terms & Conditions</a>
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400 text-lg">
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
