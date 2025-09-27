import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, IndianRupee, TrendingDown } from 'lucide-react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(36);
  
  // EMI Calculation
  const monthlyInterestRate = interestRate / (12 * 100);
  const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure) / 
              (Math.pow(1 + monthlyInterestRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  return (
    <section id="calculator" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Calculator className="inline-block mr-3 h-8 w-8" />
              EMI <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Calculator</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Calculate your monthly EMI and plan your bike purchase budget
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹50K</span>
                    <span>₹10L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Loan Tenure (months)
                  </label>
                  <Input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 year</span>
                    <span>7 years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>EMI Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Monthly EMI */}
                <div className="text-center p-6 gradient-hero rounded-xl text-white">
                  <div className="text-sm opacity-90 mb-1">Monthly EMI</div>
                  <div className="text-3xl font-bold">₹{Math.round(emi).toLocaleString()}</div>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="feature-card text-center">
                    <div className="text-2xl font-bold text-primary">₹{loanAmount.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Principal Amount</div>
                  </div>
                  <div className="feature-card text-center">
                    <div className="text-2xl font-bold text-accent">₹{Math.round(totalInterest).toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Interest</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Amount Payable:</span>
                    <span className="font-semibold">₹{Math.round(totalAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Tenure:</span>
                    <span className="font-semibold">{tenure} months ({Math.round(tenure/12)} years)</span>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium flex items-center mb-2">
                    <TrendingDown className="mr-2 h-4 w-4 text-green-600" />
                    EMI Tips
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lower interest rates reduce your total cost</li>
                    <li>• Longer tenure means lower EMI but higher total interest</li>
                    <li>• Consider making a higher down payment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;