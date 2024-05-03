import { useState } from 'react'
import './App.css'
import { Dialog } from './components/Dialog'
import { BasicAssignment } from './components/BasicAssignment'

function App() {

  const [isOpen, setIsOpen] = useState(true)

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
          <BasicAssignment className="bg-red-50 w-[400px]">
            <BasicAssignment.Title className="bg-slate-50 text-3xl">
              <div className='flex'>
                <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  className="w-6 h-6 m-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <p>
                  Áreas</p>
              </div>
              <hr />
            </BasicAssignment.Title>
            <BasicAssignment.Form className="bg-stone-50">
              <div>
                <label htmlFor="">Nombre:</label>
                <select
                  className='w-[200px] border-blue-500 border-2 rounded'
                >Select
                  <option>Closer</option>
                  <option>Liner</option>
                </select>
                <button className='rounded bg-green-500 text-lg text-white m-1 px-4 py-2'>+</button>
              </div>
            </BasicAssignment.Form>



            <table>
              <tr>
                <th>
                  <input type="checkbox" />
                  All</th>
                <th>Name</th>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Griffin</td>

              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Swanson</td>

              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Brown</td>
              </tr>
            </table>
          </BasicAssignment>
        </Dialog.Content>
        <Dialog.Footer>
          {/*  <button
            onClick={handleClose}
            type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
 */}        </Dialog.Footer>
      </Dialog >



      {/* <Dialog isOpen={isOpen} onClose={handleClose}>
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
      </Dialog> */}
    </>
  )
}

export default App
