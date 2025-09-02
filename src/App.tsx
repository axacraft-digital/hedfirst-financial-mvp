import { useState, useEffect } from 'react'
import { useFinancialModel } from './hooks/useFinancialModel'

function App() {
  const { updateInputs, currentMonthMetrics } = useFinancialModel()
  // Prescription Model Inputs
  const [startingPrescriptionOrdersInput, setStartingPrescriptionOrdersInput] = useState(50)
  const [prescriptionGrowthRateInput, setPrescriptionGrowthRateInput] = useState(5)
  const [prescriptionAOVInput, setPrescriptionAOVInput] = useState(75)
  const [prescriptionCycleInput, setPrescriptionCycleInput] = useState(90)
  const [prescriptionChurnInput, setPrescriptionChurnInput] = useState(2)
  
  // Care Model Inputs
  const [startingCareMembersInput, setStartingCareMembersInput] = useState(50)
  const [careGrowthRateInput, setCareGrowthRateInput] = useState(8)
  const [annualMembershipPriceInput, setAnnualMembershipPriceInput] = useState(699)
  const [membershipChurnInput, setMembershipChurnInput] = useState(1)

  useEffect(() => {
    updateInputs({ 
      // Prescription Model
      startingPrescriptionOrders: startingPrescriptionOrdersInput,
      prescriptionGrowthRate: prescriptionGrowthRateInput,
      prescriptionAOV: prescriptionAOVInput,
      prescriptionCycle: prescriptionCycleInput,
      prescriptionChurnRate: prescriptionChurnInput,
      
      // Care Model  
      startingCareMembers: startingCareMembersInput,
      careGrowthRate: careGrowthRateInput,
      annualMembershipPrice: annualMembershipPriceInput,
      membershipChurnRate: membershipChurnInput
    })
  }, [startingPrescriptionOrdersInput, prescriptionGrowthRateInput, prescriptionAOVInput, prescriptionCycleInput, prescriptionChurnInput, startingCareMembersInput, careGrowthRateInput, annualMembershipPriceInput, membershipChurnInput, updateInputs])


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
                  Monthly Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={prescriptionGrowthRateInput}
                  onChange={(e) => setPrescriptionGrowthRateInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="50"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
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
                  Monthly Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={careGrowthRateInput}
                  onChange={(e) => setCareGrowthRateInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="50"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
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
                  <p><strong>Monthly Growth Rate:</strong> Compound growth rate for prescription orders expansion</p>
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
                  <p><strong>Monthly Growth Rate:</strong> Compound growth rate for care membership expansion</p>
                </div>
                <div>
                  <p><strong>Annual Membership Price:</strong> Yearly subscription fee for primary care services</p>
                </div>
                <div>
                  <p><strong>Membership Customer Churn Rate:</strong> % of membership customers lost each month (annual renewal basis)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Revenue Breakdown
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription Revenue Stream */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Prescription Revenue Stream</h3>
              <div className="text-sm space-y-2">
                <p><strong>Starting Orders:</strong> {startingPrescriptionOrdersInput.toLocaleString()} orders</p>
                <p><strong>Growth Rate:</strong> {prescriptionGrowthRateInput}% → <strong>New Orders:</strong> {currentMonthMetrics.newPrescriptionOrders.toLocaleString()}</p>
                <p><strong>Total Orders:</strong> {currentMonthMetrics.totalPrescriptionOrders.toLocaleString()} orders</p>
                <p><strong>Monthly Revenue:</strong> {currentMonthMetrics.totalPrescriptionOrders} orders × {(30 / prescriptionCycleInput).toFixed(2)} renewals/month × ${prescriptionAOVInput} = <span className="text-green-600 font-bold">${Math.round(currentMonthMetrics.totalPrescriptionOrders * (30 / prescriptionCycleInput) * prescriptionAOVInput).toLocaleString()}</span></p>
              </div>
            </div>
            
            {/* Care Revenue Stream */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Care Revenue Stream</h3>
              <div className="text-sm space-y-2">
                <p><strong>Starting Members:</strong> {startingCareMembersInput.toLocaleString()} members</p>
                <p><strong>Growth Rate:</strong> {careGrowthRateInput}% → <strong>New Members:</strong> {currentMonthMetrics.newCareMembers.toLocaleString()}</p>
                <p><strong>Total Members:</strong> {currentMonthMetrics.totalCareMembers.toLocaleString()} members</p>
                <p><strong>Monthly Revenue:</strong> {currentMonthMetrics.newCareMembers} new members × ${annualMembershipPriceInput} = <span className="text-blue-600 font-bold">${(currentMonthMetrics.newCareMembers * annualMembershipPriceInput).toLocaleString()}</span></p>
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
        </div>


      </div>
    </div>
  )
}

export default App