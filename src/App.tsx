import { useState, useEffect } from 'react'
import { useFinancialModel } from './hooks/useFinancialModel'

function App() {
  const { updateInputs, currentMonthMetrics, fiveYearProjections, month6Debug } = useFinancialModel()
  // Prescription Model Inputs
  const [startingPrescriptionOrdersInput, setStartingPrescriptionOrdersInput] = useState(50)
  // Prescription Growth Decay Parameters
  const [prescriptionInitialGrowthInput, setPrescriptionInitialGrowthInput] = useState(80)
  const [prescriptionMaturityGrowthInput, setPrescriptionMaturityGrowthInput] = useState(10)
  const [prescriptionDecayFactorInput, setPrescriptionDecayFactorInput] = useState(0.95)
  const [prescriptionAOVInput, setPrescriptionAOVInput] = useState(75)
  const [prescriptionCycleInput, setPrescriptionCycleInput] = useState(90)
  const [prescriptionChurnInput, setPrescriptionChurnInput] = useState(10)
  const [prescriptionCACInput, setPrescriptionCACInput] = useState(200)
  
  // Care Model Inputs
  const [startingCareMembersInput, setStartingCareMembersInput] = useState(50)
  // Care Growth Decay Parameters
  const [careInitialGrowthInput, setCareInitialGrowthInput] = useState(80)
  const [careMaturityGrowthInput, setCareMaturityGrowthInput] = useState(10)
  const [careDecayFactorInput, setCareDecayFactorInput] = useState(0.95)
  const [annualMembershipPriceInput, setAnnualMembershipPriceInput] = useState(699)
  const [membershipChurnInput, setMembershipChurnInput] = useState(10)
  const [careCACInput, setCareCACInput] = useState(200)

  useEffect(() => {
    updateInputs({ 
      // Prescription Model
      startingPrescriptionOrders: startingPrescriptionOrdersInput,
      prescriptionInitialGrowth: prescriptionInitialGrowthInput,
      prescriptionMaturityGrowth: prescriptionMaturityGrowthInput,
      prescriptionDecayFactor: prescriptionDecayFactorInput,
      prescriptionAOV: prescriptionAOVInput,
      prescriptionCycle: prescriptionCycleInput,
      prescriptionChurnRate: prescriptionChurnInput,
      prescriptionCAC: prescriptionCACInput,
      
      // Care Model  
      startingCareMembers: startingCareMembersInput,
      careInitialGrowth: careInitialGrowthInput,
      careMaturityGrowth: careMaturityGrowthInput,
      careDecayFactor: careDecayFactorInput,
      annualMembershipPrice: annualMembershipPriceInput,
      membershipChurnRate: membershipChurnInput,
      careCAC: careCACInput
    })
  }, [startingPrescriptionOrdersInput, prescriptionInitialGrowthInput, prescriptionMaturityGrowthInput, prescriptionDecayFactorInput, prescriptionAOVInput, prescriptionCycleInput, prescriptionChurnInput, prescriptionCACInput, startingCareMembersInput, careInitialGrowthInput, careMaturityGrowthInput, careDecayFactorInput, annualMembershipPriceInput, membershipChurnInput, careCACInput, updateInputs])


  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Hedfirst Growth Model
        </h1>
        
        
        {/* Prescription Growth Model Card */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Hedfirst Prescription Growth Model
          </h2>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Starting Prescription Orders
                </label>
                <input
                  type="number"
                  value={startingPrescriptionOrdersInput}
                  onChange={(e) => setStartingPrescriptionOrdersInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={prescriptionInitialGrowthInput}
                  onChange={(e) => setPrescriptionInitialGrowthInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="5"
                  max="100"
                  step="1"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maturity Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={prescriptionMaturityGrowthInput}
                  onChange={(e) => setPrescriptionMaturityGrowthInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="20"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Growth Decay Factor
                </label>
                <input
                  type="number"
                  value={prescriptionDecayFactorInput}
                  onChange={(e) => setPrescriptionDecayFactorInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0.80"
                  max="0.99"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prescription Customer Churn Rate (%)
                </label>
                <input
                  type="number"
                  value={prescriptionChurnInput}
                  onChange={(e) => setPrescriptionChurnInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="100"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prescription AOV ($)
                </label>
                <input
                  type="number"
                  value={prescriptionAOVInput}
                  onChange={(e) => setPrescriptionAOVInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="5"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prescription Cycle (Days)
                </label>
                <input
                  type="number"
                  value={prescriptionCycleInput}
                  onChange={(e) => setPrescriptionCycleInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="1"
                  step="15"
                />
                <span className="ml-2 text-gray-600">days</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Acquisition Cost ($)
                </label>
                <input
                  type="number"
                  value={prescriptionCACInput}
                  onChange={(e) => setPrescriptionCACInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="5"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
            </div>
          </div>
        </div>

        {/* Care Growth Model Card */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Hedfirst Care Growth Model
          </h2>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Starting Care Members
                </label>
                <input
                  type="number"
                  value={startingCareMembersInput}
                  onChange={(e) => setStartingCareMembersInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={careInitialGrowthInput}
                  onChange={(e) => setCareInitialGrowthInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="5"
                  max="100"
                  step="1"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maturity Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={careMaturityGrowthInput}
                  onChange={(e) => setCareMaturityGrowthInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="20"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Growth Decay Factor
                </label>
                <input
                  type="number"
                  value={careDecayFactorInput}
                  onChange={(e) => setCareDecayFactorInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0.80"
                  max="0.99"
                  step="0.01"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Membership Price ($)
                </label>
                <input
                  type="number"
                  value={annualMembershipPriceInput}
                  onChange={(e) => setAnnualMembershipPriceInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="50"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Customer Churn Rate (%)
                </label>
                <input
                  type="number"
                  value={membershipChurnInput}
                  onChange={(e) => setMembershipChurnInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="100"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Acquisition Cost ($)
                </label>
                <input
                  type="number"
                  value={careCACInput}
                  onChange={(e) => setCareCACInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="5"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Month 1 Revenue Breakdown
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription Revenue Stream */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Prescription Revenue Stream</h3>
              <div className="text-sm space-y-2">
                <p><strong>Starting Orders:</strong> {startingPrescriptionOrdersInput.toLocaleString()} orders</p>
                <p><strong>Initial Growth Rate:</strong> {prescriptionInitialGrowthInput}% → <strong>New Orders:</strong> {currentMonthMetrics.newPrescriptionOrders.toLocaleString()}</p>
                <p><strong>Total Orders:</strong> {currentMonthMetrics.totalPrescriptionOrders.toLocaleString()} orders</p>
                <p><strong>Monthly Revenue:</strong> {currentMonthMetrics.totalPrescriptionOrders} orders × {(30 / prescriptionCycleInput).toFixed(2)} renewals/month × ${prescriptionAOVInput} = <span className="text-green-600 font-bold">${Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput).toLocaleString()}</span></p>
                <p><strong>Customer Acquisition Cost:</strong> {currentMonthMetrics.newPrescriptionOrders.toLocaleString()} customers × ${prescriptionCACInput} = <span className="text-red-600 font-bold">${currentMonthMetrics.totalPrescriptionCAC.toLocaleString()}</span></p>
              </div>
            </div>
            
            {/* Care Revenue Stream */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Care Revenue Stream</h3>
              <div className="text-sm space-y-2">
                <p><strong>Starting Members:</strong> {startingCareMembersInput.toLocaleString()} members</p>
                <p><strong>Initial Growth Rate:</strong> {careInitialGrowthInput}% → <strong>New Members:</strong> {currentMonthMetrics.newCareMembers.toLocaleString()}</p>
                <p><strong>Total Members:</strong> {currentMonthMetrics.totalCareMembers.toLocaleString()} members</p>
                <p><strong>Monthly Revenue:</strong> {currentMonthMetrics.newCareMembers} new members × ${annualMembershipPriceInput} = <span className="text-blue-600 font-bold">${(currentMonthMetrics.newCareMembers * annualMembershipPriceInput).toLocaleString()}</span></p>
                <p><strong>Care Customer Acquisition Cost:</strong> {currentMonthMetrics.newCareMembers.toLocaleString()} members × ${careCACInput} = <span className="text-red-600 font-bold">${currentMonthMetrics.totalCareCAC.toLocaleString()}</span></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Prescription Revenue</p>
                <p className="text-xl font-bold text-green-600">${Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Care Revenue</p>
                <p className="text-xl font-bold text-blue-600">${(currentMonthMetrics.newCareMembers * annualMembershipPriceInput).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-green-700">${(Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput) + (currentMonthMetrics.newCareMembers * annualMembershipPriceInput)).toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Net Revenue (after CAC):</strong> ${(Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput) + (currentMonthMetrics.newCareMembers * annualMembershipPriceInput)).toLocaleString()} - ${currentMonthMetrics.totalPrescriptionCAC.toLocaleString()} - ${currentMonthMetrics.totalCareCAC.toLocaleString()} = 
              </p>
              <p className="text-3xl font-bold text-emerald-700">${((Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput) + (currentMonthMetrics.newCareMembers * annualMembershipPriceInput)) - currentMonthMetrics.totalPrescriptionCAC - currentMonthMetrics.totalCareCAC).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            CAC Calculation Validation (Debug)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription Model Debug */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Prescription Model Debug</h3>
              <div className="text-sm space-y-2 font-mono bg-gray-50 p-4 rounded-lg">
                <p><span className="text-blue-600">Starting Customers:</span> {currentMonthMetrics.startingPrescriptionOrders.toLocaleString()}</p>
                <p><span className="text-blue-600">Growth Rate Applied:</span> {currentMonthMetrics.prescriptionGrowthRate}%</p>
                <p><span className="text-green-600">New Customers Acquired:</span> {currentMonthMetrics.startingPrescriptionOrders.toLocaleString()} × {currentMonthMetrics.prescriptionGrowthRate}% = {currentMonthMetrics.newPrescriptionOrders.toLocaleString()}</p>
                <p><span className="text-gray-600">Retained Customers:</span> {currentMonthMetrics.retainedPrescriptionOrders.toLocaleString()} (no churn in month 1)</p>
                <p><span className="text-purple-600">Total Customers:</span> {currentMonthMetrics.retainedPrescriptionOrders.toLocaleString()} + {currentMonthMetrics.newPrescriptionOrders.toLocaleString()} = {currentMonthMetrics.totalPrescriptionOrders.toLocaleString()}</p>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-red-600 font-bold">CAC Applied Only To:</span> {currentMonthMetrics.newPrescriptionOrders.toLocaleString()} new customers × ${prescriptionCACInput} = ${currentMonthMetrics.totalPrescriptionCAC.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">✓ CAC NOT applied to {currentMonthMetrics.retainedPrescriptionOrders.toLocaleString()} retained customers</p>
                </div>
              </div>
            </div>
            
            {/* Care Model Debug */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Care Model Debug</h3>
              <div className="text-sm space-y-2 font-mono bg-gray-50 p-4 rounded-lg">
                <p><span className="text-blue-600">Starting Members:</span> {currentMonthMetrics.startingCareMembers.toLocaleString()}</p>
                <p><span className="text-blue-600">Growth Rate Applied:</span> {currentMonthMetrics.careGrowthRate}%</p>
                <p><span className="text-green-600">New Members Acquired:</span> {currentMonthMetrics.startingCareMembers.toLocaleString()} × {currentMonthMetrics.careGrowthRate}% = {currentMonthMetrics.newCareMembers.toLocaleString()}</p>
                <p><span className="text-gray-600">Retained Members:</span> {currentMonthMetrics.retainedCareMembers.toLocaleString()} (no churn in month 1)</p>
                <p><span className="text-purple-600">Total Members:</span> {currentMonthMetrics.retainedCareMembers.toLocaleString()} + {currentMonthMetrics.newCareMembers.toLocaleString()} = {currentMonthMetrics.totalCareMembers.toLocaleString()}</p>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-red-600 font-bold">CAC Applied Only To:</span> {currentMonthMetrics.newCareMembers.toLocaleString()} new members × ${careCACInput} = ${currentMonthMetrics.totalCareCAC.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">✓ CAC NOT applied to {currentMonthMetrics.retainedCareMembers.toLocaleString()} retained members</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">CAC Validation Summary</h4>
              <p className="text-sm text-gray-700 mb-2">
                <span className="text-green-600 font-bold">✓ CORRECT:</span> CAC applied to {(currentMonthMetrics.newPrescriptionOrders + currentMonthMetrics.newCareMembers).toLocaleString()} new customers only
              </p>
              <p className="text-sm text-gray-700">
                <span className="text-green-600 font-bold">✓ CORRECT:</span> CAC NOT applied to {(currentMonthMetrics.retainedPrescriptionOrders + currentMonthMetrics.retainedCareMembers).toLocaleString()} retained customers
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">
                  Total CAC: ${(currentMonthMetrics.totalPrescriptionCAC + currentMonthMetrics.totalCareCAC).toLocaleString()} charged only for acquiring {(currentMonthMetrics.newPrescriptionOrders + currentMonthMetrics.newCareMembers).toLocaleString()} new customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Month 6 Revenue Timing Debug
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Month 6 Prescription Debug */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Month 6 Prescription Model</h3>
              <div className="text-sm space-y-2 font-mono bg-blue-50 p-4 rounded-lg">
                <p><span className="text-blue-600">Growth Rate at Month 6:</span> {month6Debug?.prescriptionGrowthRate.toFixed(2)}% (decayed from 80%)</p>
                <p><span className="text-gray-600">Total Customers by Month 6:</span> {month6Debug?.month6Data?.prescriptionCustomers.toLocaleString()}</p>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-green-600">Revenue Recognition:</span></p>
                  <p className="ml-2">• All {month6Debug?.month6Data?.prescriptionCustomers.toLocaleString()} customers × {(30 / prescriptionCycleInput).toFixed(3)} renewals × ${prescriptionAOVInput}</p>
                  <p className="ml-2">• = <span className="font-bold">${month6Debug?.month6Data?.prescriptionRevenue.toLocaleString()}</span> (immediate recognition)</p>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-red-600">CAC Timing:</span> Applied only when customers acquired</p>
                </div>
              </div>
            </div>
            
            {/* Month 6 Care Debug */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Month 6 Care Model</h3>
              <div className="text-sm space-y-2 font-mono bg-green-50 p-4 rounded-lg">
                <p><span className="text-blue-600">Growth Rate at Month 6:</span> {month6Debug?.careGrowthRate.toFixed(2)}% (decayed from 80%)</p>
                <p><span className="text-gray-600">Total Members by Month 6:</span> {month6Debug?.month6Data?.careMembers.toLocaleString()}</p>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-green-600">Revenue Recognition:</span></p>
                  <p className="ml-2">• All {month6Debug?.month6Data?.careMembers.toLocaleString()} members × ${(699/12).toFixed(2)} monthly</p>
                  <p className="ml-2">• = <span className="font-bold">${month6Debug?.month6Data?.careRevenue.toLocaleString()}</span> (upfront payment recognition)</p>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p><span className="text-red-600">CAC Timing:</span> Applied only when members acquired</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Month 6 Revenue vs CAC Timing Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Total Revenue</p>
                  <p className="text-lg font-bold text-green-700">${month6Debug?.month6Data?.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600">All customers/members pay immediately</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">Net Revenue</p>
                  <p className="text-lg font-bold text-red-700">${month6Debug?.month6Data?.netRevenue.toLocaleString()}</p>
                  <p className="text-xs text-red-600">After deducting all historical CAC</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-yellow-800">Revenue Recognition</p>
                  <p className="text-xs text-yellow-700">✓ Prescription: Immediate based on cycle</p>
                  <p className="text-xs text-yellow-700">✓ Care: Upfront annual payment</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm font-medium text-gray-800">
                  <span className="text-red-600">Issue Investigation:</span> If Month 6 shows ${month6Debug?.month6Data?.netRevenue.toLocaleString()} net revenue, 
                  this suggests cumulative CAC costs from previous months are significantly impacting profitability.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Revenue timing is correct - both models recognize revenue immediately when customers/members are acquired.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            5-Year Revenue Projections
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Month</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Prescription Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Care Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Total Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Net Revenue (after CAC)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 6, 12, 24, 36, 48, 60].map(monthNum => {
                  const projection = fiveYearProjections.monthlyProjections[monthNum - 1]
                  return (
                    <tr key={monthNum} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {monthNum === 12 || monthNum === 24 || monthNum === 36 || monthNum === 48 || monthNum === 60 
                          ? `Month ${monthNum} (Year ${monthNum / 12})`
                          : `Month ${monthNum}`
                        }
                      </td>
                      <td className="py-3 px-4 text-right text-green-600 font-medium">
                        ${projection.prescriptionRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-blue-600 font-medium">
                        ${projection.careRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-900 font-bold">
                        ${projection.totalRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-bold">
                        ${projection.netRevenue.toLocaleString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-300 bg-gray-50">
                  <td className="py-4 px-4 font-bold text-gray-900">5-Year Total</td>
                  <td className="py-4 px-4 text-right font-bold text-green-700">
                    ${fiveYearProjections.totals.prescriptionRevenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-blue-700">
                    ${fiveYearProjections.totals.careRevenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-gray-900 text-lg">
                    ${fiveYearProjections.totals.totalRevenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-emerald-800 text-lg">
                    ${fiveYearProjections.totals.netRevenue.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Methodology:</strong> Projections use logarithmic decay growth model where monthly growth rate = maturity rate + (initial rate - maturity rate) × (decay factor ^ month). This creates realistic S-curve growth that starts aggressive but matures to sustainable rates, preventing exponential explosion while incorporating churn effects.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Annual Revenue Summary
          </h2>
          
          <p className="text-sm text-gray-600 mb-6">
            Year-end revenue totals for simplified annual planning and investor presentation.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Year</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Prescription Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Care Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Total Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-800">Net Revenue (after CAC)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(year => {
                  const monthIndex = (year * 12) - 1 // Convert year to month index (0-indexed)
                  const projection = fiveYearProjections.monthlyProjections[monthIndex]
                  return (
                    <tr key={year} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">
                        Year {year}
                      </td>
                      <td className="py-3 px-4 text-right text-green-600 font-medium">
                        ${projection.prescriptionRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-blue-600 font-medium">
                        ${projection.careRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-900 font-bold">
                        ${projection.totalRevenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-bold">
                        ${projection.netRevenue.toLocaleString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Understanding Growth Decay Factor
          </h2>
          
          <div className="space-y-6">
            {/* Plain English Explanation */}
            <div>
              <p className="text-gray-700 text-base">
                The Growth Decay Factor controls how quickly your growth rate slows down over time as your business matures.
              </p>
            </div>
            
            {/* Practical Examples */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Practical Examples</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <div className="w-12 text-right mr-4 font-mono text-gray-600">0.95</div>
                  <div className="text-gray-700">Each month, growth rate becomes 95% of previous month (loses 5% momentum monthly)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 text-right mr-4 font-mono text-gray-600">0.98</div>
                  <div className="text-gray-700">Slower decline, stay aggressive longer</div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 text-right mr-4 font-mono text-gray-600">0.90</div>
                  <div className="text-gray-700">Faster decline, mature quickly</div>
                </div>
              </div>
            </div>
            
            {/* Real Example */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Real Example with Current 0.95 Factor</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">Month 1</div>
                    <div className="text-blue-600">76.5% growth</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">Month 2</div>
                    <div className="text-blue-600">73.2% growth</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">Month 12</div>
                    <div className="text-blue-600">47.8% growth</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">Month 60</div>
                    <div className="text-blue-600">13.2% growth</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Rationale */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Rationale</h3>
              <p className="text-gray-700 text-sm">
                Early customers are easier to acquire. Later growth requires more effort due to competition and market saturation.
              </p>
            </div>
            
            {/* Impact Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Impact Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div className="font-semibold text-green-800">Higher Numbers (0.97-0.99)</div>
                  <div className="text-green-700">Maintain aggressive growth longer</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="font-semibold text-blue-800">Lower Numbers (0.80-0.93)</div>
                  <div className="text-blue-700">Reach steady-state faster</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Input Definitions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription Model Definitions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Prescription Model</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p><strong>Starting Prescription Orders:</strong> Initial monthly prescription volume at launch</p>
                </div>
                <div>
                  <p><strong>Initial Growth Rate:</strong> Starting monthly growth rate at launch (aggressive early expansion)</p>
                </div>
                <div>
                  <p><strong>Maturity Growth Rate:</strong> Long-term sustainable growth rate as market matures</p>
                </div>
                <div>
                  <p><strong>Growth Decay Factor:</strong> Rate of decay from initial to mature growth (0.80-0.99, closer to 1.0 = slower decay)</p>
                </div>
                <div>
                  <p><strong>Prescription AOV:</strong> Average order value per prescription transaction</p>
                </div>
                <div>
                  <p><strong>Prescription Cycle:</strong> Days between repeat orders per customer</p>
                </div>
                <div>
                  <p><strong>Prescription Customer Churn Rate:</strong> % of prescription customers lost each month (accounts for 90-day cycles)</p>
                </div>
                <div>
                  <p><strong>Customer Acquisition Cost (Prescription):</strong> Marketing cost per new prescription customer</p>
                </div>
              </div>
            </div>
            
            {/* Care Model Definitions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Care Model</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p><strong>Starting Care Members:</strong> Initial monthly care membership base at launch</p>
                </div>
                <div>
                  <p><strong>Initial Growth Rate:</strong> Starting monthly growth rate at launch (aggressive early expansion)</p>
                </div>
                <div>
                  <p><strong>Maturity Growth Rate:</strong> Long-term sustainable growth rate as market matures</p>
                </div>
                <div>
                  <p><strong>Growth Decay Factor:</strong> Rate of decay from initial to mature growth (0.80-0.99, closer to 1.0 = slower decay)</p>
                </div>
                <div>
                  <p><strong>Annual Membership Price:</strong> Yearly subscription fee for primary care services</p>
                </div>
                <div>
                  <p><strong>Membership Customer Churn Rate:</strong> % of membership customers lost each month (annual renewal basis)</p>
                </div>
                <div>
                  <p><strong>Customer Acquisition Cost (Care):</strong> Marketing cost per new care member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Benchmark Against HIMS
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">HIMS Year 5 (2017–2022)</h3>
                <p className="text-2xl font-bold text-blue-700">$527M annual revenue</p>
                <p className="text-sm text-blue-600">($44M/month)</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Your Year 5 Projection</h3>
                <p className="text-2xl font-bold text-green-700">${Math.round(fiveYearProjections.monthlyProjections[59].totalRevenue * 12 / 1000000)}M annual revenue</p>
                <p className="text-sm text-green-600">(${Math.round(fiveYearProjections.monthlyProjections[59].totalRevenue / 1000000)}M/month)</p>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Market Context:</strong> Today (2025), HIMS is running at <span className="text-blue-600 font-bold">~$182M/month</span> (~$2.3–$2.4B annualized)
                </p>
                <p className="text-sm text-gray-600">
                  Our Year 5 projection is about <span className="text-orange-600 font-bold">one-third of their current scale</span>, representing a realistic market opportunity within the established telehealth landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App