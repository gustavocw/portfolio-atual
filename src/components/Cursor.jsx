import React from "react"
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={12}
        outerSize={10}
        color='150, 0, 0'
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  )
}

export default Cursor
