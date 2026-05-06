/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, ShoppingBag, Scissors, 
  MapPin, Clock, Star, MessageCircle, 
  ArrowRight, Upload, Check, Quote,
  ChevronRight, Sparkles, Palette,
  Zap, Heart, ShieldCheck
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  name: string;
  rating: number;
  text: string;
  source: string;
}

const TESTIMONIALS: Testimonial[] = [
  { name: "Ananya Sharma", rating: 5, text: "The fitting was absolutely perfect! I've never felt so confident in a custom blouse. Ban Sanwar is truly a gem in Bhopal.", source: "Google Maps" },
  { name: "Priya Varma", rating: 4.5, text: "Exceptional fabrics and very professional consultation. They understood exactly what I wanted for my wedding lehenga.", source: "WhatsApp" },
  { name: "Meera Iyer", rating: 5, text: "The attention to detail in the embroidery is world-class. It felt like I was wearing a high-end designer piece.", source: "Facebook" },
];

const FABRICS = ["Silk", "Cotton", "Georgette", "Chiffon", "Velvet", "Satin", "Crepe", "Net"];
const DRESS_TYPES = ["Blouse", "Lehenga", "Suit", "Saree", "Fabric Only"];

const GALLERY_IMAGES = [
  { url: "/input_file_0.png", title: "Royal Sequin Blouse", category: "Blouse" },
  { url: "/input_file_1.png", title: "Ethereal White Lehenga", category: "Lehenga" },
  { url: "/input_file_2.png", title: "Azure Embroidery Saree", category: "Saree" },
  { url: "/input_file_3.png", title: "Bespoke Suit Piece", category: "Suit" },
  { url: "/input_file_4.png", title: "Verdant Blossom Lehenga", category: "Lehenga" },
  { url: "/input_file_5.png", title: "Majestic Emerald Saree", category: "Saree" },
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Design', href: '#design' },
    { name: 'Inspirations', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'Fabrics', href: '#fabrics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-brand-pink'}`}>
            Ban Sanwar
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#design" className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all transform hover:scale-105 shadow-lg inline-block text-center">
            Book Visit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={scrolled ? 'text-brand-dark' : 'text-white'} /> : <Menu className={scrolled ? 'text-brand-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 text-lg font-serif border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-on-a-dress-41312-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4">
            Custom Couture • Premium Fabrics
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-6">
            Your Dream Outfit,<br />
            <span className="luxury-text-gradient italic">Designed Just For You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            No Ready-Made | Custom Designs & Premium Fabrics. Witness the artistry of boutique craftsmanship where every stitch tells your story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#design"
              className="bg-brand-pink text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(252,228,236,0.3)] group"
            >
              Start Designing
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#gallery"
              className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Inspirations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
         {[...Array(12)].map((_, i) => (
           <motion.div 
             key={i}
             className="absolute w-1 h-1 bg-white rounded-full opacity-30 shadow-[0_0_8px_#fff]"
             animate={{
               y: [0, -100],
               x: [0, Math.random() * 50 - 25],
               opacity: [0, 0.5, 0]
             }}
             transition={{
               duration: 3 + Math.random() * 2,
               repeat: Infinity,
               delay: Math.random() * 5
             }}
             style={{
               left: `${Math.random() * 100}%`,
               bottom: '10%'
             }}
           />
         ))}
      </div>
    </section>
  );
};

const DesignForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dressType: 'Saree',
    fabric: 'Silk',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Inward Design Request - Ban Sanwar Boutique*%0A%0A*Customer:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Dress Type:* ${formData.dressType}%0A*Fabric:* ${formData.fabric}%0A*Description:* ${formData.description}%0A%0A_Note: Reference images will be sent separately._`;
    window.open(`https://wa.me/919131012509?text=${message}`, '_blank');
  };

  return (
    <section id="design" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-brand-gold font-bold mb-4">The Atelier</h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Design Your Dream Outfit</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Share your vision and let us craft it beautifully. Our designers will work with you to choose the perfect fabric and silhouette that celebrates your uniqueness.
            </p>
            <div className="space-y-6">
              {[
                { icon: Scissors, text: "Personalized Fitting" },
                { icon: Palette, text: "Bespoke Fabric Selection" },
                { icon: Sparkles, text: "Expert Styling Advice" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-pink/30 flex items-center justify-center text-brand-gold">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-brand-dark">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="glass-card bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-brand-dark">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-rose outline-none transition-all"
                    placeholder="E.g. Aditi Gupta"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-rose outline-none transition-all"
                    placeholder="+91"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2">Dress Type</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-rose outline-none transition-all cursor-pointer"
                    onChange={(e) => setFormData({...formData, dressType: e.target.value})}
                  >
                    {DRESS_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2">Fabric Selection</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-rose outline-none transition-all cursor-pointer"
                    onChange={(e) => setFormData({...formData, fabric: e.target.value})}
                  >
                    {FABRICS.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold mb-2">Design Description</label>
                <textarea 
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-rose outline-none transition-all"
                  placeholder="Describe your vision (neckline, sleeves, embroidery ideas...)"
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center group hover:border-brand-rose transition-colors cursor-pointer">
                <Upload className="mx-auto mb-2 text-gray-400 group-hover:text-brand-rose" size={24} />
                <p className="text-xs text-gray-500">Upload Reference Image (Optional)</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-brand-gold transition-all uppercase tracking-widest shadow-xl"
              >
                <MessageCircle size={20} />
                <span>Send Request on WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Our Design Inspirations</h2>
          <p className="text-gray-500 italic font-light tracking-wide">A cinematic journey through our latest couture lookbook</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg"
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs uppercase tracking-widest mb-2">{img.category}</span>
                <h3 className="text-white text-2xl font-serif">{img.title}</h3>
                <button className="mt-4 text-white flex items-center text-sm font-medium hover:text-brand-gold transition-colors">
                  Enquire about this design <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { 
      id: "01", 
      title: "Consultation", 
      desc: "We dive deep into your fashion vision, understanding fitting preferences, measurements, and the mood of your event.", 
      img: "/input_file_6.png"
    },
    { 
      id: "02", 
      title: "Fabric & Design", 
      desc: "Explore a curated library of silks, chiffons, and velvets. We sketch the silhouette that flatters your form.", 
      img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: "03", 
      title: "Stitching & Fitting", 
      desc: "Our master tailors bring the design to life with precision handwork, ensuring a flawless, second-skin fit.", 
      img: "https://images.unsplash.com/photo-1590674216803-85517cb83cc5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-brand-gold uppercase tracking-[0.4em] text-sm font-bold mb-4">The Atelier Reveal</h2>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">How Your Dress Is Made</h2>
        </div>

        <div className="space-y-32">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                className="w-full md:w-1/2 relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-4 bg-brand-gold/20 blur-2xl z-0" />
                <span className="absolute -top-16 -left-16 text-[12rem] font-serif font-bold text-white/5 pointer-events-none select-none leading-none">
                  {step.id}
                </span>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                className="w-full md:w-1/2"
              >
                <h3 className="text-brand-gold text-xl font-bold mb-4">Step {step.id}</h3>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {step.desc}
                </p>
                <div className="flex items-center space-x-2 text-brand-gold font-bold">
                  <span className="uppercase tracking-widest text-sm">Craftsmanship Details</span>
                  <div className="h-px bg-brand-gold w-12" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const cards = [
    { icon: ShieldCheck, title: "Perfect Fitting", desc: "Expert tailoring that complements your unique body type." },
    { icon: ShoppingBag, title: "Premium Fabrics", desc: "Sourced from the finest weaving centers across India." },
    { icon: Scissors, title: "Custom Stitching", desc: "No templates. Every garment is crafted from scratch." },
    { icon: MessageCircle, title: "Designer Consultation", desc: "Direct access to expert designers for every piece." },
    { icon: Heart, title: "Elegant Finishing", desc: "Focus on the smallest details for a boutique feel." },
    { icon: Star, title: "Trusted by Many", desc: "Hundreds of happy regular customers in Bhopal." },
  ];

  return (
    <section className="py-24 bg-brand-pink/20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-serif font-bold mb-16 text-brand-dark">Why Women Choose Ban Sanwar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/50 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-brand-pink rounded-2xl flex items-center justify-center text-brand-gold mb-6">
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-dark">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-brand-gold font-bold mb-2">Our Core Identity</h2>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Branding Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ rotateY: 10 }} className="p-10 rounded-3xl bg-brand-dark text-white shadow-2xl relative group overflow-hidden">
             <div className="text-5xl mb-6">🎨</div>
             <h3 className="text-2xl font-serif font-bold mb-4 luxury-text-gradient uppercase">Color</h3>
             <p className="text-gray-400 font-hindi mb-4 text-lg">Wo rang jo tere brand ki pehchaan ban jaaye. Logo nahi — sirf ek sahi color aur log tujhe yaad rakhenge.</p>
             <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div whileHover={{ rotateY: 10 }} className="p-10 rounded-3xl bg-brand-pink/10 text-brand-dark shadow-2xl relative group overflow-hidden border border-brand-pink">
             <div className="text-5xl mb-6">✍️</div>
             <h3 className="text-2xl font-serif font-bold mb-4 uppercase">Typography</h3>
             <p className="text-gray-600 leading-relaxed italic">Fonts create emotions such as elegance, confidence, and luxury. Our type selection reflects the strength and grace of womanhood.</p>
          </motion.div>

          <motion.div whileHover={{ rotateY: 10 }} className="p-10 rounded-3xl bg-white text-brand-dark shadow-2xl relative group overflow-hidden border border-gray-100">
             <div className="text-5xl mb-6">🧠</div>
             <h3 className="text-2xl font-serif font-bold mb-4 uppercase">Nature</h3>
             <p className="text-gray-600 leading-relaxed">Every business has a visual identity. We believe in creating emotional connections that transcend simple retail transactions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream border-t border-brand-pink">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8">Visit Our Studio</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-gray-600">HIG-224, opposite of Post Office, Laharpur, Bamugalia Extension, Bagmugaliya, Bhopal, Madhya Pradesh 462047</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Contact</h4>
                  <p className="text-gray-600">09131012509</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 11:00 AM - 08:30 PM <br /> Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors flex items-center">
                <MessageCircle className="mr-2" size={18} /> WhatsApp Us
              </button>
              <button className="border border-brand-dark text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all">
                Call Now
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl relative border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117320.73024846465!2d77.34863923485084!3d23.233213038663435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8ff68973%3A0x45057b102148b1d!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714480000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div>
          <h2 className="font-serif text-2xl font-bold mb-2">Ban Sanwar Boutique</h2>
          <p className="text-gray-500 font-light italic">Your Dream Outfit, Designed Just For You.</p>
        </div>
        <div className="flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-brand-pink transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
        </div>
        <p className="text-gray-600 text-sm">© 2024 Ban Sanwar Boutique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <DesignForm />
      <GallerySection />
      <ProcessSection />
      <Features />
      <Philosophy />
      
      {/* Testimonials */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-serif font-bold mb-12 text-brand-dark italic">"Reflections of Excellence"</h2>
          <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-xl snap-center relative border-t-4 border-brand-gold"
              >
                <Quote className="absolute top-4 right-4 text-brand-pink/30" size={40} />
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(t.rating) ? 'currentColor' : 'none'} />)}
                </div>
                <p className="text-brand-dark font-serif text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center font-bold text-brand-dark">
                    {t.name[0]}
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-gray-400">Verified Review • {t.source}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="bg-brand-dark text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Rated 4.3 ⭐ by 450+ happy customers
            </span>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/919131012509"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0)", "0 0 0 10px rgba(37, 211, 102, 0.2)", "0 0 0 0 rgba(37, 211, 102, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Global Cursor Glow */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-30 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(212,175,55,0.1)_0%,_transparent_50%)]" 
        style={{'--x': '50%', '--y': '50%'} as any}
      />
    </div>
  );
}
