
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Process', url: '#process', icon: FileText },
    { name: 'About', url: '#why-choose-us', icon: User },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] opacity-[0.03] bg-no-repeat bg-cover pointer-events-none"></div>
      <NavBar items={navItems} />
      <main>
        {children}
      </main>
    </div>
  )
}
