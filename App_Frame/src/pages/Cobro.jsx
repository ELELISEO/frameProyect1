import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'

export default function Cobro() {
  return (
    <>
    <main className='h-screen w-screen'>
        <section className='h-full w-full flex'>
          <div className='bg-blue-800 h-full w-1/2 flex px-3'> {/*IZQUIERDA*/}
          <SendSpace />


          </div>

          <div className='bg-purple-500 h-full w-1/2'> {/*DERECHA*/}

          </div>

        </section>

    </main>
    </>
  )
}
