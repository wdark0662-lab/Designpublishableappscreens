interface GuideScreenProps {
  colors: any;
}

export default function GuideScreen({ colors }: GuideScreenProps) {
  const programs = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Assistência Familiar',
      description: 'Apoio para famílias com crianças',
      items: ['Subsídios para creches', 'Bolsas educacionais', 'Programas de saúde familiar'],
      color: colors.primary,
    },
    {
      icon: '🏠',
      title: 'Apoio à Moradia',
      description: 'Ajuda com custos de habitação',
      items: ['Assistência de aluguel', 'Vales de moradia', 'Abrigo de emergência'],
      color: colors.green,
    },
    {
      icon: '🍽️',
      title: 'Programas Nutricionais',
      description: 'Programas de assistência alimentar',
      items: ['Assistência alimentar', 'Programas de refeições', 'Apoio para compras'],
      color: '#f97316',
    },
    {
      icon: '❤️',
      title: 'Acesso à Saúde',
      description: 'Cobertura médica e apoio',
      items: ['Cobertura médica', 'Ajuda com medicamentos', 'Cuidados preventivos'],
      color: '#ef4444',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Verificar Elegibilidade',
      description: 'Veja quais programas você pode acessar',
    },
    {
      number: '2',
      title: 'Calcular Benefícios',
      description: 'Estime o valor da sua assistência potencial',
    },
    {
      number: '3',
      title: 'Solicitar Programas',
      description: 'Siga o processo de inscrição',
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
          Guia de Programas
        </h1>
        <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
          Programas de assistência disponíveis
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
            Como Começar
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
                Informação Importante
              </h3>
              <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
                A disponibilidade e os requisitos do programa podem variar. Sempre verifique os detalhes atuais antes de se inscrever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
