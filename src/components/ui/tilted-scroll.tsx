
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({ 
  items = defaultItems,
  className 
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[350px] w-[330px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, x: 5, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center gap-2 cursor-pointer rounded-md border border-border/40 bg-gradient-to-b from-background/80 to-muted/80 p-5 shadow-md hover:shadow-xl dark:border-border"
            >
              <CheckCircleIcon className="h-6 w-6 mr-2 text-blue-500 transition-colors group-hover:text-blue-600" />
              <p className="text-foreground/90 transition-colors group-hover:text-foreground text-sm md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Expert team of senior developers" },
  { id: "2", text: "24/7 proactive technical support" },
  { id: "3", text: "Enterprise-grade cloud infrastructure" },
  { id: "4", text: "Advanced performance optimization" },
  { id: "5", text: "Top-tier security architecture" },
  { id: "6", text: "Responsive design across all devices" },
  { id: "7", text: "Continuous updates and maintenance" },
  { id: "8", text: "Transparent, predictable pricing" },
]
