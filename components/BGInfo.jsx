import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const BGInfo = ({message1, message2, icon}) => {
  return (
    <div className="text-center text-gray-400 flex flex-col items-center justify-center h-full">
    <FontAwesomeIcon icon={icon} className="fa-4x" />
    <div>{message1}</div>
    <div>{message2}</div>
  </div>
  )
}

export default BGInfo