# Hedfirst Financial Modeling Dashboard

A desktop-only financial modeling dashboard designed for venture capital presentations, showcasing Hedfirst's telehealth startup unit economics and revenue projections.

## Overview

This application provides VCs with an interactive financial model to evaluate Hedfirst's investment opportunity. The dashboard allows real-time adjustment of key business assumptions to model different growth scenarios and understand the company's dual revenue streams.

**Built for:** VC partner meetings and investment evaluation  
**Timeline:** 3-hour MVP focused on core functionality  
**Scope:** Desktop presentations only (no mobile optimization)

## Business Model

Hedfirst operates a telehealth platform with two primary revenue streams:

### 1. Annual Primary Care Subscriptions
- **$699/year** membership fee paid once at signup
- Provides unlimited access to primary care physicians
- Revenue recognized when new members join (not recurring monthly)

### 2. Prescription Marketplace
- Variable transaction-based revenue from pharmacy services
- **40% utilization rate** - percentage of members who use the pharmacy
- **2x monthly frequency** - average prescription orders per active user
- Revenue scales with total member base and prescription AOV

## Key Features

### Interactive Input Variables (7 Core Metrics)
1. **Starting Members** (500-2,000 range) - Initial member base at launch
2. **Monthly New Members** (10-100 range) - Growth rate for modeling scenarios
3. **Annual Membership Price** ($699 default) - Subscription revenue per new member
4. **Prescription Utilization** (20%-70% range) - Pharmacy adoption rate
5. **Customer Acquisition Cost (CAC)** ($150-$400 range) - Cost to acquire each member
6. **Monthly Churn Rate** (1%-8% range) - Member retention modeling
7. **Prescription AOV** ($20-$150 range) - Average order value per transaction

### Real-Time Financial Projections
- **12-month revenue calculations** updating instantly as inputs change
- **Dual revenue streams** clearly separated (membership + prescription)
- **Professional presentation format** suitable for VC meetings
- **Scenario modeling** from conservative to aggressive growth assumptions

### Business Intelligence
- **Unit economics visibility** - understand key drivers of profitability
- **Growth sensitivity analysis** - see impact of acquisition and retention changes
- **Revenue mix insights** - balance between subscription and marketplace income
- **Industry-benchmarked assumptions** built into default values

## Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Charts and data visualization (ready for Phase 2)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # UI components (future: charts, scenario tables)
├── hooks/          # useFinancialModel - core calculation engine
├── types/          # TypeScript interfaces
├── utils/          # Utility functions
└── App.tsx         # Main dashboard interface
```

## Financial Model Logic

### Revenue Calculation
```typescript
// Monthly subscription revenue (only from new members)
subscriptionRevenue = newMembersThisMonth × annualMembershipPrice

// Monthly prescription revenue (from all current members)
prescriptionRevenue = totalMembers × utilizationRate × frequency × AOV

// Total monthly revenue
totalRevenue = subscriptionRevenue + prescriptionRevenue
```

### Member Growth Model
```typescript
// Each month:
churnedMembers = currentMembers × monthlyChurnRate
currentMembers = currentMembers - churnedMembers + newMembersPerMonth
```

## Use Cases

### For VCs
- **Investment evaluation** - Model Hedfirst's growth potential under different scenarios
- **Due diligence** - Understand unit economics and key business drivers
- **Portfolio management** - Compare assumptions against industry benchmarks
- **Partnership presentations** - Professional tool for investment committee meetings

### For Founders
- **Fundraising preparation** - Demonstrate business model understanding
- **Strategic planning** - Test impact of different growth strategies
- **Investor communication** - Provide transparent, interactive financial projections

## Development Roadmap

### Phase 1: MVP ✅
- [x] 7 core input variables with real-time updates
- [x] Dual revenue stream calculations
- [x] 12-month projection display
- [x] Professional desktop interface

### Phase 2: Enhanced Visualizations
- [ ] Interactive charts with Recharts
- [ ] Scenario comparison tables
- [ ] Revenue breakdown visualizations
- [ ] Export capabilities for presentations

### Phase 3: Advanced Analytics
- [ ] Sensitivity analysis
- [ ] Industry benchmark comparisons
- [ ] Unit economics deep-dive
- [ ] Custom scenario saving

## Business Assumptions

**Industry Benchmarks:**
- Telehealth CAC: $200-$350 typical range
- Annual churn: 15-30% for subscription telehealth
- Prescription utilization: 30-50% adoption rates
- Transaction frequency: 1.5-2.5x per month

**Model Constraints:**
- 12-month projection timeframe
- Monthly calculation cycles
- Annual subscription payment model
- No complex seasonal adjustments

## Technical Notes

- **State management:** Single custom hook (useFinancialModel)
- **Real-time updates:** useMemo optimization for calculations
- **Type safety:** Full TypeScript coverage
- **Performance:** Minimal dependencies, optimized for presentation use
- **Browser support:** Chrome, Safari, Firefox (desktop only)

---

*Built for Hedfirst's Series A fundraising efforts. Designed to demonstrate clear unit economics and sustainable growth potential to venture capital partners.*