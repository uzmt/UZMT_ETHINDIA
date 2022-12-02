
export const CommonButton = ({ text, type = "type1", containerClass, onClick }:
  { text: string, type?: "type1" | "type2" | "type3", containerClass?: string, onClick?: () => void }) => {

  return <div className={`button-${type} ${containerClass}`} onClick={onClick}>
    <p>
      {text}
    </p>
  </div>
}
