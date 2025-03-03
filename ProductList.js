 import React, { useState } from &#39;react&#39;;
// Componente para mostrar un producto individual
const Product = ({ name, price }) =&gt; {
return (
&lt;div className=&quot;product&quot;&gt;
&lt;h3&gt;{name}&lt;/h3&gt;
&lt;p&gt;Precio: ${price}&lt;/p&gt;
&lt;/div&gt;
);
};
// Componente principal para mostrar la lista de productos
const ProductList = () =&gt; {
const [products] = useState([
{ id: 1, name: &#39;Producto A&#39;, price: 10.99 },
{ id: 2, name: &#39;Producto B&#39;, price: 20.99 },
{ id: 3, name: &#39;Producto C&#39;, price: 30.99 },
{ id: 4, name: &#39;Producto D&#39;, price: 40.99 },
]);
return (
&lt;div className=&quot;product-list&quot;&gt;
&lt;h2&gt;Lista de Productos&lt;/h2&gt;
{products.map((product) =&gt; (
&lt;Product key={product.id} name={product.name} price={product.price} /&gt;
))}
&lt;/div&gt;
);
};
export default ProductList;
