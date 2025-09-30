"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Globe } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#7B68EE"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-300"}`}>{text}</span>
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

// Base prices in USD
const BASE_PRICES = {
  startup: 29,
  pro: 79,
  premium: 199,
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
    startup: formatPrice(BASE_PRICES.startup, currency),
    pro: formatPrice(BASE_PRICES.pro, currency),
    premium: formatPrice(BASE_PRICES.premium, currency),
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

// Demo videos for each plan
const startupVideos = [
  "ysz5S6PUM-U",
  "aqz-KE-bpKQ",
  "ScMzIvxBSi4",
  "dQw4w9WgXcQ",
  "VYOjWnS4cMY",
  "9bZkp7q19f0",
  "3JZ_D3ELwOQ",
  "e-ORhEE9VVg",
  "fJ9rUzIMcZQ",
]

const proVideos = [
  "ASV2myPRfKA",
  "eTfS2lqwf6A",
  "KALbYHmGV4I",
  "Go0AA9hZ4as",
  "sB7RZ9QCOAg",
  "TK2WboJOJaw",
  "5Xq7UdXXOxI",
  "kMjWCidQSK0",
  "RKKdQvwKOhQ",
]

const premiumVideos = [
  "v2AC41dglnM",
  "pRpeEdMmmQ0",
  "3AtDnEC4zak",
  "JRfuAukYTKg",
  "LsoLEjrDogU",
  "RB-RcX5DS5A",
  "hTWKbfoikeg",
  "YQHsXMglC9A",
  "09R8_2nJtjg",
]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Startup" | "Pro" | "Premium">(null)
  const [currency, setCurrency] = useState<Currency>("USD")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

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
    <section id="pricing" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include our core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-neutral-800 rounded-full p-1 mb-8">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all text-background ${
                billingCycle === "monthly" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all text-background ${
                billingCycle === "annually" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
              }`}
            >
              View Example
            </button>
          </div>

          {/* Currency Selector */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Globe className="w-4 h-4 text-neutral-400" />
            <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
              <SelectTrigger className="w-32 bg-neutral-900 border-neutral-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="INR">INR (₹)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="bg-neutral-900 border-neutral-800 rounded-2xl p-8 relative">
            <CardHeader className="p-0 mb-8">
              <h3 className="text-2xl font-bold mb-2 text-[rgba(123,104,238,1)]">Starter</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[rgba(123,104,238,1)]">{prices.startup}</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-neutral-400 mt-4">Perfect for small teams and startups.</p>
            </CardHeader>

            <CardContent className="p-0 mb-8">
              <ul className="space-y-4">
                <FeatureItem text="Up to 5 team members" />
                <FeatureItem text="Basic analytics" />
                <FeatureItem text="5GB storage" />
                <FeatureItem text="Email support" />
              </ul>
            </CardContent>

            <CardFooter className="p-0">
              <Button
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-3"
                onClick={() => setOpenPlan("Startup")}
              >
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Plan - Most Popular */}
          <Card className="bg-neutral-900 border-2 rounded-2xl p-8 relative" style={{ borderColor: ACCENT }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-background bg-[rgba(123,104,238,1)]">Most Popular</span>
            </div>

            <CardHeader className="p-0 mb-8">
              <h3 className="text-2xl font-bold mb-2 text-[rgba(123,104,238,1)]">Professional</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[rgba(123,104,238,1)]">{prices.pro}</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-neutral-400 mt-4">Ideal for growing businesses.</p>
            </CardHeader>

            <CardContent className="p-0 mb-8">
              <ul className="space-y-4">
                <FeatureItem text="Up to 20 team members" />
                <FeatureItem text="Advanced analytics" />
                <FeatureItem text="25GB storage" />
                <FeatureItem text="Priority email support" />
                <FeatureItem text="API access" />
              </ul>
            </CardContent>

            <CardFooter className="p-0">
              <Button
                className="w-full text-white rounded-full py-3"
                style={{ backgroundColor: ACCENT }}
                onClick={() => setOpenPlan("Pro")}
              >
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-neutral-900 border-neutral-800 rounded-2xl p-8 relative">
            <CardHeader className="p-0 mb-8">
              <h3 className="text-2xl font-bold mb-2 text-[rgba(123,104,238,1)]">Enterprise</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[rgba(123,104,238,1)]">{prices.premium}</span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-neutral-400 mt-4">For large organizations with complex needs.</p>
            </CardHeader>

            <CardContent className="p-0 mb-8">
              <ul className="space-y-4">
                <FeatureItem text="Unlimited team members" />
                <FeatureItem text="Custom analytics" />
                <FeatureItem text="Unlimited storage" />
                <FeatureItem text="24/7 phone & email support" />
                <FeatureItem text="Advanced API access" />
                <FeatureItem text="Custom integrations" />
              </ul>
            </CardContent>

            <CardFooter className="p-0">
              <Button
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-3"
                onClick={() => setOpenPlan("Premium")}
              >
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Modals */}
      <ExamplesDialog
        open={openPlan === "Startup"}
        onOpenChange={(v) => setOpenPlan(v ? "Startup" : null)}
        planName="Startup Plan"
        price={prices.startup}
        videoIds={startupVideos}
      />
      <ExamplesDialog
        open={openPlan === "Pro"}
        onOpenChange={(v) => setOpenPlan(v ? "Pro" : null)}
        planName="Pro Plan"
        price={prices.pro}
        videoIds={proVideos}
      />
      <ExamplesDialog
        open={openPlan === "Premium"}
        onOpenChange={(v) => setOpenPlan(v ? "Premium" : null)}
        planName="Premium Plan"
        price={prices.premium}
        videoIds={premiumVideos}
      />
    </section>
  )
}
