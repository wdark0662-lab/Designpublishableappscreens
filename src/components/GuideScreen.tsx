interface GuideScreenProps {
  colors: any;
}

export default function GuideScreen({ colors }: GuideScreenProps) {
  const programs = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Assistance',
      description: 'Support for families with children',
      items: ['Childcare subsidies', 'Educational grants', 'Family health programs'],
      color: colors.primary,
    },
    {
      icon: '🏠',
      title: 'Housing Support',
      description: 'Help with housing costs',
      items: ['Rental assistance', 'Housing vouchers', 'Emergency shelter'],
      color: colors.green,
    },
    {
      icon: '🍽️',
      title: 'Nutrition Programs',
      description: 'Food assistance programs',
      items: ['Food assistance', 'Meal programs', 'Grocery support'],
      color: '#f97316',
    },
    {
      icon: '❤️',
      title: 'Healthcare Access',
      description: 'Medical coverage and support',
      items: ['Medical coverage', 'Prescription help', 'Preventive care'],
      color: '#ef4444',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Check Eligibility',
      description: 'See which programs you may qualify for',
    },
    {
      number: '2',
      title: 'Calculate Benefits',
      description: 'Estimate your potential assistance amount',
    },
    {
      number: '3',
      title: 'Apply for Programs',
      description: 'Follow the application process',
    },
  ];

  const cardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.background }}>
      {/* Header */}
      <div style={{
        padding: '24px 16px',
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <h1 style={{ fontSize: '24px', color: colors.text, margin: '0 0 8px 0', fontWeight: 600 }}>
          Program Guide
        </h1>
        <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
          Available assistance programs
        </p>
      </div>

      {/* Programs List */}
      <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {programs.map((program, index) => (
          <div key={index} style={{ ...cardStyle, padding: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: program.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0,
              }}>
                {program.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', color: colors.text, margin: '0 0 4px 0', fontWeight: 600 }}>
                  {program.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                  {program.description}
                </p>
              </div>
            </div>

            <div style={{ paddingLeft: '64px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {program.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: colors.textSecondary,
                  }} />
                  <span style={{ fontSize: '14px', color: colors.text }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How to Get Started */}
      <div style={{ padding: '0 16px 24px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: '#fff', margin: '0 0 24px 0', fontWeight: 600 }}>
            How to Get Started
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  flexShrink: 0,
                  fontWeight: 500,
                }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#fff', margin: '0 0 4px 0', fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.5 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div style={{ padding: '0 16px 24px' }}>
        <div style={{
          ...cardStyle,
          padding: '20px',
          borderColor: colors.green,
        }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontSize: '20px', color: colors.green, flexShrink: 0, marginTop: '2px' }}>ℹ️</span>
            <div>
              <h3 style={{ fontSize: '16px', color: colors.text, margin: '0 0 4px 0', fontWeight: 500 }}>
                Important Information
              </h3>
              <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
                Program availability and requirements may vary. Always verify current details before applying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
