import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Listado de productos
  const productos = [
    { id: 1, nombre: 'Crash Bandicoot', precio: 50000 },
    { id: 2, nombre: 'Majoras Mask', precio: 12000 },
    { id: 3, nombre: 'Lego Batman', precio: 40000 },
    { id: 4, nombre: 'Eden Souls', precio: 25000 },
    { id: 5, nombre: 'Valorant', precio: 18000 },
  ];


  // Función para agregar un producto al carrito o incrementar su cantidad
  const agregarAlCarrito = (producto) => {
    // Buscamos si el producto ya existe en el carrito por su id
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      // Si ya existe, actualizamos la cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 } // Incrementamos la cantidad
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si no existe, lo agregamos al carrito con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };
  

  // Almacenar el total de los productos (precio * cantidad)
  const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);

  return (
    <div className='container py-4'>
      <h1 className='mb-4 text-center'>Carrito de Compras</h1>

      {/* Lista de productos disponibles */}
      <h4>Productos Disponibles</h4>
      <div className='row'>
        {productos.map((p) => (
          <div key={p.id} className='col-md-4 mb-3'>
            <div className='card h-100'>
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{p.nombre}</h5>
                <p className='card-text'>${p.precio.toLocaleString()}</p>
                <button onClick={() => agregarAlCarrito(p)} className='btn btn-primary mt-auto'>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección del Carrito */}
      <h4 className='mt-4'>Sección del Carrito</h4>

      {carrito.length === 0 ? (
        <p className='text-muted'>Tu carrito está vacío</p>
      ) : (
        <ul className='list-group mb-3'>
          {carrito.map((item, index) => (
            <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
              {/* --- MEJORA B --- */}
              {/* Mostramos el nombre del producto y su cantidad */}
              {item.nombre} <span className="badge bg-secondary rounded-pill">x{item.cantidad}</span>
              
              <div>
                <span className='me-3'>${item.precio.toLocaleString()}</span>
                <button className='btn btn-danger btn-sm' onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      {/* Solo mostramos el total si hay productos en el carrito */}
      {carrito.length > 0 && (
         <div className='alert alert-info'>
            Total: <strong>${total.toLocaleString()}</strong>
         </div>
      )}

    </div>
  );
};

export default App;

