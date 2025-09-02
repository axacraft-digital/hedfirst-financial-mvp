import { useState, useMemo } from 'react'

interface FinancialInputs {
  // Prescription Model
  startingPrescriptionOrders: number
  prescriptionInitialGrowth: number
  prescriptionMaturityGrowth: number
  prescriptionDecayFactor: number
  prescriptionAOV: number
  prescriptionCycle: number
  prescriptionChurnRate: number
  prescriptionCAC: number
  
  // Care Model
  startingCareMembers: number
  careInitialGrowth: number
  careMaturityGrowth: number
  careDecayFactor: number
  annualMembershipPrice: number
  membershipChurnRate: number
  careCAC: number
}

export const useFinancialModel = () => {
  const [inputs, setInputs] = useState<FinancialInputs>({
    // Prescription Model
    startingPrescriptionOrders: 50,
    prescriptionInitialGrowth: 80,
    prescriptionMaturityGrowth: 10,
    prescriptionDecayFactor: 0.95,
    prescriptionAOV: 75,
    prescriptionCycle: 90,
    prescriptionChurnRate: 10,
    prescriptionCAC: 200,
    
    // Care Model
    startingCareMembers: 50,
    careInitialGrowth: 80,
    careMaturityGrowth: 10,
    careDecayFactor: 0.95,
    annualMembershipPrice: 699,
    membershipChurnRate: 10,
    careCAC: 200
  })


  const updateInputs = (newInputs: Partial<FinancialInputs>) => {
    setInputs(prev => ({ ...prev, ...newInputs }))
  }

  // Calculate current month's metrics for both independent models (using initial growth rates for month 1)
  const currentMonthMetrics = {
    // Prescription Model - Detailed breakdown
    startingPrescriptionOrders: inputs.startingPrescriptionOrders,
    prescriptionGrowthRate: inputs.prescriptionInitialGrowth,
    newPrescriptionOrders: Math.round(inputs.startingPrescriptionOrders * (inputs.prescriptionInitialGrowth / 100)),
    retainedPrescriptionOrders: inputs.startingPrescriptionOrders,
    totalPrescriptionOrders: inputs.startingPrescriptionOrders + Math.round(inputs.startingPrescriptionOrders * (inputs.prescriptionInitialGrowth / 100)),
    totalPrescriptionCAC: Math.round(inputs.startingPrescriptionOrders * (inputs.prescriptionInitialGrowth / 100)) * inputs.prescriptionCAC,
    
    // Care Model - Detailed breakdown
    startingCareMembers: inputs.startingCareMembers,
    careGrowthRate: inputs.careInitialGrowth,
    newCareMembers: Math.round(inputs.startingCareMembers * (inputs.careInitialGrowth / 100)),
    retainedCareMembers: inputs.startingCareMembers,
    totalCareMembers: inputs.startingCareMembers + Math.round(inputs.startingCareMembers * (inputs.careInitialGrowth / 100)),
    totalCareCAC: Math.round(inputs.startingCareMembers * (inputs.careInitialGrowth / 100)) * inputs.careCAC
  }


  // Calculate 5-year projections with logarithmic decay growth (60 months)
  const fiveYearProjections = useMemo(() => {
    const projections = []
    
    // Initialize starting values
    let prescriptionCustomers = inputs.startingPrescriptionOrders
    let careMembers = inputs.startingCareMembers
    
    // Calculate static multipliers
    const prescriptionChurnMultiplier = 1 - (inputs.prescriptionChurnRate / 100)
    const careChurnMultiplier = 1 - (inputs.membershipChurnRate / 100)
    const renewalFrequency = 30 / inputs.prescriptionCycle
    
    // Debug logging for initial setup
    console.log('=== 5-Year Decay Growth Projections Debug ===')
    console.log('Initial Setup:')
    console.log(`Starting Prescription Customers: ${prescriptionCustomers}`)
    console.log(`Starting Care Members: ${careMembers}`)
    console.log('Prescription Decay Model:')
    console.log(`  Initial Growth Rate: ${inputs.prescriptionInitialGrowth}%`)
    console.log(`  Maturity Growth Rate: ${inputs.prescriptionMaturityGrowth}%`)
    console.log(`  Decay Factor: ${inputs.prescriptionDecayFactor}`)
    console.log('Care Decay Model:')
    console.log(`  Initial Growth Rate: ${inputs.careInitialGrowth}%`)
    console.log(`  Maturity Growth Rate: ${inputs.careMaturityGrowth}%`)
    console.log(`  Decay Factor: ${inputs.careDecayFactor}`)
    console.log(`Prescription Churn Rate: ${inputs.prescriptionChurnRate}% (multiplier: ${prescriptionChurnMultiplier})`)
    console.log(`Care Churn Rate: ${inputs.membershipChurnRate}% (multiplier: ${careChurnMultiplier})`)
    console.log(`Prescription Cycle: ${inputs.prescriptionCycle} days (renewal frequency: ${renewalFrequency.toFixed(3)} renewals/month)`)
    console.log(`Prescription AOV: $${inputs.prescriptionAOV}`)
    console.log(`Annual Membership Price: $${inputs.annualMembershipPrice} (monthly: $${(inputs.annualMembershipPrice / 12).toFixed(2)})`)
    console.log('')
    
    let cumulativePrescriptionRevenue = 0
    let cumulativeCareRevenue = 0
    let cumulativeNetRevenue = 0
    
    for (let month = 1; month <= 60; month++) {
      // Store previous values for logging
      const prevPrescriptionCustomers = prescriptionCustomers
      const prevCareMembers = careMembers
      
      // Calculate decay-based growth rates for this month
      // Formula: current_rate = maturity_rate + (initial_rate - maturity_rate) * (decay_factor ^ month_number)
      const prescriptionGrowthRate = inputs.prescriptionMaturityGrowth + 
        (inputs.prescriptionInitialGrowth - inputs.prescriptionMaturityGrowth) * 
        Math.pow(inputs.prescriptionDecayFactor, month)
      
      const careGrowthRate = inputs.careMaturityGrowth + 
        (inputs.careInitialGrowth - inputs.careMaturityGrowth) * 
        Math.pow(inputs.careDecayFactor, month)
      
      // Calculate net growth multipliers for this month
      const prescriptionGrowthMultiplier = 1 + (prescriptionGrowthRate / 100)
      const careGrowthMultiplier = 1 + (careGrowthRate / 100)
      const prescriptionNetGrowthMultiplier = prescriptionGrowthMultiplier * prescriptionChurnMultiplier
      const careNetGrowthMultiplier = careGrowthMultiplier * careChurnMultiplier
      
      // Apply growth and churn (net effect)
      const newPrescriptionCustomers = Math.round(prescriptionCustomers * prescriptionNetGrowthMultiplier) - prescriptionCustomers
      const newCareMembers = Math.round(careMembers * careNetGrowthMultiplier) - careMembers
      
      prescriptionCustomers = Math.round(prescriptionCustomers * prescriptionNetGrowthMultiplier)
      careMembers = Math.round(careMembers * careNetGrowthMultiplier)
      
      // Calculate monthly CAC costs
      const monthlyPrescriptionCAC = newPrescriptionCustomers * inputs.prescriptionCAC
      const monthlyCareCAC = newCareMembers * inputs.careCAC
      
      // Calculate monthly revenue
      const prescriptionRevenue = Math.round(prescriptionCustomers * renewalFrequency * inputs.prescriptionAOV)
      const careRevenue = Math.round(careMembers * (inputs.annualMembershipPrice / 12))
      const totalRevenue = prescriptionRevenue + careRevenue
      const netRevenue = totalRevenue - monthlyPrescriptionCAC - monthlyCareCAC
      
      // Track cumulative totals
      cumulativePrescriptionRevenue += prescriptionRevenue
      cumulativeCareRevenue += careRevenue
      cumulativeNetRevenue += netRevenue
      
      // Debug logging for first few months and key milestones
      if (month <= 3 || [6, 12, 24, 36, 48, 60].includes(month)) {
        console.log(`Month ${month}:`)
        console.log(`  Prescription Growth Rate: ${prescriptionGrowthRate.toFixed(2)}% (net: ${((prescriptionNetGrowthMultiplier - 1) * 100).toFixed(2)}%)`)
        console.log(`  Care Growth Rate: ${careGrowthRate.toFixed(2)}% (net: ${((careNetGrowthMultiplier - 1) * 100).toFixed(2)}%)`)
        console.log(`  Prescription: ${prevPrescriptionCustomers} → ${prescriptionCustomers} customers (+${newPrescriptionCustomers})`)
        console.log(`  Care: ${prevCareMembers} → ${careMembers} members (+${newCareMembers})`)
        console.log(`  Prescription Revenue: ${prescriptionCustomers} customers × ${renewalFrequency.toFixed(3)} renewals × $${inputs.prescriptionAOV} = $${prescriptionRevenue.toLocaleString()}`)
        console.log(`  Care Revenue: ${careMembers} members × $${(inputs.annualMembershipPrice / 12).toFixed(2)} = $${careRevenue.toLocaleString()}`)
        console.log(`  Prescription CAC: ${newPrescriptionCustomers} new customers × $${inputs.prescriptionCAC} = $${monthlyPrescriptionCAC.toLocaleString()}`)
        console.log(`  Care CAC: ${newCareMembers} new members × $${inputs.careCAC} = $${monthlyCareCAC.toLocaleString()}`)
        console.log(`  Total Revenue: $${totalRevenue.toLocaleString()}`)
        console.log(`  Net Revenue: $${totalRevenue.toLocaleString()} - $${monthlyPrescriptionCAC.toLocaleString()} - $${monthlyCareCAC.toLocaleString()} = $${netRevenue.toLocaleString()}`)
        console.log('')
      }
      
      projections.push({
        month,
        prescriptionRevenue,
        careRevenue,
        totalRevenue,
        netRevenue,
        prescriptionCustomers,
        careMembers
      })
    }
    
    console.log('5-Year Totals:')
    console.log(`Total Prescription Revenue: $${cumulativePrescriptionRevenue.toLocaleString()}`)
    console.log(`Total Care Revenue: $${cumulativeCareRevenue.toLocaleString()}`)
    console.log(`Total Combined Revenue: $${(cumulativePrescriptionRevenue + cumulativeCareRevenue).toLocaleString()}`)
    console.log(`Total Net Revenue: $${cumulativeNetRevenue.toLocaleString()}`)
    console.log('=== End Debug ===')
    
    return {
      monthlyProjections: projections,
      totals: {
        prescriptionRevenue: cumulativePrescriptionRevenue,
        careRevenue: cumulativeCareRevenue,
        totalRevenue: cumulativePrescriptionRevenue + cumulativeCareRevenue,
        netRevenue: cumulativeNetRevenue
      }
    }
  }, [inputs])

  // Calculate Month 6 debug data after projections are available
  const month6Debug = useMemo(() => {
    if (!fiveYearProjections.monthlyProjections[5]) {
      return null
    }

    // Calculate Month 6 growth rates using decay formula
    const prescriptionMonth6Rate = inputs.prescriptionMaturityGrowth + 
      (inputs.prescriptionInitialGrowth - inputs.prescriptionMaturityGrowth) * 
      Math.pow(inputs.prescriptionDecayFactor, 6)
      
    const careMonth6Rate = inputs.careMaturityGrowth + 
      (inputs.careInitialGrowth - inputs.careMaturityGrowth) * 
      Math.pow(inputs.careDecayFactor, 6)

    return {
      prescriptionGrowthRate: prescriptionMonth6Rate,
      careGrowthRate: careMonth6Rate,
      month6Data: fiveYearProjections.monthlyProjections[5] // Month 6 (0-indexed)
    }
  }, [fiveYearProjections, inputs])

  return {
    inputs,
    updateInputs,
    currentMonthMetrics,
    fiveYearProjections,
    month6Debug
  }
}