
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Process', url: '#process', icon: FileText },
    { name: 'About', url: '#why-choose-us', icon: User },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <NavBar items={navItems} />
      <main>
        {children}
      </main>
    </div>
  )
}
