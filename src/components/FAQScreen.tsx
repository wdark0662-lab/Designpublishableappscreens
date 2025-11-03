import { useState } from 'react';

interface FAQScreenProps {
  colors: any;
}

export default function FAQScreen({ colors }: FAQScreenProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como sei se me qualifico?',
      answer:
        'A elegibilidade varia por programa, mas geralmente depende do tamanho da família, renda e necessidades específicas. Use nossa ferramenta de Elegibilidade para verificar quais programas você pode acessar.',
    },
    {
      question: 'Quanto tempo demora?',
      answer:
        'Os tempos de processamento variam por programa. Alguns fornecem determinações imediatas, enquanto outros podem levar de 2 a 4 semanas. Programas de assistência emergencial geralmente processam aplicações mais rapidamente.',
    },
    {
      question: 'Posso me inscrever em vários programas?',
      answer:
        'Sim, você pode se inscrever em vários programas de assistência simultaneamente. Muitos programas se complementam e são projetados para funcionar juntos.',
    },
    {
      question: 'Quais documentos eu preciso?',
      answer:
        'Documentos comuns incluem comprovante de identidade, comprovante de renda (holerites, declarações de imposto), comprovante de residência e informações sobre composição familiar.',
    },
    {
      question: 'Com que frequência preciso recertificar?',
      answer:
        'A maioria dos programas requer recertificação periódica, normalmente a cada 6-12 meses. Você receberá um aviso antes de seus benefícios expirarem com instruções.',
    },
    {
      question: 'Minhas informações são confidenciais?',
      answer:
        'Sim, todas as informações pessoais são protegidas e mantidas confidenciais. As informações são compartilhadas apenas conforme exigido por lei ou com seu consentimento explícito.',
    },
    {
      question: 'E se eu for negado?',
      answer:
        'Se for negado, você tem o direito de apelar da decisão. Você receberá informações sobre o processo de apelação com seu aviso de negação.',
    },
    {
      question: 'Posso receber ajuda enquanto trabalho?',
      answer:
        'Sim, muitos programas são projetados para complementar a renda de indivíduos e famílias que trabalham. Ter emprego não desqualifica você automaticamente.',
    },
    {
      question: 'Como os valores são calculados?',
      answer:
        'Os valores de benefícios são calculados com base no tamanho da família, renda, despesas e diretrizes específicas do programa. Nossa ferramenta Calculadora pode ajudar a estimar benefícios potenciais.',
    },
    {
      question: 'Onde posso obter ajuda para me inscrever?',
      answer:
        'Muitas organizações comunitárias e agências de serviços sociais oferecem assistência gratuita para inscrição. Entre em contato com seu escritório local de serviços sociais para informações.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          Perguntas Frequentes
        </h1>
        <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
          Perguntas e respostas comuns
        </p>
      </div>

      {/* FAQ List */}
      <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ ...cardStyle, overflow: 'hidden' }}>
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                minHeight: '44px',
              }}
              aria-expanded={openIndex === index}
            >
              <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500, lineHeight: 1.4, flex: 1 }}>
                {faq.question}
              </span>
              <span style={{
                fontSize: '20px',
                color: colors.textSecondary,
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
                flexShrink: 0,
              }}>
                ˅
              </span>
            </button>
            {openIndex === index && (
              <div style={{ padding: '0 20px 20px' }}>
                <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div style={{ padding: '0 16px 24px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '18px', color: '#fff', margin: '0 0 8px 0', fontWeight: 600 }}>
            Precisa de Mais Ajuda?
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.5 }}>
            Entre em contato com seu escritório local de serviços sociais ou use nossas ferramentas para saber mais sobre programas disponíveis.
          </p>
        </div>
      </div>
    </div>
  );
}
