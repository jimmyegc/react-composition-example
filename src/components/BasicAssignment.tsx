import { Children, createContext, ReactNode, useContext } from "react"

export const BasicAssignment = ({ children, className }) => {

  const title = Children.toArray(children).find((child: any) => child.type === Title)
  const form = Children.toArray(children).find((child: any) => child.type === Form)

  return (
    <>
      <div className={className}>
        {title}
        {form}
        {/* {children} */}
      </div>
    </>
  )

}


const Title = ({ children, className }) => {
  return <div className={className}>
    {children}
  </div>
}

const Form = ({ children, className }) => {
  return <div className={className}>
    {children}
  </div>
}


BasicAssignment.Title = Title
BasicAssignment.Form = Form