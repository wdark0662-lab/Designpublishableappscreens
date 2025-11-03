import { useState, useEffect } from 'react';
import { Heart, Activity, Calendar, Shield, Users, CheckCircle, ArrowRight, Menu, X, Star, Stethoscope, Clock, Award } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Button3D from './Button3D';

interface LandingPageProps {
  onNavigate: (screen: Screen) => void;
  onGetStarted: (name: string) => void;
}

export default function LandingPage({ onNavigate, onGetStarted }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Track your heart rate, blood pressure, temperature, and other vital signs in real-time with AI-powered insights.',
      color: '#00BFA5',
    },
    {
      icon: Calendar,
      title: 'Smart Appointments',
      description: 'Book appointments with top doctors instantly. Calendar-based scheduling with automatic reminders.',
      color: '#00BFA5',
    },
    {
      icon: Heart,
      title: 'Health Diagnosis',
      description: 'AI-assisted health evaluation. Answer questions and get preliminary diagnosis with urgency levels.',
      color: '#00BFA5',
    },
    {
      icon: Shield,
      title: 'Secure Records',
      description: 'Your medical records encrypted and stored securely. Access anytime, anywhere with complete privacy.',
      color: '#00BFA5',
    },
    {
      icon: Stethoscope,
      title: 'Expert Doctors',
      description: '15+ verified specialists across 7+ medical fields. Find the perfect doctor for your needs.',
      color: '#00BFA5',
    },
    {
      icon: Users,
      title: 'Telemedicine',
      description: 'Video consultations with doctors from the comfort of your home. Available 24/7 for urgent care.',
      color: '#00BFA5',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Sign Up',
      description: 'Create your free account in seconds. No credit card required.',
      icon: '👤',
    },
    {
      step: 2,
      title: 'Complete Profile',
      description: 'Add your medical history and vital information securely.',
      icon: '📋',
    },
    {
      step: 3,
      title: 'Start Tracking',
      description: 'Monitor your health, book appointments, and consult doctors.',
      icon: '💚',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '15+', label: 'Specialist Doctors' },
    { number: '100K+', label: 'Appointments Booked' },
    { number: '4.9/5', label: 'User Rating' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Healix transformed how I manage my health. The vital signs tracking is incredibly accurate and the doctors are top-notch!',
    },
    {
      name: 'Michael Chen',
      role: 'Chronic Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'As someone with diabetes, monitoring my health daily is crucial. Healix makes it so easy and the AI insights are amazing.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Professional',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Booking appointments used to be a hassle. Now I can do it in 2 minutes from my phone. The telemedicine feature is a lifesaver!',
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic health tracking',
        '1 doctor consultation/month',
        'Health records storage',
        'Community support',
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        'Advanced vital signs monitoring',
        'Unlimited consultations',
        'AI health insights',
        'Priority support',
        'Family accounts (up to 4)',
        'Prescription management',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'API access',
        'Corporate wellness programs',
        '24/7 premium support',
      ],
      recommended: false,
    },
  ];

  const handleGetStarted = () => {
    onGetStarted('Guest User');
    onNavigate('home');
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#fff',
        overflowX: 'hidden',
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f0f0f0',
          zIndex: 1000,
          padding: '16px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Heart size={24} color="#fff" />
            </div>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a' }}>
              Healix
            </span>
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: window.innerWidth > 768 ? 'flex' : 'none',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <a href="#features" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
              Features
            </a>
            <a href="#how-it-works" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
              How it Works
            </a>
            <a href="#pricing" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
              Pricing
            </a>
            <a href="#testimonials" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
              Testimonials
            </a>
            <Button3D
              onClick={handleGetStarted}
              variant="primary"
              size="sm"
            >
              Get Started
            </Button3D>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} color="#1a1a1a" /> : <Menu size={24} color="#1a1a1a" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#fff',
              borderTop: '1px solid #f0f0f0',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#features" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
                Features
              </a>
              <a href="#how-it-works" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
                How it Works
              </a>
              <a href="#pricing" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
                Pricing
              </a>
              <a href="#testimonials" style={{ color: '#666', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
                Testimonials
              </a>
              <Button3D
                onClick={handleGetStarted}
                variant="primary"
                size="sm"
              >
                Get Started
              </Button3D>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        style={{
          marginTop: '80px',
          padding: '80px 20px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '600px',
        }}
      >
        {/* Hospital Exterior Background with Parallax */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGV4dGVyaW9yJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyMDMxMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern Hospital Exterior"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 191, 165, 0.95) 0%, rgba(0, 137, 123, 0.95) 100%)',
          }}
        />

        {/* Warm Overlay for Harmony */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(255, 193, 7, 0.1) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '60px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Hero Content */}
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '24px',
              }}
            >
              <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                ✨ Trusted by 50,000+ users worldwide
              </span>
            </div>

            <h1
              style={{
                fontSize: window.innerWidth > 768 ? '56px' : '40px',
                fontWeight: '800',
                color: '#fff',
                margin: '0 0 24px 0',
                lineHeight: '1.2',
              }}
            >
              Your Health,
              <br />
              Our Priority
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: '0 0 40px 0',
                lineHeight: '1.7',
              }}
            >
              Monitor vital signs, track health metrics, book appointments with top doctors,
              and get AI-powered health insights—all in one intelligent platform.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button3D
                onClick={handleGetStarted}
                variant="white"
                size="lg"
              >
                Get Started Free
                <ArrowRight size={20} />
              </Button3D>

              <Button3D
                variant="outline"
                size="lg"
                style={{
                  background: 'transparent',
                  border: '2px solid #fff',
                  color: '#fff',
                  boxShadow: '0 6px 0 rgba(255, 255, 255, 0.3), 0 10px 24px rgba(255, 255, 255, 0.2)',
                }}
              >
                Watch Demo
              </Button3D>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '24px',
                marginTop: '60px',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            style={{
              position: 'relative',
              display: window.innerWidth > 768 ? 'block' : 'none',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
                alt="Healthcare Professional"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                }}
              />

              {/* Floating Cards */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '-20px',
                  background: '#fff',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Heart size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Heart Rate</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#00BFA5' }}>72 BPM</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-20px',
                  background: '#fff',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  animation: 'float 3s ease-in-out infinite 1s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Activity size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Steps Today</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#00BFA5' }}>8,432</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        {/* Consultation Room Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvbnN1bHRhdGlvbiUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIwNDcwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Consultation Room"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              opacity: 0.15,
            }}
          />
        </div>

        {/* Warm Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.98) 100%)',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? '48px' : '36px',
                fontWeight: '800',
                color: '#1a1a1a',
                margin: '0 0 16px 0',
              }}
            >
              Everything You Need
            </h2>
            <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
              Comprehensive healthcare management in one intelligent platform
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '32px',
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 191, 165, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={28} color={feature.color} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px 0' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666', margin: 0, lineHeight: '1.7' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? '48px' : '36px',
                fontWeight: '800',
                color: '#1a1a1a',
                margin: '0 0 16px 0',
              }}
            >
              How It Works
            </h2>
            <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
              Get started in 3 simple steps
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '48px',
            }}
          >
            {howItWorks.map((step, index) => (
              <div key={step.step} style={{ textAlign: 'center', position: 'relative' }}>
                {index < howItWorks.length - 1 && window.innerWidth > 768 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '60px',
                      right: '-24px',
                      width: '48px',
                      height: '2px',
                      background: '#e0e0e0',
                    }}
                  />
                )}
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '56px',
                  }}
                >
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px 0' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#666', margin: 0, lineHeight: '1.7' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '100px 20px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? '48px' : '36px',
                fontWeight: '800',
                color: '#1a1a1a',
                margin: '0 0 16px 0',
              }}
            >
              What Our Users Say
            </h2>
            <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
              Join thousands of satisfied users managing their health with Healix
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '32px',
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#666', margin: '0 0 24px 0', lineHeight: '1.7' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        {/* Examination Room Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXhhbWluYXRpb24lMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2MjA0NzA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Examination Room"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              opacity: 0.1,
            }}
          />
        </div>

        {/* Light Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? '48px' : '36px',
                fontWeight: '800',
                color: '#1a1a1a',
                margin: '0 0 16px 0',
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
              Choose the plan that's right for you
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '32px',
            }}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.recommended ? 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)' : '#fff',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: plan.recommended
                    ? '0 12px 40px rgba(0, 191, 165, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  border: plan.recommended ? 'none' : '2px solid #f0f0f0',
                  transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {plan.recommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#fff',
                      color: '#00BFA5',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    RECOMMENDED
                  </div>
                )}

                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: plan.recommended ? '#fff' : '#1a1a1a',
                    margin: '0 0 8px 0',
                  }}
                >
                  {plan.name}
                </h3>

                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      fontSize: '48px',
                      fontWeight: '800',
                      color: plan.recommended ? '#fff' : '#1a1a1a',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: '16px',
                      color: plan.recommended ? 'rgba(255, 255, 255, 0.8)' : '#666',
                    }}
                  >
                    /{plan.period}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: '15px',
                        color: plan.recommended ? 'rgba(255, 255, 255, 0.9)' : '#666',
                      }}
                    >
                      <CheckCircle
                        size={20}
                        color={plan.recommended ? '#fff' : '#00BFA5'}
                        fill={plan.recommended ? '#fff' : '#00BFA5'}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button3D
                  onClick={handleGetStarted}
                  variant={plan.recommended ? 'outline' : 'primary'}
                  size="md"
                  fullWidth
                  style={plan.recommended ? {
                    background: 'transparent',
                    border: '2px solid #fff',
                    color: '#fff',
                    boxShadow: '0 6px 0 rgba(255, 255, 255, 0.3), 0 10px 24px rgba(255, 255, 255, 0.2)',
                  } : {}}
                >
                  {plan.name === 'Free' ? 'Start Free' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button3D>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '100px 20px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Hospital Corridor Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1584876981516-db6024a82322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvcnJpZG9yJTIwbW9kZXJuJTIwY2xlYW58ZW58MXx8fHwxNzYyMDQ3MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hospital Corridor"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Teal Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 191, 165, 0.95) 0%, rgba(0, 137, 123, 0.95) 100%)',
          }}
        />

        {/* Warm Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(255, 193, 7, 0.15) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: window.innerWidth > 768 ? '48px' : '36px',
              fontWeight: '800',
              color: '#fff',
              margin: '0 0 24px 0',
            }}
          >
            Ready to Take Control of Your Health?
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 40px 0',
              lineHeight: '1.7',
            }}
          >
            Join 50,000+ users who trust Healix for their healthcare needs.
            Start your journey to better health today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button3D
              onClick={handleGetStarted}
              variant="white"
              size="lg"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Button3D>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', padding: '60px 20px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : '1fr',
              gap: '40px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Heart size={24} color="#fff" />
                </div>
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>
                  Healix
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#999', margin: 0, lineHeight: '1.6' }}>
                Your trusted healthcare companion for monitoring, tracking, and managing your health.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', margin: '0 0 16px 0' }}>
                Product
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#features" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Features</a>
                <a href="#pricing" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Pricing</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Doctors</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Telemedicine</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', margin: '0 0 16px 0' }}>
                Company
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>About Us</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Careers</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Blog</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Contact</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', margin: '0 0 16px 0' }}>
                Legal
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Terms of Service</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>HIPAA Compliance</a>
                <a href="#" style={{ fontSize: '14px', color: '#999', textDecoration: 'none' }}>Security</a>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid #333',
              paddingTop: '20px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
              © 2025 Healix. All rights reserved. Made with ❤️ for better healthcare.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
}
