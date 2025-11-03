import { useState, useEffect } from 'react';
import { ArrowLeft, Star, Video, Calendar, Filter, Search } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';
import Button3D from './Button3D';

interface DoctorsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function DoctorsScreen({ onNavigate }: DoctorsScreenProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = [
    'All',
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'General',
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.9,
      reviews: 256,
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1758691462477-976f771224d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDA1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      price: '$150',
      hospital: 'City General Hospital',
      nextAvailable: 'Today, 2:30 PM',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      rating: 4.8,
      reviews: 312,
      experience: '18 years',
      image: 'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjIwMTQ0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      price: '$160',
      hospital: 'Metro Medical Center',
      nextAvailable: 'Tomorrow, 10:00 AM',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      rating: 4.9,
      reviews: 289,
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$130',
      hospital: 'Children\'s Hospital',
      nextAvailable: 'Today, 4:00 PM',
    },
    {
      id: 4,
      name: 'Dr. James Williams',
      specialty: 'Orthopedics',
      rating: 4.7,
      reviews: 198,
      experience: '20 years',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIwMzE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: false,
      price: '$170',
      hospital: 'Sports Medicine Clinic',
      nextAvailable: 'Nov 5, 9:00 AM',
    },
    {
      id: 5,
      name: 'Dr. Priya Patel',
      specialty: 'Dermatology',
      rating: 4.9,
      reviews: 342,
      experience: '14 years',
      image: 'https://images.unsplash.com/photo-1576669802218-d535933f897c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGRvY3RvciUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYyMDMxODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      price: '$140',
      hospital: 'Skin Health Center',
      nextAvailable: 'Today, 3:15 PM',
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Cardiology',
      rating: 4.8,
      reviews: 276,
      experience: '22 years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$165',
      hospital: 'Heart Care Institute',
      nextAvailable: 'Tomorrow, 11:30 AM',
    },
    {
      id: 7,
      name: 'Dr. Lisa Anderson',
      specialty: 'Psychiatry',
      rating: 4.9,
      reviews: 423,
      experience: '16 years',
      image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzYxOTM5MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      price: '$145',
      hospital: 'Mental Wellness Clinic',
      nextAvailable: 'Today, 5:00 PM',
    },
    {
      id: 8,
      name: 'Dr. David Kim',
      specialty: 'General',
      rating: 4.7,
      reviews: 187,
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$100',
      hospital: 'Community Health Center',
      nextAvailable: 'Today, 1:00 PM',
    },
    {
      id: 9,
      name: 'Dr. Amanda Foster',
      specialty: 'Pediatrics',
      rating: 4.8,
      reviews: 234,
      experience: '13 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: false,
      price: '$125',
      hospital: 'Family Care Clinic',
      nextAvailable: 'Nov 4, 2:00 PM',
    },
    {
      id: 10,
      name: 'Dr. Thomas Wright',
      specialty: 'Orthopedics',
      rating: 4.9,
      reviews: 298,
      experience: '19 years',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$155',
      hospital: 'Joint & Spine Center',
      nextAvailable: 'Tomorrow, 9:30 AM',
    },
    {
      id: 11,
      name: 'Dr. Maria Gonzalez',
      specialty: 'Dermatology',
      rating: 4.8,
      reviews: 267,
      experience: '11 years',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$135',
      hospital: 'Advanced Dermatology',
      nextAvailable: 'Today, 6:00 PM',
    },
    {
      id: 12,
      name: 'Dr. Christopher Lee',
      specialty: 'Neurology',
      rating: 4.9,
      reviews: 389,
      experience: '21 years',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$175',
      hospital: 'Neuro Specialist Center',
      nextAvailable: 'Tomorrow, 1:30 PM',
    },
    {
      id: 13,
      name: 'Dr. Jennifer Taylor',
      specialty: 'General',
      rating: 4.7,
      reviews: 156,
      experience: '9 years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$95',
      hospital: 'Primary Care Associates',
      nextAvailable: 'Today, 11:00 AM',
    },
    {
      id: 14,
      name: 'Dr. Daniel Brown',
      specialty: 'Cardiology',
      rating: 4.8,
      reviews: 321,
      experience: '17 years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: false,
      price: '$160',
      hospital: 'Cardiovascular Institute',
      nextAvailable: 'Nov 6, 10:00 AM',
    },
    {
      id: 15,
      name: 'Dr. Sophia White',
      specialty: 'Psychiatry',
      rating: 4.9,
      reviews: 412,
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      available: true,
      price: '$150',
      hospital: 'Behavioral Health Center',
      nextAvailable: 'Tomorrow, 3:00 PM',
    },
  ];

  // Filter doctors based on specialty and search query
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hospital Lobby Background with Parallax */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1700373111423-433856a32b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMDQ3MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hospital Lobby"
          style={{
            width: '100%',
            height: '110%',
            objectFit: 'cover',
            opacity: 0.12,
          }}
        />
      </div>

      {/* Light Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
          zIndex: 0,
        }}
      />

      {/* Warm Teal Accent */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '30%',
          background: 'radial-gradient(ellipse at center, rgba(0, 191, 165, 0.08) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '20px',
          paddingTop: 'calc(20px + env(safe-area-inset-top))',
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <button
            onClick={() => onNavigate('home')}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <ArrowLeft size={20} color="#fff" />
          </button>
          
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', margin: 0 }}>
            Find Doctors
          </h1>
        </div>

        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '16px' }}>
          {filteredDoctors.length} specialists available
        </p>

        {/* Search Bar */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <Search size={20} color="#64748b" />
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              backgroundColor: 'transparent',
              color: '#0f172a',
            }}
          />
        </div>

        {/* Specialty Filters */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '8px',
          }}
        >
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              style={{
                padding: '8px 16px',
                borderRadius: '12px',
                border: 'none',
                background: selectedSpecialty === specialty
                  ? 'rgba(255, 255, 255, 0.95)'
                  : 'rgba(255, 255, 255, 0.2)',
                color: selectedSpecialty === specialty ? '#3b82f6' : '#fff',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: 'calc(100% - 240px)',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            height: '100%',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
          }}
        >
          <div style={{ padding: '20px' }}>
            {/* Doctors List */}
            {filteredDoctors.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: '#64748b',
                }}
              >
                <p style={{ fontSize: '16px', marginBottom: '8px' }}>No doctors found</p>
                <p style={{ fontSize: '14px' }}>Try adjusting your search or filters</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    style={{
                      background: '#fff',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 -3px 0 rgba(0, 0, 0, 0.03)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {/* Doctor Image */}
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                      <ImageWithFallback
                        src={doctor.image}
                        alt={doctor.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      
                      {/* Availability Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          padding: '8px 16px',
                          borderRadius: '12px',
                          background: doctor.available
                            ? 'rgba(16, 185, 129, 0.95)'
                            : 'rgba(239, 68, 68, 0.95)',
                          backdropFilter: 'blur(10px)',
                          color: '#fff',
                          fontSize: '12px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                          }}
                        />
                        {doctor.available ? 'Available' : 'Busy'}
                      </div>

                      {/* Gradient Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '60%',
                          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                        }}
                      />
                    </div>

                    {/* Doctor Info */}
                    <div style={{ padding: '20px' }}>
                      <div style={{ marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' }}>
                          {doctor.name}
                        </h3>
                        <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', margin: '0 0 4px 0' }}>
                          {doctor.specialty}
                        </p>
                        <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                          📍 {doctor.hospital}
                        </p>
                      </div>

                      {/* Stats */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          marginBottom: '16px',
                          paddingBottom: '16px',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                            <Star size={16} color="#f59e0b" fill="#f59e0b" />
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                              {doctor.rating}
                            </span>
                          </div>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                            {doctor.reviews} reviews
                          </p>
                        </div>

                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>
                            {doctor.experience}
                          </p>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                            Experience
                          </p>
                        </div>

                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>
                            {doctor.price}
                          </p>
                          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                            Consultation
                          </p>
                        </div>
                      </div>

                      {/* Next Available */}
                      <div
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          background: doctor.available ? '#f0f9ff' : '#fef2f2',
                          marginBottom: '16px',
                        }}
                      >
                        <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>
                          Next Available
                        </p>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: doctor.available ? '#3b82f6' : '#ef4444', margin: 0 }}>
                          {doctor.nextAvailable}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <Button3D
                          variant="outline"
                          size="md"
                          style={{
                            background: '#fff',
                            border: '2px solid #00BFA5',
                            color: '#00BFA5',
                            boxShadow: '0 6px 0 rgba(0, 191, 165, 0.2), 0 10px 24px rgba(0, 191, 165, 0.2)',
                          }}
                        >
                          <Video size={18} />
                          Video Call
                        </Button3D>

                        <Button3D
                          onClick={() => onNavigate('new-appointment')}
                          disabled={!doctor.available}
                          variant="primary"
                          size="md"
                        >
                          <Calendar size={18} />
                          Book Now
                        </Button3D>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <BottomNav currentScreen="doctors" onNavigate={onNavigate} />
      </div>
    </div>
  );
}
