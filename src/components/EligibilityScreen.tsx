import { useState } from 'react';

interface EligibilityScreenProps {
  colors: any;
}

export default function EligibilityScreen({ colors }: EligibilityScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: 'Qual é o tamanho da sua família?',
      options: ['1 pessoa', '2 pessoas', '3 pessoas', '4+ pessoas'],
    },
    {
      id: 1,
      question: 'Qual é a sua renda mensal aproximada?',
      options: ['Menos de R$ 1.500', 'R$ 1.500 - R$ 3.000', 'R$ 3.000 - R$ 5.000', 'Mais de R$ 5.000'],
    },
    {
      id: 2,
      question: 'Você tem filhos menores de 18 anos?',
      options: ['Sim', 'Não'],
    },
    {
      id: 3,
      question: 'Que tipo de assistência você está buscando?',
      options: ['Moradia', 'Alimento/Nutrição', 'Saúde', 'Vários tipos'],
    },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateEligibility = () => {
    const results = [
      {
        program: 'Assistência Familiar',
        eligible:
          answers[2] === 'Sim' &&
          (answers[1] === 'Menos de R$ 1.500' || answers[1] === 'R$ 1.500 - R$ 3.000'),
        description: 'Apoio para famílias com crianças',
      },
      {
        program: 'Apoio à Moradia',
        eligible: answers[3] === 'Moradia' || answers[3] === 'Vários tipos',
        description: 'Assistência de aluguel e programas de moradia',
      },
      {
        program: 'Programas Nutricionais',
        eligible: answers[1] === 'Menos de R$ 1.500' || answers[1] === 'R$ 1.500 - R$ 3.000',
        description: 'Assistência alimentar e programas de refeições',
      },
      {
        program: 'Acesso à Saúde',
        eligible: answers[1] !== 'Mais de R$ 5.000',
        description: 'Cobertura médica e ajuda com medicamentos',
      },
    ];
    return results;
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const cardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  if (showResults) {
    const results = calculateEligibility();
    const eligibleCount = results.filter((r) => r.eligible).length;

    return (
      <div style={{ minHeight: '100%', backgroundColor: colors.background }}>
        {/* Results Header */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.green} 0%, #16a34a 100%)`,
          padding: '24px 16px 32px',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              ✅
            </div>
            <div>
              <h1 style={{ fontSize: '24px', color: '#fff', margin: 0, fontWeight: 600 }}>Seus Resultados</h1>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                {eligibleCount} programa{eligibleCount !== 1 ? 's' : ''} disponível{eligibleCount !== 1 ? 'is' : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {results.map((result, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                padding: '20px',
                borderColor: result.eligible ? colors.green : colors.border,
                backgroundColor: result.eligible ? colors.surface : colors.surfaceLight,
                opacity: result.eligible ? 1 : 0.7,
              }}
            >
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: result.eligible ? colors.green : colors.textSecondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}>
                  {result.eligible ? '✓' : '✕'}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '16px', color: colors.text, margin: '0 0 4px 0', fontWeight: 500 }}>
                    {result.program}
                  </h3>
                  <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 16px 24px' }}>
          <div style={{
            ...cardStyle,
            padding: '20px',
            borderColor: colors.primary,
            backgroundColor: colors.surfaceLight,
          }}>
            <p style={{ fontSize: '14px', color: colors.text, margin: '0 0 16px 0', lineHeight: 1.5 }}>
              Estes resultados são estimativas. Use nossa calculadora para estimar valores potenciais de benefícios.
            </p>
            <button
              onClick={resetQuiz}
              style={{
                width: '100%',
                backgroundColor: colors.primary,
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '44px',
              }}
            >
              <span>🔄</span>
              Começar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.background }}>
      {/* Header */}
      <div style={{
        padding: '24px 16px',
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <h1 style={{ fontSize: '24px', color: colors.text, margin: '0 0 16px 0', fontWeight: 600 }}>
          Verificar Elegibilidade
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: colors.textSecondary }}>
              Pergunta {currentStep + 1} de {questions.length}
            </span>
            <span style={{ fontSize: '14px', color: colors.primary, fontWeight: 500 }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: colors.surfaceLight,
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: colors.primary,
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>
      </div>

      {/* Question */}
      <div style={{ padding: '24px 16px' }}>
        <div style={{ ...cardStyle, padding: '24px', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: colors.text, margin: '0 0 20px 0', fontWeight: 600, lineHeight: 1.4 }}>
            {question.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{
                  backgroundColor: colors.surfaceLight,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '44px',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.surface;
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.surfaceLight;
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                <span style={{ fontSize: '16px', color: colors.text }}>{option}</span>
                <span style={{ fontSize: '20px', color: colors.textSecondary }}>›</span>
              </button>
            ))}
          </div>
        </div>

        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              color: colors.primary,
              padding: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              minHeight: '44px',
            }}
          >
            ← Voltar
          </button>
        )}
      </div>
    </div>
  );
}
