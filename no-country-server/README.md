# NFTs-Market-Place-Server

No Country Final Project.

Introducción.

NFTs Market Place, es un espacio para que los usuario puedan comprar y vender NFTs. Pudiendo crear una cuenta de usuario que les permita la compra y la venta de los activos digitales.

1.El usuario

1.1 Creando un usuario (register)
Usted podrá crear un usuario para la compra y venta de NFTs, pero esto no limita su acceso a ver los NFTs disponibles y las categorías que albergan estos mismos.
Para la creación del usuario, será necesario enviar por el body, un json con la los siguientes campos del modelo user: {username, email, password}

1.2 Token de sesión activa (login)
Una vez que haya creado su usuario, deberá registrarse y pasarle al body {email y password} para que le se otorgado un token único y poder navegar mientras no haya expirado dicho token. Este token deberá ser colocado en Authorization y buscar el tipo de token "BEARER" después colocarlo en el input correspondiente. \*nota: cada que inicie sesión con otro usuario o haya caducado el token deberá repetir dicho paso.

1.3 Actualizar y eliminar mi cuenta (patch)
Unicamente este acción podrá ser llevada a cabo con un usuario existente. Para eso vamos a mandar por el body ( en el caso de actualizar ) los campos a actualizar, y por el params, ósea por la url o endpoint ,el id propio del usuario. ejemplo: http://localhost:4020/api/v1/users/1, y no enviar nada por ningún canal, solamente enviar la petición delete. Para este último solamente deberá arrojar un 204 y un status exitoso.

1.4 traer mis tickets o ordenes de compra
Para esta acción se deberá primero hacer una compra de un carrito de NFTs. De lo contrario, deberá aparecer el error 404 de que aún no tienes compras.

2.NFTs

2.1 creando un NFT
Para esta acción primero se deben de crear las categorías. Una vez creadas las categoría entonces de debe pasar todos los valores a través de form-data únicamente, ya que también se mandan imágenes y form-data es el único que las puede cagar a través de streaming. Para subir la imagen a los valores, se deberá hacer hover en el input de Key y seleccionar tipo file y en value de este, se deberá cargar la imagen desde nuestro computador. Los valores que deberán ser pasados son: title, description, price, categoryId, quantiy, nftImg (la o las imágenes, se podrán como máximo 5)

2.2 ver todos o uno de los NFTs y Categorías
Como ya se ha mencionado, ver uno o todos los NFTs no se requerirá tener una sesión iniciada y activa. Simplemente mandando la petición get o introduciendo él id al final de la url colocada (ejemplo: "/1") que son los params, nos servirá para traer con éxito nuestra petición.

2.3 actualizar o eliminar NFT
Para esta acción únicamente el dueño del NFT creado podrá realizar dichas acciones. Para llevar acabo las mismas, se deberá segur los mismos pasas que para los de usuario.

2.4 categorias
las categorías solamente se les debe enviar un valor por el body en un json, {name}

2.5 actualizar o eliminar categorías
De la misma forma que para usuarios y NFTs, se deberá tener una sesión activa y solo el dueño de la misma podrá hacer dichas acciones.

3.El carrito

3.1 subiendo productos al carrito
Para subir un producto al carrito, se deberá pasar por el body en un json, el
{nftId, quantity}. Si ya esta el producto, no se podrá volver a subir.

3.2 actualizando y eliminando del carrito
Para esta acción será necesario enviar por él body un json con la cantidad a actualizar únicamente {quantity}. En el caso de eliminar del carrito, no se deberá enviar nada, solo enviar la petición con él id dinámico en la url al final.

3.3 comprando el carrito
para comprar el carrito solamente se deberá enviar la petición post y nada mas. El mensaje de regreso es un status exitoso. Después de esta acción ya se podrán visualizar las ordenes o tickets del usuario.
