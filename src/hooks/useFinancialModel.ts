import { useState } from 'react'

interface FinancialInputs {
  // Prescription Model
  startingPrescriptionOrders: number
  prescriptionGrowthRate: number
  prescriptionAOV: number
  prescriptionCycle: number
  prescriptionChurnRate: number
  
  // Care Model
  startingCareMembers: number
  careGrowthRate: number
  annualMembershipPrice: number
  membershipChurnRate: number
}

export const useFinancialModel = () => {
  const [inputs, setInputs] = useState<FinancialInputs>({
    // Prescription Model
    startingPrescriptionOrders: 50,
    prescriptionGrowthRate: 5,
    prescriptionAOV: 75,
    prescriptionCycle: 90,
    prescriptionChurnRate: 2,
    
    // Care Model
    startingCareMembers: 50,
    careGrowthRate: 8,
    annualMembershipPrice: 699,
    membershipChurnRate: 1
  })


  const updateInputs = (newInputs: Partial<FinancialInputs>) => {
    setInputs(prev => ({ ...prev, ...newInputs }))
  }

  // Calculate current month's metrics for both independent models
  const currentMonthMetrics = {
    // Prescription Model
    newPrescriptionOrders: Math.round(inputs.startingPrescriptionOrders * (inputs.prescriptionGrowthRate / 100)),
    totalPrescriptionOrders: inputs.startingPrescriptionOrders + Math.round(inputs.startingPrescriptionOrders * (inputs.prescriptionGrowthRate / 100)),
    
    // Care Model
    newCareMembers: Math.round(inputs.startingCareMembers * (inputs.careGrowthRate / 100)),
    totalCareMembers: inputs.startingCareMembers + Math.round(inputs.startingCareMembers * (inputs.careGrowthRate / 100))
  }

  return {
    inputs,
    updateInputs,
    currentMonthMetrics
  }
}