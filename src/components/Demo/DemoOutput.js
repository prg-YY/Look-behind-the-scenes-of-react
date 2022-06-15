import React from "react"
import MyP from "./MyP"

const DemoOutput = (props) => {
  console.log("DemoOutput runnig")
  return <MyP>{props.show ? "This is new" : ""}</MyP>
}

export default React.memo(DemoOutput)
