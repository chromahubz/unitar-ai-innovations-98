
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
  Star,
  Image,
  Instagram,
  Youtube,
  FileText,
  Camera,
  Layers,
  Film,
  Disc,
  PenTool,
  ShoppingBag,
  Briefcase,
  Radio,
  TrendingUp,
  Award,
  Trophy,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

      {/* Production Apps Portfolio */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 bg-green-100 text-green-700 rounded-full font-bold text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Production Ready Applications
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-unitar-gray-dark mb-6 tracking-tight">Our App Portfolio</h2>
            <p className="text-xl text-unitar-gray max-w-3xl mx-auto font-medium leading-relaxed">
              Explore our suite of production-ready AI-powered applications built for content creators, marketers, and businesses.
            </p>
          </div>

          {/* Content Creation Tools */}
          <div className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-unitar-gray-dark">Content Creation Tools</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* VIDEYE */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-unitar-blue to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">VIDEYE</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Transform simple ideas into viral videos with AI-powered content creation. The future of mobile video production.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">AI Video • Mobile Creation</div>
              </Card>

              {/* INFINITEMIX */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Disc className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">INFINITEMIX</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  AI-powered DJ mix creator. Upload songs, auto-mix with BPM/key analysis, add visualizers, and generate YouTube-ready content.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">DJ Automation • YouTube Content</div>
              </Card>

              {/* INFIRADIO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Radio className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">INFIRADIO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Create professional music mixes with one click. AI-driven audio processing that understands rhythm and mood.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Music Mixing • Radio Streaming</div>
              </Card>

              {/* LYRICVIDEOMAKER */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">LYRICVIDEOMAKER</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Create studio-quality lyric videos in 5 minutes. 100% browser-based with professional audio visualizers.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Musicians • Record Labels</div>
              </Card>

              {/* VIDEOBLADE */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">VIDEOBLADE</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Lightning-fast web-based video editor that rivals desktop applications. Professional editing made simple and accessible.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Video Editing • Social Media</div>
              </Card>

              {/* DEPTH-FLOW-PRO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">DEPTH-FLOW-PRO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Transform 2D photos into mesmerizing 3D depth videos with cinematic camera movements. Viral social media content.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">3D Effects • Viral Content</div>
              </Card>

            </div>
          </div>

          {/* E-commerce & Marketing Tools */}
          <div className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-unitar-gray-dark">E-commerce & Marketing</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* PRODUCTPHOTO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">PRODUCTPHOTO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  AI-generated professional product photography. Studio-quality lifestyle shots for Amazon, Shopify, Etsy in 60 seconds.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">E-commerce • Photography</div>
              </Card>

              {/* BG-REMOVE-PRO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">BG-REMOVE-PRO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Advanced background removal with 4 AI models. Process 100 images in 2 minutes. No subscriptions needed.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Image Editing • Bulk Processing</div>
              </Card>

              {/* SITECLONE PRO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">SITECLONE PRO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Scrape, recreate, and generate outreach for outdated websites. Perfect for agencies finding new clients.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Lead Generation • Web Design</div>
              </Card>

              {/* IGPOSTTEMPLATE */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">IGPOSTTEMPLATE</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Create viral Instagram posts in seconds. Pre-built templates, hashtag generation, and brand kit management.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Social Media • Content Creation</div>
              </Card>

            </div>
          </div>

          {/* Professional Tools */}
          <div>
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-unitar-gray-dark">Professional Tools</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* FRAMECRAFT PRO */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Film className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">FRAMECRAFT PRO</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  AI-powered film pre-visualization. Replace traditional storyboarding with infinite canvas planning and scene generation.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Filmmaking • Pre-Production</div>
              </Card>

              {/* AUTOBLOG */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">AUTOBLOG</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Launch professional blogs in 5 minutes. GitHub + Hugo + Vercel with AI-powered content generation and bulk features.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Content Marketing • SEO</div>
              </Card>

              {/* YOUTUBE DETECTIVE */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-red-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">YOUTUBE DETECTIVE</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Channel analysis tool with video summaries delivered daily. Study competition without watching hours of content.
                </p>
                <div className="text-xs text-unitar-blue font-semibold">Analytics • Research</div>
              </Card>

              {/* KEY OF SONG */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
                <div className="bg-gradient-to-br from-violet-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-black mb-3 text-unitar-gray-dark">KEY OF SONG</h4>
                <p className="text-unitar-gray text-sm mb-4 leading-relaxed">
                  Music analysis platform for artists and producers. Discover song keys, BPM, and harmonic mixing insights.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-unitar-blue font-semibold">Music Tech • Analysis</div>
                  <a href="https://www.keyofsong.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-unitar-blue hover:text-unitar-blue-dark font-bold flex items-center">
                    Visit <ChevronRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </Card>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-unitar-blue to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-black mb-6">Ready to Launch Your App Idea?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                We've built 14+ production-ready applications. Let us build yours next with our proven AI-first development process.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-unitar-blue hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* iOS App Store Success Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 rounded-full font-bold text-sm">
              <Trophy className="w-4 h-4 mr-2" />
              App Store Success
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Top Charts in AI Category</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Our iOS applications have reached top positions in App Store charts, demonstrating our expertise in building market-leading AI-powered mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Stat Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-black mb-2 text-center bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Top 10</div>
              <p className="text-slate-300 text-center text-lg font-semibold">AI Tools Category</p>
              <p className="text-slate-400 text-center text-sm mt-2">Multiple apps featured</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-black mb-2 text-center bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">#1</div>
              <p className="text-slate-300 text-center text-lg font-semibold">AI Music Niche</p>
              <p className="text-slate-400 text-center text-sm mt-2">Peak position achieved</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-black mb-2 text-center bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">500K+</div>
              <p className="text-slate-300 text-center text-lg font-semibold">Total Downloads</p>
              <p className="text-slate-400 text-center text-sm mt-2">Across iOS portfolio</p>
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-black mb-8 text-center">What Makes Our iOS Apps Stand Out</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">AI-First Innovation</h4>
                    <p className="text-slate-300 text-sm">Cutting-edge AI features that users love and competitors can't match</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Native Performance</h4>
                    <p className="text-slate-300 text-sm">Optimized Swift code for buttery-smooth 60fps experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Premium UX Design</h4>
                    <p className="text-slate-300 text-sm">Following Apple's HIG with delightful animations and interactions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">App Store Optimization</h4>
                    <p className="text-slate-300 text-sm">Strategic metadata, screenshots, and marketing for maximum visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-6 text-lg">Want your app to reach the top charts?</p>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 px-10 py-6 text-lg font-black shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Build Your iOS App
              <Rocket className="ml-3 h-5 w-5" />
            </Button>
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

      {/* Entertainment AI Specialization Spotlight */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Our Specialty
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Entertainment & Creative AI Experts</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  While we build AI solutions across all industries, our passion and proven expertise lies in entertainment.
                  We've created 14+ AI-powered apps for music, video, and creative professionals—reaching Top 10 in App Store charts.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-black mb-1">14+</div>
                    <div className="text-sm text-white/80">Entertainment Apps</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-1">500K+</div>
                    <div className="text-sm text-white/80">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-1">#1</div>
                    <div className="text-sm text-white/80">AI Music Category</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-gradient-to-br from-pink-400 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black">Music & Audio AI</h3>
                  </div>
                  <p className="text-white/80 text-sm">DJ mixing, key detection, lyric videos, music analysis—we've built it all</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-gradient-to-br from-purple-400 to-indigo-400 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black">Video & Visual AI</h3>
                  </div>
                  <p className="text-white/80 text-sm">Editing, 3D effects, pre-viz, viral content—professional tools in the browser</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-gradient-to-br from-orange-400 to-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black">Creative Content AI</h3>
                  </div>
                  <p className="text-white/80 text-sm">Product photos, social posts, blogs—AI tools that make creators unstoppable</p>
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
            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                <Link 
                  to="/privacy"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium underline"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms"
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium underline"
                >
                  Terms & Conditions
                </Link>
              </div>
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
