const productos = [
  { nombre: "agua 1L", precio: 1100 },
  { nombre: "agua chica", precio: 800 },
  { nombre: "amstel 710", precio: 3500 },
  { nombre: "andes 710", precio: 3800 },
  { nombre: "andes ipa", precio: 2400 },
  { nombre: "andes roja", precio: 2800 },
  { nombre: "andes rubia", precio: 2900 },
  { nombre: "antares caravana", precio: 3300 },
  { nombre: "antares honey", precio: 3500 },
  { nombre: "antares ipa", precio: 3300 },
  { nombre: "antares ipa 0%", precio: 3300 },
  { nombre: "antares kolsch", precio: 3100 },
  { nombre: "antares lager", precio: 2600 },
  { nombre: "antares playa grande", precio: 3400 },
  { nombre: "antares scotch", precio: 3500 },
  { nombre: "brahma 473", precio: 2000 },
  { nombre: "brahma porron", precio: 3800 },
  { nombre: "budweiser 710", precio: 3700 },
  { nombre: "carbón", precio: 3500 },
  { nombre: "chandon botellita", precio: 5500 },
  { nombre: "citric", precio: 3800 },
  { nombre: "coca 1.5", precio: 3900 },
  { nombre: "coca 2.25", precio: 5000 },
  { nombre: "coca lata", precio: 1400 },
  { nombre: "coca retor 2", precio: 3800 },
  { nombre: "coca vidrio", precio: 2800 },
  { nombre: "coca vidrio chiquita", precio: 1300 },
  { nombre: "coca zero", precio: 3500 },
  { nombre: "combo amargo", precio: 7900 },
  { nombre: "combo fernet 1L", precio: 30000 },
  { nombre: "combo fernet 3/4 L", precio: 23000 },
  { nombre: "combo gancia", precio: 11500 },
  { nombre: "combo gin", precio: 15500 },
  { nombre: "combo liason", precio: 45000 },
  { nombre: "combo moser", precio: 35000 },
  { nombre: "copon 1L", precio: 200 },
  { nombre: "copon 1L + hielo", precio: 1000 },
  { nombre: "copon 500", precio: 100 },
  { nombre: "copon 500 + hielo", precio: 500 },
  { nombre: "corona 0%", precio: 2900 },
  { nombre: "corona 330", precio: 3200 },
  { nombre: "corona 710", precio: 4900 },
  { nombre: "cunnington 2.25", precio: 1700 },
  { nombre: "don lino queso", precio: 9900 },
  { nombre: "don lino salame casero", precio: 9200 },
  { nombre: "don lino salame vacío", precio: 10000 },
  { nombre: "dr lemon pomelo lata", precio: 1700 },
  { nombre: "fanta 1.5", precio: 3800 },
  { nombre: "fanta retor 2", precio: 2500 },
  { nombre: "frizee pomelo", precio: 2100 },
  { nombre: "guinness", precio: 4600 },
  { nombre: "heineken 330", precio: 3500 },
  { nombre: "heineken 473", precio: 3700 },
  { nombre: "heineken 710", precio: 5500 },
  { nombre: "heineken porrón", precio: 6000 },
  { nombre: "hielo", precio: 5500 },
  { nombre: "hielera", precio: 800 },
  { nombre: "imperial golden 330", precio: 2500 },
  { nombre: "imperial golden 473", precio: 2500 },
  { nombre: "imperial golden 710", precio: 3900 },
  { nombre: "imperial ipa 473", precio: 2800 },
  { nombre: "imperial lager 473", precio: 2500 },
  { nombre: "imperial lager 710", precio: 3800 },
  { nombre: "ivess", precio: 1600 },
  { nombre: "kalber lata", precio: 4500 },
  { nombre: "miller 330", precio: 2800 },
  { nombre: "miller 710", precio: 3700 },
  { nombre: "monster común", precio: 3200 },
  { nombre: "monster mango", precio: 3500 },
  { nombre: "monster pineapple (M amarilla)", precio: 3500 },
  { nombre: "monster val Rossi (lata amarilla)", precio: 3500 },
  { nombre: "monster watermelon", precio: 3500 },
  { nombre: "monster zero green", precio: 3500 },
  { nombre: "mumm lata", precio: 2100 },
  { nombre: "paso de los toros pomelo", precio: 3400 },
  { nombre: "paso de los toros tonica", precio: 3400 },
  { nombre: "patagonia amber lager", precio: 3500 },
  { nombre: "pronto", precio: 1700 },
  { nombre: "quilmes 0%", precio: 1800 },
  { nombre: "quilmes 473", precio: 1800 },
  { nombre: "quilmes 710", precio: 3200 },
  { nombre: "quilmes stout", precio: 2200 },
  { nombre: "red bull", precio: 3300 },
  { nombre: "red bull dragon", precio: 3100 },
  { nombre: "santa diabla amber 500", precio: 4000 },
  { nombre: "santa diabla golden 500", precio: 4000 },
  { nombre: "santa diabla ipa 500", precio: 4500 },
  { nombre: "santa diabla porter 500", precio: 4500 },
  { nombre: "santa fe", precio: 2000 },
  { nombre: "santa fe porrón", precio: 3500 },
  { nombre: "schneider 710", precio: 3200 },
  { nombre: "smirnof ice", precio: 3000 },
  { nombre: "soda", precio: 1700 },
  { nombre: "speed chico", precio: 1600 },
  { nombre: "speed xl", precio: 2300 },
  { nombre: "spite lata", precio: 1400 },
  { nombre: "sprite 1.5", precio: 3900 },
  { nombre: "sprite 2.25", precio: 5000 },
  { nombre: "sprite retor vidrio", precio: 2500 },
  { nombre: "sprite retor 2", precio: 3800 },
  { nombre: "sprite zero", precio: 3500 },
  { nombre: "stella 0%", precio: 2500 },
  { nombre: "stella 473", precio: 3000 },
  { nombre: "stella noire", precio: 3300 },
  { nombre: "stella 710", precio: 5000 },
  { nombre: "stella porron", precio: 5500 },
  { nombre: "volk apa", precio: 4500 },
  { nombre: "volk blond", precio: 4000 },
  { nombre: "volk doppler bock", precio: 4500 },
  { nombre: "volk dubbel", precio: 4000 },
  { nombre: "volk honey", precio: 4000 },
  { nombre: "volk london porter", precio: 4500 },
  { nombre: "volk scottish", precio: 4000 },
  { nombre: "volk session ipa", precio: 5500 }
];

