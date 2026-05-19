
 type ButtonProps = {
  title: string,
  background?: "bg-primary" | "bg-background",
  color?: string,
  border?: string,
  action?: () => void
}

const Button = ({title, background = "bg-primary", border, color = "text-white", action } : ButtonProps ) => {
  return (
    <button onClick={action} className={`${background} ${color} ${border} px-6 py-3 rounded-lg text-sm cursor-pointer hover:scale-[1.03] transition-transform duration-300`}>
      {title}
    </button>
  )
}

export default Button