"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Globe, Sparkles, ChevronDown } from "lucide-react"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#a78bfa" // purple-400

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-400/10 flex items-center justify-center mt-0.5">
        <Check className="w-3 h-3 text-purple-400" />
      </div>
      <span className={`text-sm leading-relaxed ${muted ? "text-neutral-500" : "text-neutral-300"}`}>{text}</span>
    </li>
  )
}

type Currency = "USD" | "EUR" | "GBP" | "INR"

const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  INR: 83.12,
}

const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
}

const CURRENCY_LABELS = {
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
  INR: "INR",
}

// Base prices in USD
const BASE_PRICES = {
  starter: 29,
  professional: 79,
  enterprise: 199,
}

function formatPrice(amount: number, currency: Currency): string {
  const convertedAmount = Math.round(amount * EXCHANGE_RATES[currency])
  const symbol = CURRENCY_SYMBOLS[currency]

  if (currency === "INR") {
    return `${symbol}${convertedAmount.toLocaleString("en-IN")}`
  }
  return `${symbol}${convertedAmount.toLocaleString()}`
}

function getPrices(currency: Currency) {
  return {
    starter: formatPrice(BASE_PRICES.starter, currency),
    professional: formatPrice(BASE_PRICES.professional, currency),
    enterprise: formatPrice(BASE_PRICES.enterprise, currency),
  }
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""

  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  if (/-(GB|UK)\b/i.test(lang) || /London/i.test(tz || "")) return "GBP"
  if (/-(DE|FR|IT|ES|NL|BE|AT)\b/i.test(lang) || /(Berlin|Paris|Rome|Madrid|Amsterdam|Brussels|Vienna)/i.test(tz || ""))
    return "EUR"
  return "USD"
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) {
          const apiCurrency = data?.currency
          if (["USD", "EUR", "GBP", "INR"].includes(apiCurrency)) {
            setCurrency(apiCurrency as Currency)
          } else {
            setCurrency(guessLocalCurrency())
          }
        }
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const prices = getPrices(currency)

  return (
    <section id="pricing" className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-neutral-300">Flexible Pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Choose your <span className="text-purple-400">plan</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core AI-powered features with
            flexible scaling options.
          </p>
        </div>

        {/* Currency Selector - Centered */}
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <Select 
              value={currency} 
              onValueChange={(value: Currency) => setCurrency(value)}
              onOpenChange={setIsDropdownOpen}
            >
              <SelectTrigger 
                className="w-[160px] bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2.5 
                          hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200 
                          focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400/50"
              >
                <div className="flex items-center gap-2 w-full">
                  <Globe className={`w-4 h-4 transition-colors duration-200 ${
                    isDropdownOpen ? 'text-purple-400' : 'text-neutral-400'
                  }`} />
                  <span className="text-sm font-medium text-white flex-1 text-left">
                    {CURRENCY_LABELS[currency]}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-purple-400' : ''
                  }`} />
                </div>
              </SelectTrigger>
              <SelectContent 
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden
                          shadow-2xl min-w-[160px]"
              >
                <SelectItem 
                  value="USD" 
                  className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer 
                            transition-colors duration-150 text-white"
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <span>USD ($)</span>
                    {currency === "USD" && <Check className="w-4 h-4 text-purple-400" />}
                  </div>
                </SelectItem>
                <SelectItem 
                  value="EUR" 
                  className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer 
                            transition-colors duration-150 text-white"
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <span>EUR (€)</span>
                    {currency === "EUR" && <Check className="w-4 h-4 text-purple-400" />}
                  </div>
                </SelectItem>
                <SelectItem 
                  value="GBP" 
                  className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer 
                            transition-colors duration-150 text-white"
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <span>GBP (£)</span>
                    {currency === "GBP" && <Check className="w-4 h-4 text-purple-400" />}
                  </div>
                </SelectItem>
                <SelectItem 
                  value="INR" 
                  className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer 
                            transition-colors duration-150 text-white"
                >
                  <div className="flex items-center justify-between w-full gap-3">
                    <span>INR (₹)</span>
                    {currency === "INR" && <Check className="w-4 h-4 text-purple-400" />}
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <Card className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
            <CardHeader className="p-8 pb-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                <p className="text-sm text-neutral-400">Perfect for small teams and startups</p>
              </div>
              {/* Fixed height container for price - prevents layout shift */}
              <div className="min-h-[4rem] flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white font-mono">{prices.starter}</span>
                <span className="text-neutral-400 text-sm whitespace-nowrap">/month</span>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <ul className="space-y-4">
                <FeatureItem text="Up to 5 team members" />
                <FeatureItem text="Basic AI analytics dashboard" />
                <FeatureItem text="5GB cloud storage" />
                <FeatureItem text="Email support (48h response)" />
                <FeatureItem text="Community access" />
              </ul>
            </CardContent>

            <CardFooter className="p-8 pt-6">
              <Button
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-6 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Plan - Most Popular */}
          <Card className="group relative bg-neutral-900 border-2 border-purple-400 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:-translate-y-2 lg:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-4 py-2 bg-purple-400 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-black">Most Popular</span>
              </div>
            </div>

            <CardHeader className="p-8 pb-6 pt-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                <p className="text-sm text-neutral-400">Ideal for growing businesses</p>
              </div>
              {/* Fixed height container for price - prevents layout shift */}
              <div className="min-h-[4rem] flex items-baseline gap-2">
                <span className="text-5xl font-bold text-purple-400 font-mono">{prices.professional}</span>
                <span className="text-neutral-400 text-sm whitespace-nowrap">/month</span>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <ul className="space-y-4">
                <FeatureItem text="Up to 20 team members" />
                <FeatureItem text="Advanced AI analytics & insights" />
                <FeatureItem text="50GB cloud storage" />
                <FeatureItem text="Priority email support (24h response)" />
                <FeatureItem text="Full API access" />
                <FeatureItem text="Custom integrations" />
              </ul>
            </CardContent>

            <CardFooter className="p-8 pt-6">
              <Button
                className="w-full bg-purple-400 hover:bg-purple-500 text-black rounded-full py-6 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-purple-400/50"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
            <CardHeader className="p-8 pb-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                <p className="text-sm text-neutral-400">For large organizations with complex needs</p>
              </div>
              {/* Fixed height container for price - prevents layout shift */}
              <div className="min-h-[4rem] flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white font-mono">{prices.enterprise}</span>
                <span className="text-neutral-400 text-sm whitespace-nowrap">/month</span>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <ul className="space-y-4">
                <FeatureItem text="Unlimited team members" />
                <FeatureItem text="Custom AI models & analytics" />
                <FeatureItem text="Unlimited cloud storage" />
                <FeatureItem text="24/7 phone & email support" />
                <FeatureItem text="Advanced API & webhooks" />
                <FeatureItem text="Dedicated account manager" />
                <FeatureItem text="Custom SLA & contracts" />
              </ul>
            </CardContent>

            <CardFooter className="p-8 pt-6">
              <Button
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-6 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >

                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}