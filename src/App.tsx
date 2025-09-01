import { useState, useEffect } from 'react'
// Recharts imports preserved for future chart restoration
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useFinancialModel } from './hooks/useFinancialModel'

function App() {
  const { monthlyRevenue, monthlyGrossRevenue, monthlyMemberCounts, updateInputs } = useFinancialModel()
  const [startingPrescriptionOrdersInput, setStartingPrescriptionOrdersInput] = useState(400)
  const [monthlyNewPrescriptionOrdersInput, setMonthlyNewPrescriptionOrdersInput] = useState(20)
  const [monthlyGrowthRateInput, setMonthlyGrowthRateInput] = useState(5)
  const [annualMembershipPriceInput, setAnnualMembershipPriceInput] = useState(699)
  const [primaryCareConversionRateInput, setPrimaryCareConversionRateInput] = useState(25)
  const [prescriptionCycleInput, setPrescriptionCycleInput] = useState(90)
  const [cacInput, setCacInput] = useState(250)
  const [churnInput, setChurnInput] = useState(3)
  const [aovInput, setAovInput] = useState(75)

  useEffect(() => {
    updateInputs({ 
      startingPrescriptionOrders: startingPrescriptionOrdersInput, 
      monthlyNewPrescriptionOrders: monthlyNewPrescriptionOrdersInput, 
      monthlyGrowthRate: monthlyGrowthRateInput,
      annualMembershipPrice: annualMembershipPriceInput,
      primaryCareConversionRate: primaryCareConversionRateInput,
      prescriptionCycle: prescriptionCycleInput,
      cac: cacInput, 
      churnRate: churnInput, 
      prescriptionAOV: aovInput 
    })
  }, [startingPrescriptionOrdersInput, monthlyNewPrescriptionOrdersInput, monthlyGrowthRateInput, annualMembershipPriceInput, primaryCareConversionRateInput, prescriptionCycleInput, cacInput, churnInput, aovInput, updateInputs])

  // Scenario preset functions - now prescription-first
  const applyConservativeScenario = () => {
    setStartingPrescriptionOrdersInput(200)
    setMonthlyNewPrescriptionOrdersInput(30)
    setMonthlyGrowthRateInput(8)
    setAnnualMembershipPriceInput(699)
    setPrimaryCareConversionRateInput(20)
    setPrescriptionCycleInput(90)
    setCacInput(280)
    setChurnInput(2.5)
    setAovInput(85)
  }

  const applyModerateScenario = () => {
    setStartingPrescriptionOrdersInput(400)
    setMonthlyNewPrescriptionOrdersInput(60)
    setMonthlyGrowthRateInput(12)
    setAnnualMembershipPriceInput(699)
    setPrimaryCareConversionRateInput(25)
    setPrescriptionCycleInput(90)
    setCacInput(195)
    setChurnInput(1.8)
    setAovInput(110)
  }

  const applyAggressiveScenario = () => {
    setStartingPrescriptionOrdersInput(600)
    setMonthlyNewPrescriptionOrdersInput(120)
    setMonthlyGrowthRateInput(20)
    setAnnualMembershipPriceInput(699)
    setPrimaryCareConversionRateInput(30)
    setPrescriptionCycleInput(75)
    setCacInput(150)
    setChurnInput(1.2)
    setAovInput(135)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Hedfirst Growth Model
        </h1>
        
        {/* Scenario Preset Buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Scenario Presets</h2>
          <div className="flex gap-4 justify-center">
            <button
              onClick={applyConservativeScenario}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-3 text-base bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200"
            >
              Conservative
              <span className="ml-2 text-xs text-gray-600">(25th percentile)</span>
            </button>
            
            <button
              onClick={applyModerateScenario}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 py-3 text-base bg-blue-600 text-white hover:bg-blue-700 shadow-md"
            >
              Moderate
              <span className="ml-2 text-xs text-blue-100">(50th percentile)</span>
            </button>
            
            <button
              onClick={applyAggressiveScenario}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 py-3 text-base bg-green-600 text-white hover:bg-green-700 shadow-md"
            >
              Aggressive
              <span className="ml-2 text-xs text-green-100">(75th percentile)</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Financial Model Inputs
          </h2>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {/* Top Row: Prescription Volume Metrics */}
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
                  Monthly New Prescription Orders
                </label>
                <input
                  type="number"
                  value={monthlyNewPrescriptionOrdersInput}
                  onChange={(e) => setMonthlyNewPrescriptionOrdersInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="10"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Growth Rate (%)
                </label>
                <input
                  type="number"
                  value={monthlyGrowthRateInput}
                  onChange={(e) => setMonthlyGrowthRateInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="50"
                  step="0.5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </div>
            
            {/* Middle Row: Prescription & Conversion Metrics */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prescription AOV ($)
                </label>
                <input
                  type="number"
                  value={aovInput}
                  onChange={(e) => setAovInput(Number(e.target.value))}
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
                  Primary Care Conversion Rate (%)
                </label>
                <input
                  type="number"
                  value={primaryCareConversionRateInput}
                  onChange={(e) => setPrimaryCareConversionRateInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  max="100"
                  step="5"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </div>
            
            {/* Bottom Row: Cost Metrics */}
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
                  Customer Acquisition Cost (CAC)
                </label>
                <input
                  type="number"
                  value={cacInput}
                  onChange={(e) => setCacInput(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-right"
                  min="0"
                  step="10"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Churn Rate (%)
                </label>
                <input
                  type="number"
                  value={churnInput}
                  onChange={(e) => setChurnInput(Number(e.target.value))}
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Revenue Breakdown
          </h2>
          <div className="text-lg space-y-2">
            <p><strong>Prescription Revenue:</strong> {startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput} total orders × {(30 / prescriptionCycleInput).toFixed(2)} renewals/month × ${aovInput} = <span className="text-green-600 font-bold">${Math.round((startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput) * (30 / prescriptionCycleInput) * aovInput).toLocaleString()}</span></p>
            <p><strong>New Members from Conversion:</strong> {monthlyNewPrescriptionOrdersInput} new prescription orders × {primaryCareConversionRateInput}% = <span className="text-blue-600 font-bold">{Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100))} new members</span></p>
            <p><strong>Subscription Revenue:</strong> {Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100))} new members × ${annualMembershipPriceInput} = <span className="text-green-600 font-bold">${(Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100)) * annualMembershipPriceInput).toLocaleString()}</span></p>
            <p><strong>Gross Revenue:</strong> ${Math.round((startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput) * (30 / prescriptionCycleInput) * aovInput).toLocaleString()} + ${(Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100)) * annualMembershipPriceInput).toLocaleString()} = <span className="text-blue-600 font-bold">${(Math.round((startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput) * (30 / prescriptionCycleInput) * aovInput) + (Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100)) * annualMembershipPriceInput)).toLocaleString()}</span></p>
            <p><strong>CAC Costs:</strong> {monthlyNewPrescriptionOrdersInput} new prescription customers × ${cacInput} = <span className="text-red-600 font-bold">($${(monthlyNewPrescriptionOrdersInput * cacInput).toLocaleString()})</span></p>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <p className="text-xl font-bold"><strong>Net Revenue:</strong> ${(Math.round((startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput) * (30 / prescriptionCycleInput) * aovInput) + (Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100)) * annualMembershipPriceInput)).toLocaleString()} - ${(monthlyNewPrescriptionOrdersInput * cacInput).toLocaleString()} = <span className="text-green-700 font-bold text-2xl">${(Math.round((startingPrescriptionOrdersInput + monthlyNewPrescriptionOrdersInput) * (30 / prescriptionCycleInput) * aovInput) + (Math.round(monthlyNewPrescriptionOrdersInput * (primaryCareConversionRateInput / 100)) * annualMembershipPriceInput) - (monthlyNewPrescriptionOrdersInput * cacInput)).toLocaleString()}</span></p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Member Growth Trajectory
          </h2>
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">Chart data ready - visualization removed for integrity check</p>
              <p className="text-sm text-gray-500 mt-2">
                Data points: {monthlyMemberCounts.length} months | 
                Max members: {Math.max(...monthlyMemberCounts).toLocaleString()}
              </p>
            </div>
            {/* 
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyMemberCounts.map((memberCount, index) => ({
                  month: index + 1,
                  members: memberCount
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                  label={{ value: 'Members', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`${Number(value).toLocaleString()}`, 'Members']}
                  labelFormatter={(label) => `Month ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="members" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            */}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Gross Revenue Trajectory (Before CAC)
          </h2>
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">Chart data ready - visualization removed for integrity check</p>
              <p className="text-sm text-gray-500 mt-2">
                Data points: {monthlyGrossRevenue.length} months | 
                Max gross revenue: ${Math.max(...monthlyGrossRevenue).toLocaleString()}
              </p>
            </div>
            {/* 
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyGrossRevenue.map((grossRevenue, index) => ({
                  month: index + 1,
                  revenue: grossRevenue
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  label={{ value: 'Gross Revenue', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Gross Revenue']}
                  labelFormatter={(label) => `Month ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            */}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Net Revenue Trajectory (After CAC)
          </h2>
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">Chart data ready - visualization removed for integrity check</p>
              <p className="text-sm text-gray-500 mt-2">
                Data points: {monthlyRevenue.length} months | 
                Max net revenue: ${Math.max(...monthlyRevenue).toLocaleString()}
              </p>
            </div>
            {/* 
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyRevenue.map((revenue, index) => ({
                  month: index + 1,
                  revenue: revenue
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  label={{ value: 'Net Revenue', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Net Revenue']}
                  labelFormatter={(label) => `Month ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#059669" 
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            */}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            12-Month Revenue Calculations
          </h2>
          <p className="text-gray-600 mb-6">
            Each number shows monthly net revenue: subscription revenue + prescription revenue - customer acquisition costs (CAC) for new members.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {monthlyRevenue.slice(0, 12).map((revenue, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded">
                <div className="font-semibold text-gray-600">Month {index + 1}</div>
                <div className="text-xl font-bold text-green-600">${revenue.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App