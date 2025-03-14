interface KooSectionProps {
  children: React.ReactNode,
  id?: string,
  color?: string,
}

export default function KooSection({children, id, color = "bg-slate-700" }: KooSectionProps) {
  return (
  <section id={id} className={`grid items-center justify-center min-h-screen min-w-full ${color}`}>
    <div className="grid grid-flow-row p-2 w-fit">
        {children}
    </div>
  </section> 
  )
}
