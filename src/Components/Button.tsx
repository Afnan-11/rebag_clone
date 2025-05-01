type buttonProps = {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    handleClick ? : () => void; 
}
const Button = ({className, text, size = 'md', handleClick}: buttonProps) => {
  return (
    <button className={` text-black bg-white py-5 px-[50px] ${className} font-${size}`} onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button
