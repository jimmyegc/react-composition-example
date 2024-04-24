import { useState } from 'react'
import './App.css'
import { Dialog } from './components/Dialog'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  return (
    <>
      <div className='container mx-auto'>
        <button
          onClick={handleOpen}
          type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Open Modal</button>
      </div>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <Dialog.Overlay></Dialog.Overlay>
        <Dialog.CloseButton>❌</Dialog.CloseButton>
        <Dialog.Content>
          <p>Ir al buscador Google</p>
          <a href="https://www.google.com/">Google</a>
        </Dialog.Content>
        <Dialog.Footer>

          <button
            onClick={handleClose}
            type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>


        </Dialog.Footer>
      </Dialog>
    </>
  )
}

export default App
