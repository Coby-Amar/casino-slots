const CloseIcon = ({ width = 25, height = 25, onClick }: CloseIconProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 100 100" width={width} height={height} onClick={onClick} className="cursor-pointer" >
        <circle cx={50} cy={50} r={45} fill="transparent" stroke="black" strokeWidth="5" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="black" strokeWidth="5" strokeLinecap="round" />
        <line x1="75" y1="25" x2="25" y2="75" stroke="black" strokeWidth="5" strokeLinecap="round" />
    </svg>
)
export default CloseIcon