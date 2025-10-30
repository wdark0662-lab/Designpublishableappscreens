import { useState } from 'react';

interface FAQScreenProps {
  colors: any;
}

export default function FAQScreen({ colors }: FAQScreenProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I know if I qualify?',
      answer:
        'Eligibility varies by program but generally depends on household size, income, and specific needs. Use our Eligibility tool to check which programs you may qualify for.',
    },
    {
      question: 'How long does it take?',
      answer:
        'Processing times vary by program. Some provide immediate determinations, while others may take 2-4 weeks. Emergency assistance programs typically process applications faster.',
    },
    {
      question: 'Can I apply for multiple programs?',
      answer:
        'Yes, you can apply for multiple assistance programs simultaneously. Many programs complement each other and are designed to work together.',
    },
    {
      question: 'What documents do I need?',
      answer:
        'Common documents include proof of identity, income verification (pay stubs, tax returns), proof of residence, and household composition information.',
    },
    {
      question: 'How often do I need to recertify?',
      answer:
        'Most programs require periodic recertification, typically every 6-12 months. You will receive notice before your benefits expire with instructions.',
    },
    {
      question: 'Is my information confidential?',
      answer:
        'Yes, all personal information is protected and kept confidential. Information is only shared as required by law or with your explicit consent.',
    },
    {
      question: "What if I'm denied?",
      answer:
        'If denied, you have the right to appeal the decision. You will receive information about the appeals process with your denial notice.',
    },
    {
      question: 'Can I receive help while working?',
      answer:
        'Yes, many programs are designed to supplement income for working individuals and families. Having employment does not automatically disqualify you.',
    },
    {
      question: 'How are amounts calculated?',
      answer:
        'Benefit amounts are calculated based on household size, income, expenses, and specific program guidelines. Our Calculator tool can help estimate potential benefits.',
    },
    {
      question: 'Where can I get help applying?',
      answer:
        'Many community organizations and social service agencies offer free application assistance. Contact your local social services office for information.',
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
          Frequently Asked
        </h1>
        <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
          Common questions and answers
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
            Need More Help?
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.5 }}>
            Contact your local social services office or use our tools to learn more about available
            programs.
          </p>
        </div>
      </div>
    </div>
  );
}
