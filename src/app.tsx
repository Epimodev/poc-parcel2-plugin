import React from "react"
import { render } from "react-dom"
import { Icon } from "./components/Icon"
import arrowIcon from "./icons/arrow.svg"
import checkmarkIcon from "./icons/checkmark.svg"

const appContainer = document.getElementById("app")

const Application: React.FC = () => {
  console.log(arrowIcon)
  return (
    <div>
      <Icon href={arrowIcon} />
      <Icon href={checkmarkIcon} />
    </div>
  )
}

if (appContainer) {
  render(<Application />, appContainer)
}
