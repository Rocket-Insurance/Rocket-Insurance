"use client"

import { Button } from "@/components/ui/button"
import { Rocket, Briefcase, Upload, ExternalLink, Users, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { useTranslation } from "@/hooks/use-translation"

export default function CareersPage() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)
  const [resumeDialogOpen, setResumeDialogOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      {/* Header */}
      <SiteHeader onOpenQuote={() => setQuoteDialogOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">{t("joinOurTeam")}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Rocket Insurance, we're building a team of passionate professionals who are dedicated to transforming
              the insurance industry. Join us and grow your career in a supportive, innovative environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/careers-women-talking.jpeg"
                alt="Team members collaborating"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-800">{t("whyWorkWithUs")}</h2>
              <p className="text-gray-700">
                We provide not just training but assistance to grow into your career and encourage professional
                development. Our collaborative environment fosters innovation and personal growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">{t("careerGrowth")}</h3>
                    <p className="text-gray-600">Opportunities for advancement and professional development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Rocket className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">{t("supportiveEnvironment")}</h3>
                    <p className="text-gray-600">Work with a team that values collaboration and innovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">{t("diverseTeam")}</h3>
                    <p className="text-gray-600">
                      Join a diverse and inclusive workplace that celebrates different perspectives
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  onClick={() => setResumeDialogOpen(true)}
                >
                  <span>{t("sendYourResume")}</span>
                  <Upload className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full flex items-center gap-2"
                  asChild
                >
                  <a href="https://www.linkedin.com/jobs/view/4182624754" target="_blank" rel="noopener noreferrer">
                    <span className="text-blue-600">{t("viewOnLinkedIn")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-6 md:px-10 lg:px-20 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t("currentOpenings")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're currently looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">LLQP Licensed Insurance Broker</h3>
              <p className="text-gray-700 mb-4">
                We are seeking licensed insurance professionals to join our team. Ideal candidates will have strong
                communication skills and a passion for helping clients find the right coverage.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">LLQP license required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Experience in personal lines insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Strong customer service skills</span>
                </div>
              </div>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => setResumeDialogOpen(true)}
              >
                <span>Apply Now</span>
                <Upload className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Commercial Insurance Broker</h3>
              <p className="text-gray-700 mb-4">
                Join our commercial lines team to help business owners protect their investments. We're looking for
                experienced brokers with a strong understanding of commercial insurance products.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Commercial insurance experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Knowledge of business insurance products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">Relationship building skills</span>
                </div>
              </div>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => setResumeDialogOpen(true)}
              >
                <span>Apply Now</span>
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t("ourCulture")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where everyone can thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">{t("growthMindset")}</h3>
              <p className="text-gray-700">
                We provide assistance to help you grow into your career and encourage continuous learning and
                development.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">{t("collaborativeSpirit")}</h3>
              <p className="text-gray-700">
                We work together as a team, sharing knowledge and supporting each other to achieve common goals.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">{t("workLifeBalance")}</h3>
              <p className="text-gray-700">
                We value the importance of balance and offer flexible arrangements to support your personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Opportunities Section (Replacing Benefits) */}
      <section className="py-16 px-6 md:px-10 lg:px-20 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Global Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As part of the Oracle RMS family, we offer opportunities to work with clients and partners across Canada.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center">
                <Globe className="h-32 w-32 text-blue-600" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Expand Your Horizons</h3>
                <p className="text-gray-700 mb-4">
                  At Rocket Insurance, a division of Oracle RMS, you'll have the opportunity to work with a diverse
                  client base and connect with industry professionals across the country. Our team members benefit from:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <span className="text-gray-700">Access to a wide network of insurance providers and partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <span className="text-gray-700">Opportunities to specialize in various insurance sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <span className="text-gray-700">
                      Collaboration with experienced professionals across the organization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <span className="text-gray-700">Exposure to innovative insurance technologies and practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("readyToJoin")}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">{t("takeNextStep")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              onClick={() => setResumeDialogOpen(true)}
            >
              <span>{t("sendYourResume")}</span>
              <Upload className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-300 bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              asChild
            >
              <a href="https://www.linkedin.com/jobs/view/4182624754" target="_blank" rel="noopener noreferrer">
                <span>{t("viewOnLinkedIn")}</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center gap-3">
              <Rocket className="text-white" size={28} />
              <h3 className="text-xl font-bold">Rocket Insurance</h3>
            </Link>
          </div>
          <p className="text-blue-300 text-sm text-center">
            © {new Date().getFullYear()} Rocket Insurance. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm text-center mt-1">Rocket Insurance is proudly a division of Oracle RMS</p>
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

      {/* Resume Dialog */}
      <Dialog open={resumeDialogOpen} onOpenChange={setResumeDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-blue-800">{t("submitApplication")}</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-6 py-4"
            onSubmit={(e) => {
              e.preventDefault()
              // Form submission logic
              // Send to marroquinseguro@gmail.com
              const formData = new FormData(e.currentTarget)
              const emailSubject = `Resume Submission: ${formData.get("position")} - ${formData.get("first-name")} ${formData.get("last-name")}`

              // For demonstration purposes - in a real app, you woul  ${formData.get("last-name")}`

              // For demonstration purposes - in a real app, you would use a server action or API route
              // This would open the user's email client with the form data
              const mailtoLink = `mailto:marroquinseguro@gmail.com?subject=${encodeURIComponent(emailSubject)}`
              window.open(mailtoLink, "_blank")

              // Close the dialog after submission
              setResumeDialogOpen(false)
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="apply-first-name">{t("firstName")}</Label>
                <Input id="apply-first-name" name="first-name" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apply-last-name">{t("lastName")}</Label>
                <Input id="apply-last-name" name="last-name" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="apply-email">{t("email")}</Label>
              <Input id="apply-email" name="email" type="email" placeholder="Enter your email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apply-phone">{t("phone")}</Label>
              <Input id="apply-phone" name="phone" type="tel" placeholder="Enter your phone number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">{t("position")}</Label>
              <select
                id="position"
                name="position"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">{t("selectPosition")}</option>
                <option value="llqp">LLQP Licensed Insurance Broker</option>
                <option value="commercial">Commercial Insurance Broker</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">{t("resume")}</Label>
              <div className="border border-input rounded-md p-4 bg-background">
                <Input id="resume" name="resume" type="file" className="cursor-pointer" required />
                <p className="text-xs text-gray-500 mt-2">{t("uploadResume")}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover-letter">{t("coverLetter")}</Label>
              <Textarea id="cover-letter" name="cover-letter" placeholder={t("tellUsWhy")} className="min-h-[100px]" />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2"
              >
                <span>{t("sendApplication")}</span>
                <Upload className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

