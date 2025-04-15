import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, BookOpen, MessageCircle, Award, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            SAFARI ENGLISH
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-purple-400 transition-colors">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
            asChild
          >
            <Link href="/signup">Sign Up Free</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
        {/* Advanced Particle System */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Static gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5"></div>

          {/* Generate 40 particles with different sizes, positions, and animations */}
          {Array.from({ length: 40 }).map((_, i) => {
            // Randomize properties for each particle
            const size = [2, 3, 4, 5, 6, 7, 8, 10, 12][i % 9] // Different sizes
            const delay = `${(i * 0.3) % 5}s` // Staggered animation start
            const duration = `${7 + (i % 8)}s` // Different durations
            const animationClass = [`animate-float-1`, `animate-float-2`, `animate-float-3`][i % 3]
            const pulseClass = i % 3 === 0 ? "animate-pulse-opacity" : ""
            const rotateClass = i % 7 === 0 ? "animate-rotate-slow" : ""

            // Different gradient combinations with varying opacity
            const gradients = [
              "bg-gradient-to-br from-purple-600/10 to-pink-500/10",
              "bg-gradient-to-r from-purple-500/8 to-pink-400/8",
              "bg-gradient-to-l from-purple-600/12 to-blue-500/12",
              "bg-gradient-to-tr from-blue-500/10 to-purple-500/10",
              "bg-gradient-to-bl from-pink-500/15 to-purple-400/15",
              "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
              "bg-gradient-to-l from-blue-400/8 to-indigo-500/8",
            ]

            const gradient = gradients[i % gradients.length]

            // Calculate position - distribute more randomly across the container
            // Use prime numbers to avoid patterns
            const top = `${(i * 7) % 100}%`
            const left = `${(i * 11) % 100}%`

            // Add different blur amounts
            const blurClass = [`blur-sm`, `blur`, `blur-md`][i % 3]

            return (
              <div
                key={i}
                className={`absolute rounded-full ${blurClass} ${gradient} ${animationClass} ${pulseClass} ${rotateClass}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top,
                  left,
                  animationDelay: delay,
                  animationDuration: duration,
                  opacity: 0.1 + (i % 7) * 0.1, // Varying opacity
                }}
              />
            )
          })}

          {/* Add a few larger, more prominent particles */}
          {[1, 2, 3, 4, 5].map((i) => {
            const size = 15 + i * 3
            const top = `${((i * 17) % 90) + 5}%`
            const left = `${((i * 19) % 90) + 5}%`
            const animationClass = [`animate-float-1`, `animate-float-2`, `animate-float-3`][i % 3]

            return (
              <div
                key={`large-${i}`}
                className={`absolute rounded-full blur-md bg-gradient-to-r from-purple-500/20 to-pink-400/20 ${animationClass} animate-pulse-opacity`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top,
                  left,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${10 + i}s`,
                }}
              />
            )
          })}
        </div>

        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Learn English
            </span>{" "}
            in a Fun & Interactive Way
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Safari English makes learning English an adventure. Engage with interactive lessons, real-time feedback, and
            personalized learning paths designed for all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-lg py-6 px-8"
              asChild
            >
              <Link href="/signup">Start Learning Now</Link>
            </Button>
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900 text-lg py-6 px-8">
              Take a Tour
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 border-2 border-black"
                />
              ))}
            </div>
            <p className="text-gray-300">
              <span className="text-white font-bold">5,000+</span> students already learning
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-black rounded-2xl overflow-hidden">
            <Image
              src="/images/students-learning.png"
              alt="Students learning English online with Safari English"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black/50 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Why Choose Safari English?
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Our platform combines cutting-edge technology with proven language learning methods to make your English
              learning journey effective and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Headphones className="w-10 h-10 text-purple-400" />,
                title: "Interactive Audio",
                description: "Practice pronunciation with our AI-powered speech recognition system.",
              },
              {
                icon: <BookOpen className="w-10 h-10 text-purple-400" />,
                title: "Comprehensive Curriculum",
                description: "From basics to advanced, our lessons cover all aspects of English learning.",
              },
              {
                icon: <MessageCircle className="w-10 h-10 text-purple-400" />,
                title: "Live Conversations",
                description: "Practice with native speakers or our AI conversation partners.",
              },
              {
                icon: <Award className="w-10 h-10 text-purple-400" />,
                title: "Achievement System",
                description: "Earn badges and track your progress to stay motivated.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-900/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="bg-purple-900/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                How Safari English Works
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Our simple 3-step process will have you speaking English confidently in no time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Sign Up & Assessment",
                description: "Create your account and take our placement test to determine your current level.",
              },
              {
                number: "02",
                title: "Personalized Learning Path",
                description: "Receive a customized curriculum based on your goals and current proficiency.",
              },
              {
                number: "03",
                title: "Learn & Practice",
                description: "Engage with interactive lessons, practice with AI, and track your progress.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-900/50 h-full">
                  <div className="text-5xl font-bold opacity-20 mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Choose Your Learning Plan
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Flexible plans designed to fit your learning goals and budget. All plans include access to our core
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-gray-400 ml-2">/ month</span>
                </div>
                <p className="text-gray-400 mb-6">Perfect for beginners starting their English journey.</p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to 50+ basic lessons</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic vocabulary exercises</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-start text-gray-500">
                    <svg
                      className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Live tutor sessions</span>
                  </li>
                  <li className="flex items-start text-gray-500">
                    <svg
                      className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Pronunciation feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-900/50 rounded-xl border border-purple-500 overflow-hidden relative transform scale-105 shadow-lg shadow-purple-500/20">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-400 text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-gray-400 ml-2">/ month</span>
                </div>
                <p className="text-gray-400 mb-6">Ideal for intermediate learners looking to improve quickly.</p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to 200+ lessons</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced vocabulary builder</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed progress analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 live tutor sessions/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI pronunciation feedback</span>
                  </li>
                  <li className="flex items-start text-gray-500">
                    <svg
                      className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Business English modules</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$39.99</span>
                  <span className="text-gray-400 ml-2">/ month</span>
                </div>
                <p className="text-gray-400 mb-6">Complete solution for serious language learners.</p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited access to all lessons</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive vocabulary system</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited live tutor sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time pronunciation feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Business English specialization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              All plans include a 7-day free trial. No credit card required to start.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-900/50 rounded-lg p-2 border border-gray-800">
              <span className="text-sm px-3 py-1 rounded-md bg-purple-900/50 text-purple-300">Monthly</span>
              <span className="text-sm px-3 py-1 rounded-md text-gray-400 hover:bg-gray-800 cursor-pointer">
                Annual (Save 20%)
              </span>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-gray-900/30 rounded-xl p-6 border border-purple-900/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-purple-900/20 p-4 rounded-full">
                <svg className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-gray-400">
                  Looking for a custom solution for your organization or school? We offer special rates and custom
                  features for teams.
                </p>
              </div>
              <Button variant="outline" className="whitespace-nowrap border-purple-500 text-white hover:bg-purple-900">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Start Your English Learning Journey Today
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Join thousands of students worldwide who are already improving their English skills with Safari English.
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-lg py-6 px-10"
            asChild
          >
            <Link href="/signup">Get Started for Free</Link>
          </Button>
          <p className="text-gray-400 mt-4">No credit card required. 7-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
                SAFARI ENGLISH
              </h3>
              <p className="text-gray-400">
                Making English learning accessible, fun, and effective for learners of all ages.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Safari English. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

