type HtmlParserNode = {
    attribs: { [ name: string ]: string }
    name: string
    type: string
  }
  
  declare module "react-html-parser" {
    type NodeTransformer = (node: HtmlParserNode, index: number) => undefined | React.ReactElement<any>
  
    interface ParserOptions { transform: NodeTransformer }
    type Parser = (html: string, options?: ParserOptions) => ReactNode[]
    const parser: Parser
  
    export default parser
  }