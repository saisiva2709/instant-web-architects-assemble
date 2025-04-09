
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
    <div className="min-h-screen font-poppins bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] opacity-[0.03] bg-fixed bg-center bg-no-repeat bg-cover pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(200,210,255,0.1)_0%,rgba(255,255,255,0)_60%)]"></div>
      <NavBar items={navItems} />
      <main>
        {children}
      </main>
    </div>
  )
}
