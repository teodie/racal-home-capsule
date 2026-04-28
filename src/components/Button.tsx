
 type ButtonProps = {
  title: string,
  background?: "bg-primary" | "bg-background",
  color?: string,
  border?: string
}

const Button = ({title, background = "bg-primary", border, color = "text-white" } : ButtonProps ) => {
  return (
    <button className={`${background} ${color} ${border} px-6 py-3 rounded-lg text-xl cursor-pointer hover:scale-[1.03] transition-transform duration-300`}>
      {title}
    </button>
  )
}

export default Button