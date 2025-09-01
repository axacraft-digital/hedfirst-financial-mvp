# Hedfirst VC Financial Model - Product Requirements Document

## Project Overview

**Product:** Desktop-only financial modeling dashboard for VC presentations  
**Company:** Hedfirst (telehealth startup)  
**Audience:** Venture capital firms evaluating investment opportunity  
**Timeline:** MVP in 2-3 hours, not days  

## Business Context

**Hedfirst Revenue Model:**
- **Primary Care Subscriptions:** $699/year annual memberships
- **Prescription Marketplace:** Variable AOV, transaction-based revenue

**VC Presentation Goal:**
- Demonstrate unit economics and growth potential
- Show realistic financial projections with scenario modeling
- Provide credible industry-benchmarked assumptions

## MVP Requirements (Phase 1)

### Core Functionality
**Must Have - Release Blocker:**

1. **Assumption Inputs (8 core variables)**
   - Starting Members: 500-2,000 range
   - Monthly New Members: 10-100 range
   - Annual Membership Price: $699 default (customizable)
   - Prescription Utilization: 20%-70% range
   - Prescription Cycle: 30-180 days (renewal frequency)
   - Customer Acquisition Cost (CAC): $150-$400 range
   - Monthly churn rate: 1%-8% range  
   - Prescription average order value: $20-$150 range

2. **Basic Calculations**
   - Monthly new membership revenue (new members × $699 annual price - only new joiners pay each month)
   - Prescription revenue (members × utilization rate × AOV × frequency)
   - Simple member growth model (new acquisitions - churn)

3. **Revenue Breakdown Display**
   - Real-time calculation visibility showing:
     - Subscription Revenue: newMembers × annualPrice = $XX,XXX
     - Prescription Revenue: members × utilization × renewals × AOV = $XX,XXX  
     - Total Revenue: subscription + prescription = $XX,XXX
   - All calculations update instantly as inputs change

4. **12-Month Revenue Projections**
   - Monthly revenue calculations displayed in grid format
   - Accounts for member growth, churn, and dual revenue streams
   - Professional presentation format for VC meetings

### Technical Requirements
- **Desktop-only:** Fixed layout, no responsive design
- **React + TypeScript:** Type safety for calculations
- **Single-page application:** No routing complexity
- **Local state only:** No persistence required
- **Recharts:** For single chart visualization

### Success Criteria
- **8 inputs → Real-time calculation updates**
- **Revenue breakdown transparency in under 1 second**
- **Professional desktop layout optimized for VC meetings**
- **Zero crashes or calculation errors**

## Phase 2 Features (Post-MVP)
**Nice to Have - Future Iterations:**

- Additional assumption inputs (marketing spend, pricing tiers)
- Sensitivity analysis (which variables matter most)
- Export capabilities (PNG charts, CSV data)
- Industry benchmark comparisons
- Advanced scenarios (market penetration, seasonal factors)

## Technical Architecture (Simplified)

### File Structure
```
src/
├── components/     # UI components (future: charts, scenario tables)
├── hooks/
│   └── useFinancialModel.ts    # 8-input calculation engine
├── types/          # TypeScript interfaces
├── utils/          # Utility functions
└── App.tsx         # Main dashboard with 2-column layout
```

### State Management
- **Single React hook** managing all state
- **No external state libraries** (Zustand was overkill)
- **Direct prop passing** between components
- **Calculations in custom hook** - no separate engine files

### Data Flow
```
User Input → Hook Calculation → Component Re-render → Revenue Breakdown + Projections Update
```

## Constraints & Assumptions

### Technical Constraints
- **Desktop browsers only:** Chrome, Safari, Firefox
- **No mobile support:** VCs use laptops/monitors
- **No authentication:** Public demo tool
- **No data persistence:** Session-based only

### Business Assumptions
- **Starting members:** Dynamic input (500-2,000 range for different launch scenarios)
- **Member growth:** Dynamic input (10-100 new members per month range)
- **Annual membership fee:** Dynamic input ($699 default, paid once per year at signup)
- **Prescription utilization:** Dynamic input (20%-70% range of members using pharmacy)
- **Prescription renewal cycle:** Dynamic input (30-180 days, affects revenue frequency)
- **Customer acquisition:** Dynamic CAC input for growth modeling
- **Member retention:** Dynamic churn rate for realistic projections

### Industry Benchmarks (Built-in)
- **Telehealth CAC:** $200-$350 typical range
- **Annual churn:** 15-30% for subscription telehealth
- **Prescription margins:** 15-25% typical

## User Stories

### Primary User: VC Partner/Associate

**Story 1: Quick Model Validation**
> "As a VC evaluating Hedfirst, I want to adjust key assumptions and immediately see how they impact revenue projections, so I can understand the unit economics sensitivity."

**Story 2: Scenario Comparison**
> "As a VC, I want to see conservative vs aggressive growth scenarios side-by-side, so I can evaluate the risk/return profile of this investment."

**Story 3: Presentation Ready**
> "As a VC presenting to partners, I want clean, professional charts that I can screenshot for our investment memo."

## Success Metrics

### MVP Success
- [ ] **Functional:** All inputs work, chart updates in real-time
- [ ] **Professional:** Clean design suitable for VC presentations  
- [ ] **Fast:** Complete interaction cycle under 1 second
- [ ] **Stable:** Zero crashes during 30-minute demo session

### Business Success
- [ ] **VC Engagement:** Tool enhances rather than distracts from pitch
- [ ] **Credibility:** Assumptions appear realistic and well-researched
- [ ] **Decision Support:** Clear impact of key variables on outcomes

## Out of Scope (Explicitly)

### Technical
- ❌ Mobile responsive design
- ❌ User authentication or accounts  
- ❌ Data persistence or saving models
- ❌ Real-time collaboration features
- ❌ Advanced statistical modeling (Monte Carlo, etc.)

### Business
- ❌ Detailed operational planning
- ❌ Competitive analysis integration
- ❌ Market sizing calculations
- ❌ Team/hiring projections
- ❌ Detailed expense modeling beyond basic burn rate

## Implementation Plan

### Phase 1: MVP ✅ (Completed)
1. **8-input financial model** with real-time calculations
2. **Revenue breakdown transparency** showing all calculation components
3. **Professional desktop layout** optimized for VC presentations
4. **12-month revenue projections** with dual revenue streams

### Phase 2: Enhanced Visualizations (Future)
- Interactive charts with Recharts integration
- Scenario comparison tables (Conservative/Moderate/Aggressive)
- Revenue breakdown charts showing subscription vs prescription split
- Export capabilities for VC presentations

## Risk Mitigation

### Technical Risks
- **Over-engineering:** Stick strictly to MVP scope
- **Calculation errors:** Test with simple, verifiable numbers
- **Performance:** Debounce inputs, optimize chart re-renders

### Business Risks  
- **Unrealistic assumptions:** Use conservative industry benchmarks
- **Too complex for presentation:** Keep interface simple and clean
- **Distracts from core pitch:** Tool should enhance, not replace, founder narrative

---

## Approval Criteria

**MVP Ready for VC Demo When:**
- ✅ 8 inputs update revenue calculations in real-time
- ✅ Revenue breakdown shows transparent calculations
- ✅ Professional desktop layout (max-width: 1280px)
- ✅ Dual revenue streams clearly demonstrated
- ✅ No errors or crashes during live demo
- ✅ All business model assumptions are adjustable and visible