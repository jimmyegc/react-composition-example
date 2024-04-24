import { Children, createContext, ReactNode, useContext } from "react"

const dialogContext = createContext<Record<string, any>>({})

type DialogProps = {
  isOpen: boolean
  onClose?: () => void
  children: ReactNode
}
export const Dialog = ({ children, isOpen, onClose }: DialogProps) => {

  const overlay = Children.toArray(children).find((child: any) => child.type === Overlay)
  const content = Children.toArray(children).find((child: any) => child.type === Content)
  const closeButton = Children.toArray(children).find((child: any) => child.type === CloseButton)
  const footer = Children.toArray(children).find((child: any) => child.type === Footer)

  if (!isOpen) return null
  return (
    <dialogContext.Provider value={{ onClose }}>
      <div className="absolute w-full min-h-screen top-0 left-0 flex items-center justify-center">
        {overlay}
        <div className="bg-white text-black p-4 rounded-md relative">
          {closeButton}
          {content}
          <div className="border-t border-t-slate-200 pt-4 ml-auto">
            {footer}
          </div>
        </div>
      </div>
    </dialogContext.Provider>
  )
}

const Overlay = () => {
  return <div className="absolute top-0 left-0 w-full min-h-screen bg-slate-500 opacity-50"></div>
}
type CloseButtonProps = {
  children?: ReactNode
}
const CloseButton = ({ children }: CloseButtonProps) => {

  const { onClose } = useContext(dialogContext)

  return (<button
    onClick={onClose} className="absolute top-2 right-2">
    {children || <span>&#10005;</span>}
  </button>)
}

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  return <>{children}</>
}

type FooterProps = {
  children?: ReactNode
}
const Footer = ({ children }: FooterProps) => {
  const { onClose } = useContext(dialogContext)

  return <>
    {children ? children : <button
      onClick={onClose}
      className="bg-blue-500 text-white px-4 py-2 rounded-md ml-auto block">Cerrar</button>}

  </>
}

Dialog.Overlay = Overlay
Dialog.CloseButton = CloseButton
Dialog.Content = Content
Dialog.Footer = Footer 