Create a Claude.md file in the project root that serves as the comprehensive project documentation for the Hedfirst VC Financial Model. Include:

PROJECT OVERVIEW:
- Hedfirst telehealth startup financial modeling dashboard for VC presentations
- Dual revenue model: $699 annual memberships + prescription marketplace
- 9 interactive inputs with real-time calculations and 5-year projections

TECHNICAL ARCHITECTURE:
- React + TypeScript + Vite + Tailwind CSS + Recharts
- Single useFinancialModel hook with clean state management
- Desktop-only design optimized for VC presentation screens
- Deployed live at: https://hedfirst-financial-mvp.vercel.app

KEY FEATURES:
- Interactive inputs: starting members, growth rate, CAC, churn, prescription variables
- Revenue transparency: clear breakdown of subscription + prescription revenue
- 60-month growth trajectory chart with compound growth modeling
- Net revenue calculations including CAC deduction

DEVELOPMENT PHILOSOPHY:
- Small incremental steps approach that prevented over-engineering
- Simplicity over complexity - avoided recursive dependencies
- Test each feature immediately before adding complexity
- Clean, maintainable codebase under 500 lines

CURRENT STATUS & NEXT STEPS:
- Fully functional MVP ready for VC presentations
- Recently removed redundant Revenue Breakdown card
- Consider adding: scenario presets, sensitivity analysis, export features

This file will help maintain context across Claude Code sessions and document our successful development approach.