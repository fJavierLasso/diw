const titles = [
    'Master del universo',
    'Master del lavaplatos',
    'Master de los masters',
    'Crack de la pizza',
    'Crack de internet',
    'Crack del 5G',
    'Figura graciosa',
    'Amante de las miniaturas',
    'Amante de las esquinas redondeadas',
    'Amante de las esquinas octogonales',
    'Amante de las esquinas decagonales',
    'Amante de las esquinas dodecagonales',
    'Amante de las esquinas icosaedro',
    'Cazadragones',
    'Gurú del café',
    'Deidad del sushi',
    'Quien no se rinde',
    'Vaina loca',
    'Pedazo de pan rancio',
    'Delicatesen',
    'Diseña con amor',
    'Fan de los anfibios',
    'Fan de los insectos',
    'Fan de los arácnidos',
    'Fan de los moluscos',
    'Fan de los crustáceos',
    'Fan de los equinodermos',
    'Gurú del ping pong',
    'Gurú del ajedrez',
    'Gurú del ajedrez chino',
    'Gurú del ajedrez ruso',
    'Gurú del ajedrez indio',
    'Gurú del ajedrez persa',
    'Gurú del ajedrez árabe',
    'Fan de los videojuegos',
    'Fan de los juegos de mesa',
    'Fan de los juegos de cartas',
    'Fan de los juegos de rol',
    'Fan de los juegos de azar',
    'Fan de los juegos de estrategia',
    'Fan de los juegos de ingenio',
    'Fan de los juegos de acción',
    'Fan de los libros',
    'Fan de los comics',
    'Fan de los mangas',
    'Fan de los animes',
    'Fan de los memes',
    'Pro gamer',
    'Pro streamer',
    'Pro youtuber',
    'Pro de tiktok',
    'Pro de instagram',
    'Pro de facebook',
    'Pro de twitter',
    'Pro de linkedin',
    'Lee con pasión',
    'Escucha con pasión',
    'Va sin frenos',
    'Exhala brillibrilli',
    'Rezuma energía',
    'Rezuma pasión',
    'Reza a Doraemon',
    'Reza a Goku',
    'Reza a Naruto',
    'Reza a Pikachu',
    'Reza a Mario',
    'Reza a Link',
    'No expresa emociones',
    'Expresa algunas emociones',
    'Expresa muchas emociones',
    'Expresa todas las emociones',
    'Grita temerariamente',
    'Grita con pasión',
    'Grita con amor',
    'Grita con odio',
    'Grita con miedo',
    'Grita con rabia',
    'Piensa en grande',
    'Piensa en pequeño',
    'Piensa en mediano',
    'Piensa en gigante',
    'Piensa en microscópico',
    'Piensa en macroscópico',
    'Piensa en infinito',
    'Piensa en infinitesimal',
    'Los Doritos son su vida',
    'Los Cheetos son su vida',
    'Las Pringles son su vida',
    'Máquina de hacer dinero',
    'Grillo de la selva',
    'Hormiga de interior',
    'Hormiga de exterior',
    'Hormiga de la selva',
];

const amigos = document.querySelectorAll('.iconoAmigos');

amigos.forEach(async (amigo) => {
  const apiData = await getApiData();
  const imageUrl = apiData.results[0].picture.large;
  amigo.setAttribute('src', imageUrl);
});

// Función asincrónica para obtener los datos de la API de Random User
async function getApiData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data;
  }
  
  // Selecciona todas las tarjetas
  const userCards = document.querySelectorAll('.player');
  
  // Recorre todas las tarjetas y asigna una imagen y un nombre aleatorios de la API
  userCards.forEach(async (card) => {
    // Obtiene los datos aleatorios de la API
    const apiData = await getApiData();
    const imageUrl = apiData.results[0].picture.large;
    const name = apiData.results[0].name.first;
    
    // Asigna la imagen a la tarjeta
    card.querySelector('.profile-icon').setAttribute('src', imageUrl);
    
    // Asigna el nombre a la tarjeta
    card.querySelector('.player-name').textContent = name;
    
    // Obtiene un título aleatorio
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    // Asigna el título a la tarjeta
    card.querySelector('.player-title').textContent = randomTitle;
    
    // Genero un número aleatorio entre 1 y 1000
    const randomId = Math.floor(Math.random() * 1000) + 1;
    // Asigno el número aleatorio en el div con clase userCard--rank
    card.querySelector('.score').textContent = randomId;
  });

