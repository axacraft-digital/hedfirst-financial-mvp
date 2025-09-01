import { useState, useMemo } from 'react'

interface FinancialInputs {
  startingPrescriptionOrders: number
  monthlyNewPrescriptionOrders: number
  monthlyGrowthRate: number
  annualMembershipPrice: number
  primaryCareConversionRate: number
  prescriptionCycle: number
  cac: number
  churnRate: number
  prescriptionAOV: number
}

export const useFinancialModel = () => {
  const [inputs, setInputs] = useState<FinancialInputs>({
    startingPrescriptionOrders: 400,
    monthlyNewPrescriptionOrders: 20,
    monthlyGrowthRate: 5,
    annualMembershipPrice: 699,
    primaryCareConversionRate: 25,
    prescriptionCycle: 90,
    cac: 250,
    churnRate: 3,
    prescriptionAOV: 75
  })

  const { monthlyRevenue, monthlyGrossRevenue, monthlyMemberCounts, monthlyPrescriptionOrders } = useMemo(() => {
    // Start with prescription orders as primary driver
    let currentPrescriptionOrders = inputs.startingPrescriptionOrders
    let currentNewPrescriptionOrders = inputs.monthlyNewPrescriptionOrders
    
    const monthlyGrowthMultiplier = 1 + (inputs.monthlyGrowthRate / 100)
    const renewalFrequency = 30 / inputs.prescriptionCycle // How many renewals per month (30 days / cycle days)
    const primaryCareConversionRate = inputs.primaryCareConversionRate / 100
    const monthlyChurnRate = inputs.churnRate / 100
    
    const revenue = []
    const grossRevenue = []
    const memberCounts = []
    const prescriptionOrders = []
    
    // Track cumulative members (those who have converted and stayed)
    let cumulativeMembers = Math.round(inputs.startingPrescriptionOrders * primaryCareConversionRate)
    
    for (let month = 0; month < 60; month++) {
      // Track prescription orders at the beginning of each month
      prescriptionOrders.push(currentPrescriptionOrders)
      
      // Calculate members from prescription orders (primary care conversion)
      const newMembersFromConversion = Math.round(currentNewPrescriptionOrders * primaryCareConversionRate)
      
      // Track member count - cumulative members who have converted
      memberCounts.push(cumulativeMembers)
      
      // Calculate prescription revenue from total prescription orders
      const prescriptionRevenue = currentPrescriptionOrders * renewalFrequency * inputs.prescriptionAOV
      
      // Calculate subscription revenue - ONLY from new members joining this month
      const subscriptionRevenue = newMembersFromConversion * inputs.annualMembershipPrice
      
      // Gross revenue (before CAC deduction)
      const monthlyGrossRevenue = subscriptionRevenue + prescriptionRevenue
      grossRevenue.push(Math.round(monthlyGrossRevenue))
      
      // Calculate CAC costs for new prescription customer acquisition
      const cacCosts = currentNewPrescriptionOrders * inputs.cac
      
      // Net revenue after acquisition costs
      const netRevenue = subscriptionRevenue + prescriptionRevenue - cacCosts
      revenue.push(Math.round(netRevenue))
      
      // Update prescription orders for next month
      currentPrescriptionOrders += currentNewPrescriptionOrders
      
      // Apply churn to existing members
      const churnedMembers = Math.round(cumulativeMembers * monthlyChurnRate)
      cumulativeMembers = cumulativeMembers - churnedMembers + newMembersFromConversion
      
      // Apply growth rate to new prescription orders for next month
      currentNewPrescriptionOrders = currentNewPrescriptionOrders * monthlyGrowthMultiplier
    }
    
    return { 
      monthlyRevenue: revenue, 
      monthlyGrossRevenue: grossRevenue, 
      monthlyMemberCounts: memberCounts,
      monthlyPrescriptionOrders: prescriptionOrders
    }
  }, [inputs.startingPrescriptionOrders, inputs.monthlyNewPrescriptionOrders, inputs.monthlyGrowthRate, inputs.annualMembershipPrice, inputs.primaryCareConversionRate, inputs.prescriptionCycle, inputs.cac, inputs.churnRate, inputs.prescriptionAOV])

  const updateInputs = (newInputs: Partial<FinancialInputs>) => {
    setInputs(prev => ({ ...prev, ...newInputs }))
  }

  return {
    inputs,
    updateInputs,
    monthlyRevenue,
    monthlyGrossRevenue,
    monthlyMemberCounts,
    monthlyPrescriptionOrders
  }
}