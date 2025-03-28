"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Shield,
  Clock,
  Phone,
  Mail,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  ChevronDown,
  Car,
  Home,
  Briefcase,
  Umbrella,
  MapPin,
  Clock8,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { TranslationProvider, useTranslation } from "@/hooks/use-translation"

function RocketInsuranceContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)
  const [supportDialogOpen, setSupportDialogOpen] = useState(false)
  const { t } = useTranslation()

  const logos = [
    { name: "Aviva", image: "/images/aviva-logo.png" },
    { name: "Travelers", image: "/images/travelers-logo.png" },
    { name: "Intact", image: "/images/intact-logo.png" },
    { name: "CAA", image: "/images/caa-logo.png" },
    { name: "Northbridge", image: "/images/northbridge-logo.png" },
    { name: "Gore Mutual", image: "/images/gore-mutual-logo.png" },
    { name: "Echelon", image: "/images/echelon-logo.png" },
    { name: "Economical", image: "/images/economical-logo.png" },
    { name: "Apollo", image: "/images/apollo-logo.png" },
    { name: "Forward", image: "/images/forward-logo.png" },
    { name: "Tugo", image: "/images/tugo-logo.png" },
    { name: "Wawanesa", image: "/images/wawanesa-logo.png" },
    { name: "Coachman", image: "/images/coachman-logo.png" },
    { name: "SGI Canada", image: "/images/sgi-canada-logo.png" },
    { name: "Unica", image: "/images/unica-logo.png" },
    { name: "JEVCO", image: "/images/jevco-logo.png" },
  ]

  const features = [
    {
      title: t("fastClaims"),
      description: "Get your claims processed in record time with our streamlined digital system.",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
    },
    {
      title: t("comprehensiveCoverage"),
      description: "From auto to home to business, we've got all your insurance needs covered.",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
    },
    {
      title: t("personalizedPlans"),
      description: "Get insurance tailored to your specific needs with customizable coverage options.",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
    },
  ]

  const insuranceTypes = [
    { id: "auto", label: t("auto") },
    { id: "home", label: t("home") },
    { id: "tenant", label: t("tenant") },
    { id: "business", label: t("business") },
    { id: "other", label: t("other") },
  ]

  const supportTypes = [
    { id: "policy-changes", label: "Policy Changes" },
    { id: "billing", label: "Billing" },
    { id: "claims", label: "Claims" },
  ]

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/6478657938`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <Rocket className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-blue-800">Rocket Insurance</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-700 font-medium items-center">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            {t("home")}
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              {t("services")} <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link href="/auto-insurance">
                <DropdownMenuItem className="cursor-pointer">
                  <Car className="mr-2 h-4 w-4" />
                  <span>{t("autoInsurance")}</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/home-insurance">
                <DropdownMenuItem className="cursor-pointer">
                  <Home className="mr-2 h-4 w-4" />
                  <span>{t("homeInsurance")}</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/beyond-basics">
                <DropdownMenuItem className="cursor-pointer">
                  <Umbrella className="mr-2 h-4 w-4" />
                  <span>{t("beyondBasics")}</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/business-insurance">
                <DropdownMenuItem className="cursor-pointer">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{t("businessInsurance")}</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              {t("existingClients")} <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800">Missed a Payment?</h4>
                <p className="text-sm text-gray-600">
                  If you've missed a payment, you can quickly catch up by sending an e-transfer.
                </p>
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-blue-800">E-Transfer Details:</p>
                  <p className="text-sm text-gray-600">
                    Send to: <span className="font-medium">payments@oraclerms.com</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Please include your policy number in the message.</p>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Please send a screenshot of the confirmation of payment made as soon as possible to{" "}
                    <a href="mailto:maria@rocket-insurance.ca" className="text-blue-600 hover:underline">
                      maria@rocket-insurance.ca
                    </a>
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2"
                    >
                      <span>{t("contactUs")}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/careers" className="hover:text-blue-500 transition-colors">
            {t("careers")}
          </Link>

          <Link href="/about-us" className="hover:text-blue-500 transition-colors">
            {t("aboutUs")}
          </Link>

          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            {t("contact")}
          </Link>

          <LanguageSwitcher />
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setQuoteDialogOpen(true)}>
            {t("getQuote")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mr-2"
            onClick={() => setQuoteDialogOpen(true)}
            size="sm"
          >
            <span className="sr-only md:not-sr-only">{t("getQuote")}</span>
            <Rocket className="h-4 w-4 animate-pulse" />
          </Button>
          <button className="md:hidden text-blue-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#home" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("home")}
              </a>
              <div className="py-2">
                <div className="flex items-center justify-between text-blue-700">
                  <span>{t("services")}</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/auto-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("autoInsurance")}
                  </Link>
                  <Link
                    href="/home-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("homeInsurance")}
                  </Link>
                  <Link
                    href="/beyond-basics"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("beyondBasics")}
                  </Link>
                  <Link
                    href="/business-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("businessInsurance")}
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="flex items-center justify-between text-blue-700">
                  <span>{t("existingClients")}</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 mt-2 space-y-2 bg-blue-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-blue-800">Missed a Payment?</p>
                  <p className="text-sm text-gray-600">
                    Send an e-transfer to: <span className="font-medium">payments@oraclerms.com</span>
                  </p>
                  <p className="text-sm text-gray-600">Include your policy number in the message.</p>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Send confirmation screenshot to{" "}
                    <a href="mailto:maria@rocket-insurance.ca" className="text-blue-600 hover:underline">
                      maria@rocket-insurance.ca
                    </a>
                  </p>
                  <div className="flex justify-center mt-3">
                    <Link href="/contact" className="w-full">
                      <Button
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full flex items-center justify-center gap-2"
                      >
                        <span>{t("contactUs")}</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/careers" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("careers")}
              </Link>
              <Link href="/about-us" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("aboutUs")}
              </Link>
              <Link href="/contact" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">{t("rocketSpeed")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("personalCommercial")}</p>
            <p className="text-lg text-gray-700 mb-8">
              Rocket Insurance is Latina-owned and proudly
              <span className="inline-flex items-center">
                Canadian
                <Image src="/images/maple-leaf.png" alt="Canadian Maple Leaf" width={20} height={20} className="ml-1" />
              </span>
              . We're on a mission to simplify insurance for everyone—bringing heart and hustle to the insurance world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => setQuoteDialogOpen(true)}
              >
                <span>{t("getYourFreeQuote")}</span>
                <Rocket className="h-5 w-5 animate-pulse" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/rocket-blue-sky.jpeg"
              alt="Rocket launching into blue sky"
              width={500}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t("whyChoose")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("combiningTech")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-blue-50 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Categories Preview */}
      <section className="py-16 px-6 md:px-10 lg:px-20 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{t("ourSolutions")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("exploreRange")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/auto-insurance">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">{t("autoInsurance")}</h3>
                  </div>
                  <p className="text-gray-600">
                    Coverage for your vehicle with competitive rates and personalized options.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/home-insurance">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">{t("homeInsurance")}</h3>
                  </div>
                  <p className="text-gray-600">
                    Protect your home, condo, or rental property with comprehensive coverage.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/beyond-basics">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Umbrella className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">{t("beyondBasics")}</h3>
                  </div>
                  <p className="text-gray-600">
                    Additional coverage options for life, travel, recreational vehicles, and more.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/business-insurance">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">{t("businessInsurance")}</h3>
                  </div>
                  <p className="text-gray-600">
                    Tailored solutions for businesses of all sizes to protect your operations.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{t("partners")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("trustedNames")}</p>
          </div>

          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -2400] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 30,
                ease: "linear",
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
                >
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={150}
                    height={60}
                    className="object-contain h-full"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless looping */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
                >
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={150}
                    height={60}
                    className="object-contain h-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("readyToBlastOff")}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">{t("joinThousands")}</p>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => setQuoteDialogOpen(true)}
              >
                <span>{t("getYourFreeQuote")}</span>
                <Rocket className="ml-2 h-5 w-5 transform rotate-45 animate-pulse" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 text-white py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="text-white" size={28} />
              <h3 className="text-xl font-bold">Rocket Insurance</h3>
            </div>
            <p className="text-blue-200 mb-6">
              Insurance that's fast, reliable, and out of this world. We're on a mission to revolutionize the insurance
              industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574789220335"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/andrea_insurance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/andreamarroquin-insurancebroker/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWSreakzeQOaC9eeumyKqmA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" onClick={handleWhatsAppClick} className="text-white hover:text-blue-300 transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="mailto:info@rocket-insurance.ca" className="text-white hover:text-blue-300 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t("products")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/auto-insurance" className="text-blue-200 hover:text-white transition-colors">
                  {t("autoInsurance")}
                </a>
              </li>
              <li>
                <a href="/home-insurance" className="text-blue-200 hover:text-white transition-colors">
                  {t("homeInsurance")}
                </a>
              </li>
              <li>
                <a href="/beyond-basics" className="text-blue-200 hover:text-white transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="/business-insurance" className="text-blue-200 hover:text-white transition-colors">
                  {t("businessInsurance")}
                </a>
              </li>
              <li>
                <a href="/beyond-basics" className="text-blue-200 hover:text-white transition-colors">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t("company")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about-us" className="text-blue-200 hover:text-white transition-colors">
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a href="/careers" className="text-blue-200 hover:text-white transition-colors">
                  {t("careers")}
                </a>
              </li>
              <li>
                <a href="#partners" className="text-blue-200 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t("contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                <a href="mailto:info@rocket-insurance.ca" className="text-blue-200 hover:text-white transition-colors">
                  info@rocket-insurance.ca
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                <a href="tel:416-628-1962" className="text-blue-200 hover:text-white transition-colors">
                  416-628-1962
                </a>
              </li>
              <li className="flex items-start mt-4">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                <span className="text-blue-200">
                  East Tower, 3250 Bloor St W Suite 600,
                  <br />
                  Toronto, ON, M8X 2X9
                </span>
              </li>
              <li className="flex items-start mt-4">
                <Clock8 className="h-5 w-5 mr-3 mt-0.5 text-blue-300" />
                <div className="text-blue-200">
                  <p className="font-semibold mb-1">{t("hours")}</p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    <span>Monday</span>
                    <span>10 AM - 5 PM</span>
                    <span>Tuesday</span>
                    <span>10 AM - 5 PM</span>
                    <span>Wednesday</span>
                    <span>10 AM - 5 PM</span>
                    <span>Thursday</span>
                    <span>10 AM - 5 PM</span>
                    <span>Friday</span>
                    <span>10 AM - 4 PM</span>
                    <span>Saturday</span>
                    <span>Closed</span>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </li>
              <li className="mt-6">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-200 hover:bg-blue-800 hover:text-white"
                  onClick={() => setSupportDialogOpen(true)}
                >
                  {t("contactUs")}
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm text-center">
              © {new Date().getFullYear()} Rocket Insurance. All rights reserved.
            </p>
            <p className="text-blue-300 text-sm text-center mt-1">
              Rocket Insurance is proudly a division of Oracle RMS
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                {t("privacyPolicy")}
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                {t("termsOfService")}
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                {t("cookiePolicy")}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Dialog */}
      <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-blue-800">{t("getYourFreeQuote")}</DialogTitle>
          </DialogHeader>
          <form className="space-y-6 py-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">{t("firstName")}</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">{t("lastName")}</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="space-y-3">
              <Label>{t("insuranceType")}</Label>
              <div className="grid grid-cols-2 gap-3">
                {insuranceTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={type.id} />
                    <Label htmlFor={type.id} className="cursor-pointer">
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2"
              >
                <span>{t("send")}</span>
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="h-6 w-6 transform rotate-45" />
                  </div>
                </div>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Support Dialog */}
      <Dialog open={supportDialogOpen} onOpenChange={setSupportDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-blue-800">How can we help?</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-6 py-4"
            onSubmit={(e) => {
              e.preventDefault()
              // Hidden email recipient
              // maria@rocket-insurance.ca
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="subject">{t("subject")}</Label>
              <Input id="subject" placeholder="Enter subject" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="policy-number">{t("policyNumber")}</Label>
              <Input id="policy-number" placeholder="Enter your policy number (if applicable)" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="support-first-name">{t("firstName")}</Label>
                <Input id="support-first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-last-name">{t("lastName")}</Label>
                <Input id="support-last-name" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Request Type</Label>
              <div className="grid gap-2">
                {supportTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={type.id} />
                    <Label htmlFor={type.id} className="cursor-pointer">
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-message">{t("message")}</Label>
              <Textarea
                id="support-message"
                placeholder="Please describe your request in detail"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-3">
              <Label>Best method of contact</Label>
              <RadioGroup defaultValue="email">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone">Phone</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-info">Contact Information</Label>
              <Input id="contact-info" placeholder="Email address or phone number" />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2"
              >
                <span>{t("send")}</span>
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="h-6 w-6 transform rotate-45" />
                  </div>
                </div>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default function RocketInsuranceWebsite() {
  return (
    <TranslationProvider>
      <RocketInsuranceContent />
    </TranslationProvider>
  )
}

