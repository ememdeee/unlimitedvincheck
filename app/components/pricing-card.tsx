'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Car, Clock, Shield, Users, AlertTriangle, Activity, Gavel, FileText, Calendar, Bell, Check } from 'lucide-react'
import { PricingPopup } from './PricingPopup'

const pricingOptions = [
  {
    title: "1 Report",
    price: "$19.99",
    description: "Complete Report for 1 Vehicle",
    bgColor: "bg-white",
    buttonText: "Get Your Report",
    code: "DVH1"
  },
  {
    title: "2 Reports",
    price: "$29.99",
    description: "Complete Report for 2 Vehicles",
    bgColor: "bg-gray-50",
    buttonText: "Get Your Reports",
    code: "DVH2"
  },
  {
    title: "Unlimited Reports",
    price: "$49.99/month",
    description: "Annual Subscription",
    bgColor: "bg-gray-100",
    buttonText: "Start Subscription",
    code: "DVHYRS"
  }
]

const features = [
  { icon: Car, text: "Complete Report" },
  { icon: Clock, text: "Report Never Expires" },
  { icon: Shield, text: "Title Brand Verification" },
  { icon: Users, text: "Ownership Records" },
  { icon: AlertTriangle, text: "Accident Information" },
  { icon: Activity, text: "Vehicle Usage" },
  { icon: Gavel, text: "Auction Records" },
  { icon: FileText, text: "Detailed History Verification" },
  { icon: Calendar, text: "Event Verification" },
  { icon: Bell, text: "Recalls" },
]

export function PricingCards() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null)

  const handleOpenPopup = (code: string) => {
    setSelectedCode(code)
  }

  const handleClosePopup = () => {
    setSelectedCode(null)
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingOptions.map((option, index) => (
          <Card key={index} className={`w-full overflow-hidden transition-all duration-300 hover:shadow-lg ${option.bgColor}`}>
            <CardHeader className="text-center p-6 bg-gradient-to-br from-white to-gray-50">
              <div className="text-2xl font-bold mb-2">{option.title}</div>
              <div className="text-4xl font-bold ">
                {option.price}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {option.description}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {index === 2 ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <feature.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                className="w-full text-white transition-all duration-300"
                size="lg"
                onClick={() => handleOpenPopup(option.code)}
              >
                {option.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PricingPopup 
        isOpen={!!selectedCode}
        onClose={handleClosePopup}
        code={selectedCode || ''}
      />
    </>
  )
}