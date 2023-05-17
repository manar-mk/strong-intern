export default function Button({text, icon, buttonStyle, textStyle}) {
  return (
    <a href="#" style={buttonStyle}>
      <span style={textStyle}>{text}</span>
      <img src={icon} alt="icon" />
    </a>
  )
}
