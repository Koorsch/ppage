import React from "react"

interface KooButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  withIcon?: boolean,
  icon?: React.ReactNode,
  href?: string,
  moreStyling?: string,
  type?: "button" | "submit" | "reset";
}

export default function KooButton ({children, withIcon, icon, href, moreStyling, type}: KooButtonProps) {
  const baseClass = "inline-flex h-fit items-center gap-x-2 px-4 py-2 bg-slate-800 rounded-lg shadow-lg border-slate-400 border hover:shadow-xl hover:bg-slate-600 hover:border-slate-300 cursor-pointer";
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${withIcon && "gap-x-2"} ${moreStyling}`}>
        {withIcon && icon}
        {children}
        </a>
    )
  }
  return (
    <button type={type} className={`${baseClass} ${withIcon && "gap-x-2"} ${moreStyling}`}>
      {withIcon && icon}
      {children}
      </button>
  )
}