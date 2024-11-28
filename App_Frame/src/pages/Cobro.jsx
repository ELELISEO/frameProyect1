/*import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import { Bill } from '../components/bill/Bill'
import Coin from '../components/coin/Coin'
import { IoReturnUpBackOutline } from "react-icons/io5";//REGRESAR
import { MdDone } from "react-icons/md"; //FINALIZAR
import { useNavigate } from 'react-router-dom';


export default function Cobro() {
  let billetes1 = ['/billete20.jpeg', '/billete50.jpeg', '/billete100.jpeg'] //Arreglo Billetes
  let billetes2 = ['/billete200.jpeg', '/billete500.jpeg', '/billete10000.jpeg']
  const navigate = useNavigate()

  const handleCancelar = () => {
    navigate("/PageI")
  }

  let monedas = ['/moneda50c.jpeg', '/moneda1.jpeg', '/moneda2.jpeg', '/moneda5.jpeg', '/moneda10.jpeg',] //Arreglo Monedas

  return (
    <>
      <main className='h-screen w-screen'>
        <section className='h-full w-full flex'>
          <div className='bg-white h-full w-1/2 flex flex-col justify-between border-r-color6 border-r-2'> {/*DIV IZQUIERDA}
            <div className='h-1/2 w-[48rem] flex mt-3'>
              <SendSpace /> {/*TABLA COMOPONENTE}
            </div>

            <div className='h-auto w-full flex flex-col'> {/*DIV MAYOR
              <div className='flex'>
                <div className='bg-white h-12 w-96 text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2'> {/*DIV  TOTAL}
                  TOTAL:$ 
                </div>
                <div className='bg-white h-12 w-96  text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2 border-l-2'> {/*DIV COBRO}
                  $<input placeholder='COBRO' className='outline-none text-color1 pl-1'/>
                </div>
              </div>
              <div>

                <div className='bg-white h-12 w-full text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2'> {/*DIV CAMBIO}
                  CAMBIO:$ 
                </div>
              </div>

            </div>

          </div>




          <div className='bg-white flex flex-col h-full w-1/2'> {/*DERECHA}
            <div className='flex-col'> {/*MAYBEEEE/}
              <div className='flex my-2 mx-1 mt-6 gap-9 justify-center'> {/*DIV BILLETES}
                <div>
                  {billetes1.map((src, index) => (<Bill key={index} src={src} index={index} />))}
                  {/*Llenas arreglo con propiedades billete e index con la funcion arrow de Bill asisgnando sus propiedadess de bill asi misma}
                </div>
                <div>
                  {billetes2.map((src, index) => (<Bill key={index} src={src} index={index} />))}
                </div>
              </div>
              <div className='flex justify-center items-center mt-12 mb-12 ml-14 mr-9 gap-1'> {/*DIV MONEDAS}
                {monedas.map((src, index) => (<Coin key={index} src={src} index={index} />))}

              </div>
            </div>
            <div>
              <div className='flex justify-center gap-36 items-center p-0 text-white font-bold text-lg'> {/*DIV BOTONES}
                <button onClick={handleCancelar} className='flex h-[3rem] w-[11rem] justify-center items-center bg-color9 p-6 gap-4'> {/*BOTON REGRESAR}
                  <IoReturnUpBackOutline /> {/*ICONO RETURN}
                  REGRESAR
                </button>
                <button className='flex h-[3rem] w-[11rem] justify-center items-center bg-color10 p-6 gap-4'> {/*BOTON FINALIZAR}
                  <MdDone /> {/*ICONO FLECHITA}
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
*/
import React, { useEffect, useState } from 'react';
import SendSpace from '../components/sendSpace/SendSpace';
import Bill from '../components/bill/Bill';
import Coin from '../components/coin/Coin';
import { IoReturnUpBackOutline } from "react-icons/io5"; //REGRESAR
import { MdDone } from "react-icons/md"; //FINALIZAR
import { useNavigate } from 'react-router-dom';

