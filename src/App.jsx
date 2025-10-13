import React, { useState, useEffect } from 'react';
import { Music, Calendar, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import './App.css';


const IndianClassicalMusicClub = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slides = [
    {
      image: './slide1.jpg',
      title: 'Igniting passion / evoking curiosity for Indian classical music',
      subtitle: 'SBU\'s first! (seeking university recognition)' 
    },
    {
      image: './slide2.jpg',
      title: 'Igniting passion / evoking curiosity for Indian classical music',
      subtitle: 'SBU\'s first! (seeking university recognition)' 
    },
    {
      image: './slide3.jpg',
      title: 'Igniting passion / evoking curiosity for Indian classical music',
      subtitle: 'SBU\'s first! (seeking university recognition)' 
    }
  ];

  const events = [
    {
      date: '08 Oct 2025',
      title: 'GBM #3',
      description: 'We will be going over different types of Ragas! Feel free to join us and share what you know / learn something new!',
      time: '5:00 PM - 6:00 PM',
      venue: 'SAC 305'
    },
    {
      date: '24 Sep 2025',
      title: 'SUR: GBM #2',
      description: 'Learn the musical notes of Indian Classical Music',
      time: '5:00 PM - 6:00 PM',
      venue: 'SAC 305'
    },
    {
      date: '10 Sep 2025',
      title: 'GBM #1',
      description: 'Join us for our first GBM as we introduce our mission, meet the e-board, and enjoy some light activities with free packaged stuff!',
      time: '5:00 PM - 6:30 PM',
      venue: 'Tabler 110'
    },
    {
      date: '03 Sep 2025',
      title: 'Involvement Fair',
      description: "Come meet us at the Involvement Fair!",
      time: '12:30 PM - 1:50 PM',
      venue: 'SAC Plaza Mall'
    },
    {
      date: '21 Aug 2025',
      title: 'Music Maker\'s Jam Session',
      description: "Join us as we introduce our club during the Music Makers’ Jam Session!",
      time: '5:00 PM - 7:00 PM',
      venue: 'Tabler 110'
    }
  ];

  const applyRepUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe3tdPz7frbWG2TEmMykbSE59vBinNxNEHiyF2ikIaXWeBbAQ/viewform";
  const googleDriveUrl = "https://drive.google.com/drive/folders/1MkK7hsBX0MQfakhu2hoYRpCA6n3mJBWR";

  const eboard = [
    {
      name: 'Nandini Goswami',
      role: 'President',
      year: 'Sophomore',
      major: 'Applied Math and Statistics & Mathematics',
      image: './eboard1.jpg'
    },
    {
      name: 'Shelly Lazbin',
      role: 'Vice President',
      year: 'Sophomore',
      major: 'Economics and Political Science',
      image: './eboard2.jpg'
    },
    {
      name: 'Sumit Kumar',
      role: 'Treasurer',
      year: 'Sophomore',
      major: 'Computer Science',
      image: './eboard3.jpg'
    },
    {
      name: 'Amanda Cai',
      role: 'Secretary',
      year: 'Sophomore',
      major: 'Applied Math and Statistics',
      image: './eboard4.jpg'
    },
    {
      name: 'Parth Saripadiya',
      role: 'PR Head',
      year: 'Junior',
      major: 'Applied Math and Statistics',
      image: './eboard5.jpg'
    }
  ];
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.title = "Indian Classical Music Club at SBU";
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container" style={{ width: '100vw', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Music size={24} />
            <span>SBU Indian Classical Music Club</span>
          </div>
          
          {/* Navigation Links */}
          <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Events', id: 'events' },
                { name: 'E-Board', id: 'eboard' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    className="nav-link"
                    style={{
                      color: activeSection === item.id ? '#FF6B35' : 'white'
                    }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FF6B35'}
                    onMouseOut={(e) => e.target.style.color = activeSection === item.id ? '#FF6B35' : 'white'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
  
      {/* Hero Section */}
      <section id="home" className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: currentSlide === index ? 1 : 0
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              
            </div>
          </div>
        ))}
      </section>
  
      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Our Club</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">
            The Indian Classical Music Club at Stony Brook University aims to spread awareness and our passion for Indian Classical music (mainly vocal and instrumental), while evoking a sense of curiosity and appreciation for the art form in creative and engaging ways. While we do teach singing and music theory, we aspire to explore the overlaps between Indian classical music and other fields like mathematics, art, music therapy, etc.
            </p>
          </div>
          <div>
            <img
              src="./logo.png"
              alt="Club Logo"
              className="about-image"
            />
          </div>
        </div>
      </section>
  
      {/* Events Section */}
      <section id="events" className="section" style={{background: '#f8f9fa'}}>
        <h2 className="section-title">Events</h2>
        
        {/* Google Drive Resources */}
        <div style={{textAlign: 'center', marginBottom: '2rem', padding: '1.5rem', background: 'white', borderRadius: '12px', maxWidth: '600px', margin: '0 auto 2rem auto', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
          <p style={{fontSize: '1.1rem', marginBottom: '1rem', color: '#333'}}>
            All slides from our GBMs will be available on Google Drive.
          </p>
          <a
            href={googleDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2563eb'}
            onMouseOut={(e) => e.target.style.background = '#3b82f6'}
          >
            Access GBM Slides
          </a>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
            >
              <div className="event-date">{event.date}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <p style={{color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                <Calendar size={16} />
                {event.time}
              </p>
              <p style={{color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <MapPin size={16} />
                {event.venue}
              </p>
            </div>
          ))}
        </div>
      </section>
  
       {/* E-Board Section */}
      <section id="eboard" className="section">
        <h2 className="section-title">Current Executive Board</h2>
        <div className="eboard-grid">
          {eboard.map((member, index) => (
            <div
              key={index}
              className="eboard-card"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="eboard-image"
              />
              <h3 className="eboard-name">{member.name}</h3>
              <p className="eboard-role">{member.role}</p>
              <p style={{color: '#666', marginBottom: '0.3rem'}}>{member.year}</p>
              <p style={{color: '#666', fontSize: '0.9rem'}}>{member.major}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section" style={{background: '#f8f9fa', textAlign: 'center', padding: '4rem 1rem'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <Users size={48} style={{color: '#FF6B35', margin: '0 auto 1rem'}} />
          <h2 className="section-title" style={{marginBottom: '1rem'}}>Join Our Team</h2>
          <p style={{fontSize: '1.2rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6'}}>
            We are currently looking for representatives to help spread the joy of Indian Classical Music!
          </p>
          <a
            href={applyRepUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#f97316',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#ea580c'}
            onMouseOut={(e) => e.target.style.background = '#f97316'}
          >
            Apply to be a Representative
          </a>
        </div>
      </section>
  
{/* Footer */}
<footer id="contact" className="footer bg-gray-900 text-white py-10">
  <div className="footer-grid max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
    
    {/* Contact */}
    <div className="footer-section">
      <h3 className="footer-title text-lg font-semibold mb-3">Contact Us</h3>
      <div className="contact-item flex items-center justify-center md:justify-start gap-2">
        <Mail size={18} />
        <a
          href="mailto:sbu.icm@gmail.com"
          className="hover:text-blue-400 transition-colors"
        >
          sbu.icm@gmail.com
        </a>
      </div>
    </div>

    {/* Socials */}
    <div className="footer-section">
      <h3 className="footer-title text-lg font-semibold mb-3">Social Media</h3>
      <div className="flex items-center justify-center md:justify-start gap-6">
        <div className="social-links">
  <a href="https://www.instagram.com/sbu.icm" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" alt="Instagram" width="32" />
  </a>
  <a href="https://discord.com/invite/Vr8gD6BJqq" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.worldvectorlogo.com/logos/discord-6.svg" alt="Discord" width="34" />
  </a>
</div>
      </div>
    </div>
  </div>
  {/* Mailing List */}
    <div className="footer-section">
      <h3 className="footer-title text-lg font-semibold mb-3">Mailing List</h3>
      <p className="text-sm opacity-80 mb-3">
        Stay updated on events and activities.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeHy0fNWMZoPGcRxETH1u5wt7KAndZF0yoN-obdB6mMElJDrA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        Join Mailing List (only with SBU email)
      </a>
    </div>

  {/* Bottom bar */}
  <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm opacity-70">
    <p>&copy; 2025 Indian Classical Music Club. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default IndianClassicalMusicClub;