/* 
// 1️⃣ Ordenar alfabéticamente
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

// 2️⃣ Agrupar por letra inicial
const grupos = {};
productos.forEach(p => {
  const letra = p.nombre[0].toUpperCase();
  if (!grupos[letra]) grupos[letra] = [];
  grupos[letra].push(p);
});

// 3️⃣ Renderizar los grupos
const lista = document.getElementById('lista');
Object.keys(grupos).sort().forEach(letra => {
  const section = document.createElement('section');
  section.innerHTML = `<h2>${letra}</h2>`;
  grupos[letra].forEach(p => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `<span>${p.nombre}</span><span>$${p.precio}</span>`;
    section.appendChild(div);
  });
  lista.appendChild(section);
});
 */

const lista = document.getElementById('lista');

// Función principal para cargar y renderizar
async function cargarYRenderizarProductos() {
    // 1️⃣ Generar un cache buster automático basado en el tiempo actual
    const cacheBuster = Date.now();
    const url = `./scripts/data.json?v=${cacheBuster}`;

    try {
        // 2️⃣ Cargar los datos. El 'cacheBuster' garantiza que siempre se descargue la última versión
        const response = await fetch(url);
        const productos = await response.json();

        // 3️⃣ Ordenar alfabéticamente
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

        // 4️⃣ Agrupar por letra inicial
        const grupos = {};
        productos.forEach(p => {
            const letra = p.nombre[0].toUpperCase();
            if (!grupos[letra]) grupos[letra] = [];
            grupos[letra].push(p);
        });

        // 5️⃣ Renderizar los grupos
        Object.keys(grupos).sort().forEach(letra => {
            const section = document.createElement('section');
            section.innerHTML = `<h2>${letra}</h2>`;
            grupos[letra].forEach(p => {
                const div = document.createElement('div');
                div.className = 'producto';
                // Formatear el precio para que se vea mejor, por ejemplo, con puntos o comas
                const precioFormateado = p.precio.toLocaleString('es-AR'); 
                div.innerHTML = `<span>${p.nombre}</span><span>$${precioFormateado}</span>`;
                section.appendChild(div);
            });
            lista.appendChild(section);
        });

    } catch (error) {
        console.error("Error al cargar o renderizar los productos:", error);
        lista.innerHTML = '<h2>Lo sentimos, no pudimos cargar la lista de precios.</h2>';
    }
}

// Iniciar la carga
cargarYRenderizarProductos();