const Cobro = () => {
  const [cobro, setCobro] = useState("");
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [cambio, setCambio] = useState(0); 

  const getProductos = async () => {
    const response = await fetch('http://localhost:5000/carrito/');
    const data = await response.json();
    console.log(data);
    
    if (data.status === 200) {
      return data.mensaje;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const totalSum = productos.reduce((sum, producto) => sum + producto.precio, 0);
    setTotal(parseFloat(totalSum.toFixed(2)));
  }, [productos]);

  useEffect(() => {
    const cobroNumber = parseFloat(cobro) || 0;  
    const nuevoCambio = cobroNumber - total;
    setCambio(nuevoCambio >= 0 ? parseFloat(nuevoCambio.toFixed(2)) : 0); 
  }, [cobro, total]);

  const handleBilleteClick = (valor) => {
    setCobro((prevCobro) => (parseFloat(prevCobro) || 0) + valor); 
  };
  
  const handleMonedaClick = (valor) => {
    setCobro((prevCobro) => (parseFloat(prevCobro) || 0) + valor); 
  };
  
  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value); 
    if (!isNaN(value)) {
      setCobro(value); 
    }
  };

  let billetes1 = [
    { src: '/billete20.jpeg', valor: 20 },
    { src: '/billete50.jpeg', valor: 50 },
    { src: '/billete100.jpeg', valor: 100 }
  ]; 
  let billetes2 = [
    { src: '/billete200.jpeg', valor: 200 },
    { src: '/billete500.jpeg', valor: 500 },
    { src: '/billete10000.jpeg', valor: 10000 }
  ]; 
  const navigate = useNavigate();
  const handleCancelar = () => {
    navigate("/PageI");
  };

  let monedas = [
    { src: '/moneda50c.jpeg', valor: 0.50 },
    { src: '/moneda1.jpeg', valor: 1 },
    { src: '/moneda2.jpeg', valor: 2 },
    { src: '/moneda5.jpeg', valor: 5 },
    { src: '/moneda10.jpeg', valor: 10 }
  ]; 

  const insertarCarrito = async () => {
    try {
      const response = await fetch('http://localhost:5000/cobro/insertar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({ id: productos.id, producto: productos.producto, stock : 1,
         venta : productos.cantidad, almacen: productos.cantidad, total : productos.subtotal})})
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.mensaje); // "Datos insertados correctamente"
      } else {
        console.error('Error:', data.mensaje);
      }
    } catch (error) {
      console.error('Error al insertar el carrito:', error);
    }
  };
  
  insertarCarrito();
  

  return (
    <main className="h-screen w-screen">
      <section className="h-full w-full flex">
        {/* Div Izquierda */}
        <div className="bg-white h-full w-1/2 flex flex-col justify-between border-r-color6 border-r-2">
          <div className="h-1/2 w-[48rem] flex mt-3">
            <SendSpace /> {/* Componente de la tabla */}
          </div>

          <div className="h-auto w-full flex flex-col">
            <div className="flex">
              <div className="bg-white h-12 w-96 text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2">
                TOTAL: ${total}
              </div>
              <div className="bg-white h-12 w-96 text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2 border-l-2">
                $<input placeholder="COBRO" onChange={handleInputChange} value={cobro} className="outline-none text-color1 pl-1" />
              </div>
            </div>
            <div>
              <div className="bg-white h-12 w-full text-color1 text-left font-bold pl-8 text-xl flex items-center border-color6 border-t-2">
                CAMBIO: ${cambio}
              </div>
            </div>
          </div>
        </div>

        {/* Div Derecha */}
        <div className="bg-white flex flex-col h-full w-1/2">
          <div className="flex-col">
            <div className="flex my-2 mx-1 mt-6 gap-9 justify-center">
              <div>
                {billetes1.map((billete, index) => (
                  <Bill key={index} src={billete.src} valor={billete.valor} onClick={handleBilleteClick} />
                ))}
              </div>
              <div>
                {billetes2.map((billete, index) => (
                  <Bill key={index} src={billete.src} valor={billete.valor} onClick={handleBilleteClick} />
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 mb-12 ml-14 mr-9 gap-1">
              {monedas.map((moneda, index) => (
                <Coin key={index} src={moneda.src} valor={moneda.valor} onClick={handleMonedaClick} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-center gap-36 items-center p-0 text-white font-bold text-lg">
              <button onClick={handleCancelar} className="flex h-[3rem] w-[11rem] justify-center items-center bg-color9 p-6 gap-4">
                <IoReturnUpBackOutline />
                REGRESAR
              </button>
              <button onClick={insertarCarrito} className="flex h-[3rem] w-[11rem] justify-center items-center bg-color10 p-6 gap-4">
                <MdDone />
                FINALIZAR
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cobro
