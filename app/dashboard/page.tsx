"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Home,
  Calendar,
  MessageCircle,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  BookOpen,
  Headphones,
  Mic,
  Clock,
  TrendingUp,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/50 border-r border-gray-800 hidden md:block">
        <div className="p-4 flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
            SE
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            SAFARI ENGLISH
          </span>
        </div>

        <nav className="mt-6 px-2">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-purple-900/30 text-purple-300"
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
              >
                <BookOpen size={20} />
                <span>My Lessons</span>
              </Link>
            </li>
            <li>
              <Link
                href="/practice"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
              >
                <Headphones size={20} />
                <span>Practice</span>
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
              >
                <Calendar size={20} />
                <span>Schedule</span>
              </Link>
            </li>
            <li>
              <Link
                href="/chat"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
              >
                <MessageCircle size={20} />
                <span>Chat</span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-800">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
                >
                  <HelpCircle size={20} />
                  <span>Help</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => router.push("/")}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-900/30 border-b border-gray-800 p-4 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search lessons, vocabulary..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 w-full"
            />
          </div>
          <Button className="ml-4 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500">
            Start Tutorial
          </Button>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          {/* Profile Section */}
          <div className="bg-gray-900/30 rounded-xl p-6 mb-8 flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center text-3xl font-bold relative">
              JD
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Jane Doe</h2>
              <p className="text-gray-400 mt-1 mb-3">
                English learner since 2024. Currently at Intermediate level (B1). I love practicing conversation and
                expanding my vocabulary. My goal is to become fluent by the end of the year!
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-purple-900/50 text-purple-300 px-2 py-1 rounded">@JaneDoe</span>
              </div>
            </div>
            <div>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900">
                Add social link
              </Button>
            </div>
          </div>

          {/* Learning Stats */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Learning Stats</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">42</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Completed Lessons</span>
              </div>

              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">18</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="45, 100"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Practice Sessions</span>
              </div>

              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">87</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="87, 100"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Vocabulary Words</span>
              </div>

              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">12</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="30, 100"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Speaking Hours</span>
              </div>

              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">8</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="20, 100"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Achievements</span>
              </div>
            </div>
          </div>

          {/* Current Courses */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Courses</h2>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900">
                View all courses
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Business English",
                  progress: 75,
                  icon: <TrendingUp className="text-purple-400" />,
                  level: "Intermediate",
                },
                {
                  title: "Everyday Conversation",
                  progress: 45,
                  icon: <MessageCircle className="text-purple-400" />,
                  level: "Intermediate",
                },
                {
                  title: "Pronunciation Practice",
                  progress: 30,
                  icon: <Mic className="text-purple-400" />,
                  level: "Beginner",
                },
                {
                  title: "Grammar Essentials",
                  progress: 60,
                  icon: <BookOpen className="text-purple-400" />,
                  level: "Advanced",
                },
              ].map((course, index) => (
                <div key={index} className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-900/20 w-10 h-10 rounded-lg flex items-center justify-center">
                      {course.icon}
                    </div>
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">{course.level}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-purple-300">{course.progress}%</span>
                    </div>
                    <Progress
                      value={course.progress}
                      className="h-2 bg-gray-800"
                      indicatorClassName="bg-gradient-to-r from-purple-600 to-purple-400"
                    />
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-purple-500 text-white hover:bg-purple-900">
                    Continue
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upcoming Sessions</h2>
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900">
                View all sessions
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Conversation Practice",
                  time: "Today, 3:00 PM",
                  tutor: "Sarah Johnson",
                  duration: "45 min",
                },
                {
                  title: "Business Vocabulary",
                  time: "Tomorrow, 10:00 AM",
                  tutor: "Michael Chen",
                  duration: "30 min",
                },
                {
                  title: "Grammar Review",
                  time: "Mar 30, 2:15 PM",
                  tutor: "Emma Wilson",
                  duration: "60 min",
                },
              ].map((session, index) => (
                <div key={index} className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold">{session.title}</h3>
                    <div className="bg-purple-900/20 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Clock className="text-purple-400" size={20} />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">Time:</span>
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">Tutor:</span>
                      <span>{session.tutor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">Duration:</span>
                      <span>{session.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1 border-purple-500 text-white hover:bg-purple-900">
                      Reschedule
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

