# useFinancialModel.ts Detailed Explanation

## Overview
This is the **core calculation engine** for Hedfirst's VC financial modeling dashboard. It transforms 8 business inputs into 12-month revenue projections using Hedfirst's dual revenue model (annual subscriptions + prescription marketplace).

## Architecture & Performance

### TypeScript Interface
```typescript
interface FinancialInputs {
  startingMembers: number        // Initial customer base
  monthlyNewMembers: number      // Growth rate
  annualMembershipPrice: number  // Primary care subscription fee
  prescriptionUtilization: number // % of members using pharmacy
  prescriptionCycle: number      // Days between prescription renewals
  cac: number                   // Customer acquisition cost
  churnRate: number             // Monthly attrition rate (%)
  prescriptionAOV: number       // Average order value per prescription
}
```

### State Management
- **`useState`** manages 8 input parameters with realistic defaults
- **`useMemo`** optimizes performance - only recalculates when inputs change
- **Dependency array** ensures all 8 variables trigger recalculation

### Default Values (Industry-Benchmarked)
```typescript
startingMembers: 1000,          // Reasonable telehealth launch size
monthlyNewMembers: 50,          // Moderate growth assumption
annualMembershipPrice: 699,     // Primary care subscription
prescriptionUtilization: 40,    // 40% pharmacy adoption
prescriptionCycle: 90,          // Quarterly renewals
cac: 250,                      // Telehealth acquisition cost
churnRate: 3,                  // 3% monthly churn
prescriptionAOV: 75            // Average prescription value
```

## Financial Model Logic

### Dual Revenue Stream Calculation

**1. Annual Subscription Revenue (Monthly Recognition)**
```typescript
const subscriptionRevenue = newMembersPerMonth × inputs.annualMembershipPrice
```
- **Critical Business Rule:** Only NEW members pay each month
- **Why:** Annual subscriptions are paid once at signup, not recurring monthly
- **Example:** 50 new members × $699 = $34,950/month

**2. Prescription Marketplace Revenue**
```typescript
const prescriptionRevenue = currentMembers × utilizationRate × renewalFrequency × AOV
```
- **Utilization Rate:** `inputs.prescriptionUtilization / 100` (40% = 0.4)
- **Renewal Frequency:** `30 / inputs.prescriptionCycle` (renewals per month)
- **Example:** 1,000 members × 40% × 0.33 renewals × $75 = $10,000/month

### Member Growth Simulation
```typescript
// Each month:
churnedMembers = currentMembers × (churnRate / 100)
currentMembers = currentMembers - churnedMembers + newMembersPerMonth
```

**Month-by-Month Process:**
1. Calculate revenue from current member base
2. Apply churn to reduce member count
3. Add new members for next month
4. Repeat for 12 months

## Key Business Insights

### Prescription Cycle Impact
- **30-day cycles:** `30/30 = 1.0` renewals/month (chronic medications)
- **90-day cycles:** `30/90 = 0.33` renewals/month (standard)
- **180-day cycles:** `30/180 = 0.17` renewals/month (long-term treatments)

### Revenue Mix Dynamics
- **Subscription revenue:** Depends on growth rate (new member acquisition)
- **Prescription revenue:** Depends on total member base (scales with retention)
- **Growth vs. Retention trade-off:** High churn reduces prescription revenue base

### Sensitivity Factors
- **CAC:** Affects growth sustainability (not directly in calculation but informs modeling)
- **Churn Rate:** Directly reduces member base each month
- **Utilization:** Linear multiplier on prescription revenue
- **AOV:** Linear multiplier on prescription revenue

## Return Interface
```typescript
return {
  inputs,           // Current input values (for display)
  updateInputs,     // Function to modify inputs (triggers recalculation)
  monthlyRevenue    // Array of 12 revenue projections
}
```

## Real-World Usage Patterns

### VC Presentation Flow
1. **VCs adjust inputs** via UI controls
2. **Hook recalculates** via useMemo optimization
3. **UI updates** showing new projections instantly
4. **Revenue breakdown** displays transparent calculations
5. **12-month grid** shows month-by-month projections

### Business Model Validation
- **Unit Economics:** Clear separation of acquisition vs. retention revenue
- **Growth Scenarios:** Model conservative (10 new/month) vs. aggressive (100 new/month)
- **Market Assumptions:** Test different utilization rates (20%-70%)
- **Operational Impact:** See effect of prescription cycle optimization

## Mathematical Foundation

### Total Monthly Revenue Formula
```typescript
totalRevenue = (newMembers × annualPrice) + 
               (totalMembers × utilization × (30/cycle) × AOV)
```

### Member Base Evolution
```typescript
Month[n] = Month[n-1] - (Month[n-1] × churn) + newMembers
```

This hook transforms complex business assumptions into transparent, real-time financial projections that VCs can trust for investment decisions. The mathematical model accurately reflects Hedfirst's unique dual-revenue telehealth business model.