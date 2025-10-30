import { useState } from 'react';

interface CalculatorScreenProps {
  colors: any;
}

export default function CalculatorScreen({ colors }: CalculatorScreenProps) {
  const [householdSize, setHouseholdSize] = useState('1');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [rentCost, setRentCost] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const calculateBenefits = () => {
    const income = parseFloat(monthlyIncome) || 0;
    const rent = parseFloat(rentCost) || 0;
    const size = parseInt(householdSize);

    const foodAssistance = Math.max(0, Math.min(800, size * 200 - income * 0.3));
    const housingAssistance = Math.max(0, Math.min(1200, rent * 0.5 - income * 0.2));
    const childCare = hasChildren ? Math.max(0, Math.min(600, 600 - income * 0.15)) : 0;
    const healthcare = income < 3000 ? 250 : income < 5000 ? 150 : 0;

    return {
      food: Math.round(foodAssistance),
      housing: Math.round(housingAssistance),
      childcare: Math.round(childCare),
      healthcare: Math.round(healthcare),
      total: Math.round(foodAssistance + housingAssistance + childCare + healthcare),
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (monthlyIncome && rentCost) {
      setShowResults(true);
    }
  };

  const results = showResults ? calculateBenefits() : null;

  const cardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.surfaceLight,
    color: colors.text,
    fontSize: '16px',
    fontFamily: 'inherit',
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
          Benefits Calculator
        </h1>
        <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
          Estimate your monthly benefits
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleCalculate} style={{ padding: '24px 16px' }}>
        <div style={{ ...cardStyle, overflow: 'hidden', marginBottom: '16px' }}>
          {/* Household Size */}
          <div style={{ padding: '20px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>👨‍👩‍👧‍👦</span>
              <label htmlFor="householdSize" style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                Household Size
              </label>
            </div>
            <select
              id="householdSize"
              value={householdSize}
              onChange={(e) => {
                setHouseholdSize(e.target.value);
                setShowResults(false);
              }}
              style={inputStyle}
            >
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5+ people</option>
            </select>
          </div>

          {/* Monthly Income */}
          <div style={{ padding: '20px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>💵</span>
              <label htmlFor="monthlyIncome" style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                Monthly Income
              </label>
            </div>
            <input
              type="number"
              id="monthlyIncome"
              value={monthlyIncome}
              onChange={(e) => {
                setMonthlyIncome(e.target.value);
                setShowResults(false);
              }}
              placeholder="Enter amount"
              min="0"
              step="100"
              style={inputStyle}
              required
            />
          </div>

          {/* Rent Cost */}
          <div style={{ padding: '20px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>🏠</span>
              <label htmlFor="rentCost" style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                Monthly Rent
              </label>
            </div>
            <input
              type="number"
              id="rentCost"
              value={rentCost}
              onChange={(e) => {
                setRentCost(e.target.value);
                setShowResults(false);
              }}
              placeholder="Enter amount"
              min="0"
              step="50"
              style={inputStyle}
              required
            />
          </div>

          {/* Children */}
          <div style={{ padding: '20px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              minHeight: '44px',
            }}>
              <input
                type="checkbox"
                checked={hasChildren}
                onChange={(e) => {
                  setHasChildren(e.target.checked);
                  setShowResults(false);
                }}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                  accentColor: colors.primary,
                }}
              />
              <span style={{ fontSize: '16px', color: colors.text }}>
                I have children under 18
              </span>
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: colors.green,
            color: '#fff',
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 600,
            minHeight: '44px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Calculate Benefits
        </button>
      </form>

      {/* Results */}
      {showResults && results && (
        <>
          {/* Total Card */}
          <div style={{ padding: '0 16px 24px' }}>
            <div style={{
              background: `linear-gradient(135deg, ${colors.green} 0%, #16a34a 100%)`,
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px', marginTop: '4px' }}>📈</span>
                <div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 4px 0' }}>
                    Estimated Monthly Benefits
                  </p>
                  <p style={{ fontSize: '32px', color: '#fff', margin: 0, fontWeight: 600 }}>
                    ${results.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div style={{ padding: '0 16px 24px' }}>
            <div style={{ ...cardStyle, overflow: 'hidden' }}>
              <div style={{ padding: '20px', borderBottom: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '16px', color: colors.text, margin: 0, fontWeight: 500 }}>Breakdown</h3>
              </div>

              {results.food > 0 && (
                <div style={{
                  padding: '20px',
                  borderBottom: `1px solid ${colors.border}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '14px', color: colors.text }}>Food Assistance</span>
                  <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                    ${results.food.toLocaleString()}
                  </span>
                </div>
              )}

              {results.housing > 0 && (
                <div style={{
                  padding: '20px',
                  borderBottom: `1px solid ${colors.border}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '14px', color: colors.text }}>Housing Assistance</span>
                  <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                    ${results.housing.toLocaleString()}
                  </span>
                </div>
              )}

              {results.childcare > 0 && (
                <div style={{
                  padding: '20px',
                  borderBottom: `1px solid ${colors.border}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '14px', color: colors.text }}>Childcare Support</span>
                  <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                    ${results.childcare.toLocaleString()}
                  </span>
                </div>
              )}

              {results.healthcare > 0 && (
                <div style={{
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '14px', color: colors.text }}>Healthcare Coverage</span>
                  <span style={{ fontSize: '16px', color: colors.text, fontWeight: 500 }}>
                    ${results.healthcare.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ padding: '0 16px 24px' }}>
            <div style={{
              ...cardStyle,
              padding: '20px',
              borderColor: colors.primary,
              backgroundColor: colors.surfaceLight,
            }}>
              <p style={{ fontSize: '14px', color: colors.text, margin: 0, lineHeight: 1.5 }}>
                These are estimated amounts based on general guidelines. Actual benefits may vary.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
