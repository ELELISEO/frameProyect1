import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import { Bill } from '../components/bill/Bill'
import Coin from '../components/coin/Coin'
import { IoReturnUpBackOutline } from "react-icons/io5";//REGRESAR
import { MdDone } from "react-icons/md"; //FINALIZAR


export default function Cobro() {
  let billetes1 = ['/billete20.jpeg','/billete50.jpeg','/billete100.jpeg'] //Arreglo Billetes
  let billetes2 = ['/billete200.jpeg','/billete500.jpeg','/billete10000.jpeg']

  let monedas = ['/moneda50c.jpeg','/moneda1.jpeg','/moneda2.jpeg','/moneda5.jpeg','/moneda10.jpeg',] //Arreglo Monedas

  return (
    <>
    <main className='h-screen w-screen'>
        <section className='h-full w-full flex'>
            <div className='bg-white h-full w-1/2 flex flex-col justify-between border-r-color6 border-r-2'> {/*DIV IZQUIERDA*/}
              <div className='h-1/2 w-[48rem] flex mt-3'>
              <SendSpace /> {/*TABLA COMOPONENTE*/}
              </div>

              <div className='h-20 w-full flex flex-col border-color6 border'> {/*DIV MAYOR*/}
              <div className='flex'>
              <div className='bg-white h-12 w-96 text-color1 text-left font-bold pl-8 text-xl border-color6 border'> {/*DIV  TOTAL*/}
                TOTAL 
              </div>
              <div className='bg-white h-12 w-96  text-color1 text-left font-bold pl-8 text-xl border-color6 border'> {/*DIV COBRO*/}
                COBRO
              </div>
              </div>
              <div>

              <div className='bg-white h-12 w-full text-color1 text-left font-bold pl-8 text-xl border-color6 border'> {/*DIV CAMBIO*/}
                CAMBIO
              </div>
              </div>
            
              </div>

            </div>

            
          

          <div className='bg-white flex flex-col h-full w-1/2'> {/*DERECHA*/}
          <div className='flex-col'> {/*MAYBEEEE*/}
          <div className='flex my-2 mx-1 mt-6 gap-9 justify-center'> {/*DIV BILLETES*/}
            <div>
          {billetes1.map((src,index) => (<Bill key={index} src={src} index={index}/>))} 
          {/*Llenas arreglo con propiedades billete e index con la funcion arrow de Bill asisgnando sus propiedadess de bill asi misma*/}
          </div>
          <div>
          {billetes2.map((src,index) => (<Bill key={index} src={src} index={index}/>))}
          </div>
          </div>
          <div className='flex justify-center items-center mt-11 mb-14 ml-14 mr-9 gap-1'> {/*DIV MONEDAS*/}
            {monedas.map((src,index) => (<Coin key={index} src={src} index={index}/>))}

          </div>
          </div>
          <div>
          <div className='flex justify-center gap-36 items-center mt-11 p-0 text-white font-bold text-lg'> {/*DIV BOTONES*/}
          <button className='flex h-[3rem] w-[11rem] justify-center items-center bg-color9 p-6 gap-4'> {/*BOTON REGRESAR*/}
          <IoReturnUpBackOutline /> {/*ICONO RETURN*/}
            REGRESAR
            </button>
          <button className='flex h-[3rem] w-[11rem] justify-center items-center bg-color10 p-6 gap-4'> {/*BOTON FINALIZAR*/}
          <MdDone /> {/*ICONO FLECHITA*/}
            FINALIZAR
          </button>
          </div>
          </div>

          </div>

        </section>

    </main>
    </>
  )
}
