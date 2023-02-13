import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter"
import { codeString } from "../data/codeString"
import {oneDark} from "react-syntax-highlighter/dist/cjs/styles/prism"

const DemoCode = () => {
  return (
    <>
      <div className=" p-3 bg-[#282c34] rounded-lg drop-shadow-lg">
        <div className="h-[50vh] overflow-scroll bg-[#282c34]">
          <SyntaxHighlighter language="tsx" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  )
}

export default DemoCode
