const quizData = [
    {
        question: '¿Cómo se llama el podcast que dirige Slobulus?',
        a: 'Viciados Bubillos',
        b: 'Plumillas Gamer',
        c: 'Viciados Podcasts',
        d: 'No dirige nada',
        img: './pics/podcast.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: '¿Cómo se llama la sección de juegos de Spectrum del canal de Slobulus?',
        a: 'Memorias Spectrumeras',
        b: 'Juegos de Spectrum',
        c: 'Spectrum Games',
        d: 'Historia de Spectrum',
        img: './pics/spectrum.jpg',
        author: 'Davidbp_',
        correct: 'a'
    },
    {
        question: '¿Qué edad mínima tienes que tener para poder ser jugador de Abuelonchos FC?',
        a: '31',
        b: '35',
        c: '33',
        d: '65',
        img: './pics/abuelonchos.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: '¿Cuál es el RPG favorito de Slobulus?',
        a: 'Chrono Trigger',
        b: 'Dragon Quest',
        c: 'Final Fantasy X',
        d: 'FIFA 21',
        img: './pics/rpg.jpg',
        author: 'Davidbp_',
        correct: 'a'
    },
    {
        question: '¿Cuál fue el primer juego del que se hizo una serie en el canal de Slobulus?',
        a: 'Sonic de Master System',
        b: 'Castlevania Simphony of the Night',
        c: 'Flashback',
        d: 'Visage',
        img: './pics/gameplay.jpg',
        author: 'Isma_DLR',
        correct: 'c'
    },
    {
        question: '¿A qué se dedica el genio de las calles?',
        a: 'Físico Teórico',
        b: 'Profesor Chiflado',
        c: 'Ajedrecista',
        d: 'Químico loco',
        img: './pics/trabajo.jpg',
        author: 'Cebolletagames',
        correct: 'a'
    },
    {
        question: '¿Con qué FIFA empezó Abuelonchos?',
        a: 'FIFA 14',
        b: 'FIFA 15',
        c: 'FIFA 16',
        d: 'PES 2015',
        img: './pics/abuelonchos.jpg',
        author: 'Cebolletagames',
        correct: 'b',
    },
    {
        question: '¿De qué color son los calcetines de un bubillo?',
        a: 'Negros',
        b: 'Rojos',
        c: 'Verdes',
        d: 'Blancos',
        img: './pics/calcetines.jpg',
        author: 'Davidbp_',
        correct: 'd'
    },
    {
        question: '¿Qué objeto lleva consigo siempre Slobulus cada vez que sale a la calle?',
        a: 'Gomina',
        b: 'Calcetines blancos',
        c: 'Navaja de Albacete',
        d: 'Batidos de vanilla',
        img: './pics/kit-calle.jpg',
        author: 'Davidbp_',
        correct: 'c',

    },
    {
        question: '¿Qué videojuego intentaron robar los bubillos?',
        a: 'Minecraft',
        b: 'Street of Rage',
        c: 'Comandos',
        d: 'Tetris 99',
        img: './pics/bubillos.jpg',
        author: 'Pliskin10',
        correct: 'b'
    },
    {
        question: 'Piloto favorito de Slobulus de todos los tiempos',
        a: 'Pastor Maldonado',
        b: 'Fernando Alonso',
        c: 'Ayrton Senna',
        d: 'Kimi Raikkonen',
        img: './pics/f1.jpg',
        author: 'Josekdj',
        correct: 'd'
    },
    {
        question: '¿Con qué mano paga Almeida en el bar?',
        a: 'Con la derecha',
        b: 'Con la izquierda',
        c: 'Le fían',
        d: 'Hace que paga pero no suelta billetes',
        img: './pics/almeida.jpg',
        author: 'Cebolletagames',
        correct: 'd'
    },
    {
        question: '¿En qué año entró en escena American Slo?',
        a: '2013',
        b: '2014',
        c: '2015',
        d: 'No existe ningún American Slo',
        img: './pics/american-slo.jpg',
        author: 'Davidbp_',
        correct: 'a'
    },
    {
        question: '¿En qué año empezó Slobulus en Youtube?',
        a: '2009',
        b: '2010',
        c: '2011',
        d: '2012',
        img: './pics/slobulus-youtube.jpg',
        author: 'Jorgefp88',
        correct: 'c'
    },
    {
        question: '¿Qué coche tiene el genio de las calles?',
        a: 'Seat León',
        b: 'Opel Astra',
        c: 'Renault Twingo',
        d: 'Ford Focus',
        img: './pics/coche.jpg',
        author: 'Davidbp_',
        correct: 'b'
    },
    {
        question: '¿Quién marcó el primer gol de la historia de los Abuelonchos?',
        a: 'Frank Lampard de penalti',
        b: 'Pirlo de falta ',
        c: 'Barry Richarson en propia puerta',
        d: 'Juanfran de gol olímpico',
        img: './pics/abuelonchosfc.jpg',
        author: 'RobKaniel',
        correct: 'a'
    },
    {
        question: '¿De qué equipo de la NBA es fiel seguidor Slo?',
        a: 'Chicago Bulls',
        b: 'Lakers',
        c: 'New Yor Knicks',
        d: 'Celtics',
        img: './pics/nba.jpg',
        author: 'Alfon',
        correct: 'c'
    },
    {
        question: '¿Cuál es la serie más larga en El Rincón de Slobulus?',
        a: 'Dishonored',
        b: 'System Shock 2', 
        c: 'The Last of Us',
        d: 'Chrono Cross',
        img: './pics/slobulus-series.jpg',
        author: 'Jorgefp88',
        correct: 'd'
    },
    {
        question: '¿Cuándo es el cumpleaños de Slobulus?',
        a: '1 de enero',
        b: '14 de abril',
        c: '18 de junio',
        d: '29 de febrero',
        img: './pics/cumple.jpg',
        author: 'Alfon',
        correct: 'c'
    },
    {
        question: '¿En qué estado nació American Slo?',
        a: 'Nueva York',
        b: 'Alaska',
        c: 'Texas',
        d: 'Alabama',
        img: './pics/american-slo.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: '¿Cuál fue el primer sistema que tuvo Slo en casa?',
        a: 'Atari',
        b: 'Spectrum',
        c: 'Amiga',
        d: 'Nintendo Entertainment System',
        img: './pics/retro.png',
        author: 'Cebolletagames',
        correct: 'b'
    },
    {
        question: '¿Qué pegatina tiene el garaje en miniatura que construyó el abuelo de Slo?',
        a: 'Pryca',
        b: 'Bollycao',
        c: 'Tigretón',
        d: 'EA',
        img: './pics/garaje.jpg',
        author: 'Alfon',
        correct: 'Pryca'
    },
    {
        question: '¿Qué pegatina tiene Slo en su televisor de tubo?',
        a: 'Konami',
        b: 'Nintendo',
        c: 'Sega',
        d: 'Capcom',
        img: './pics/gameplay.jpg',
        author: 'Alfon',
        correct: 'd'
    },
    {
        question: '¿Cuántas cucharadas "pequeñas" de azúcar pone Slo en los batidos de plátano y fresa?',
        a: '2',
        b: '4',
        c: '8',
        d: 'Ninguna',
        img: './pics/batido.jpg',
        author: 'Cebolletagames',
        correct: 'c'
    },
    {
        question: '¿Con qué nota media aprobó BUP Slobulus?',
        a: '6.1',
        b: '7.3',
        c: '9.8',
        d: 'No aprobó por culpa de los bubillos',
        img: './pics/instituto.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: '¿El juego de estrategia favorito de Slo?',
        a: 'Age of Empire II',
        b: 'Warcraft 2',
        c: 'Starcraft', 
        d: 'Football Manager',
        img: './pics/estrategia.jpg',
        author: 'Alfon',
        correct: 'b'
    },
    {
        question: '¿Qué programa estudió el mago en Informática?',
        a: 'MS Paint',
        b: 'Emule',
        c: 'Photoshop',
        d: 'Buscaminas',
        img: './pics/informatica.jpg',
        author: 'Alfon',
        correct: 'a'
    },
    {
        question: '¿A qué FPS multijugador jugó Slo buena parte de las horas de la clase de Informática del instituto?',
        a: 'Quake',
        b: 'Duke Nukem 3D',
        c: 'Doom',
        d: 'Unreal Tournament',
        img: './pics/juego-informatica.jpg',
        author: 'Alfon',
        correct: 'd'
    },
    {
        question: '¿A qué se dedicaba el padre de los bubillos?',
        a: 'Agente comercial',
        b: 'Camarero',
        c: 'Policía Nacional',
        d: 'Vendedor de un puesto de pipas',
        img: './pics/bubillos.jpg',
        author: 'Roberto Piña',
        correct: 'd'
    },
    {
        question: '¿Mote de Slo de pequeño en el colegio?',
        a: 'Everest',
        b: 'Mata-cobayas',
        c: 'Terminator',
        d: 'Porsche',
        img: './pics/la-banda.jpg',
        author: 'Alfon',
        correct: 'a'
    },
    {
        question: '¿Quién fue el primer jugador en ganar el Bastón de Oro?',
        a: 'Ibraimovic',
        b: 'JuanFran',
        c: 'Barry Richardson',
        d: 'Messi',
        img: './pics/abuelonchosfc.jpg',
        author: 'Roberto Piña',
        correct: 'c'
    },
    {
        question: '¿Qué dispositivo de realidad virtual analizó American Slo?',
        a: 'Virtual Boy',
        b: 'PS VR',
        c: 'Steam VR',
        d: 'Oculus Rift',
        img: './pics/american-slo.jpg',
        author: 'Davidbp_',
        correct: 'a'
    },
    {
        question: '¿Cuál de los siguientes jugadores te puede dejar sin stock si le fichas para tu equipo de Abuelonchos?',
        a: 'Juanfran',
        b: 'Joaquín',
        c: 'Akinfenwa',
        d: 'Iniesta',
        img: './pics/abuelonchosfc.jpg',
        author: 'Sergicontre',
        correct: 'c'
    },
    {
        question: '¿Con quién cenas si quedas el último en las canicas de Twitch?',
        a: 'Bosescu',
        b: 'Falete',
        c: 'Bordalás',
        d: 'Sabrina',
        img: './pics/marbles.jpg',
        author: 'Alfon',
        correct: 'c'
    },
    {
        question: '¿Cuál es el coche favorito de Slo en Wreckfest?',
        a: 'Muddiger',
        b: 'Rocket',
        c: 'Killerbee',
        d: 'Boomer',
        img: './pics/wreckfest.jpg',
        author: 'Cebolletagames',
        correct: 'c'
    },
    {
        question: '¿En qué canal de televisión se ve mejor el Boxeo?',
        a: 'Netflix',
        b: 'Canal+',
        c: 'Antenta 3',
        d: 'En ninguno de los anteriores',
        img: './pics/boxeo.jpg',
        author: 'Roberto Piña',
        correct: 'b'
    },
    {
        question: '¿Cuál es el sistema preferido de American Slo?',
        a: 'Spectrum',
        b: 'TurboGrafx',
        c: 'Master System',
        d: 'Odia los videojuegos',
        img: './pics/american-slo.jpg',
        author: 'Davidbp_',
        correct: 'b' 
    },
    {
        question: '¿El equipo favorito de Slo de NFL?',
        a: 'Miami Dolphins',
        b: 'Seattle Seahawks',
        c: 'Tennesse Titans',
        d: 'Dallas Cowboys',
        img: './pics/nfl.jpg',
        author: 'Roberto Piña',
        correct: 'c'
    },
    {
        question: '¿Cuál es el nombre de pila de Slobulus?',
        a: 'Daniel',
        b: 'Ignacio',
        c: 'Miguel Ángel',
        d: 'Kevin',
        img: './pics/slobulus-series.jpg',
        author: 'Roberto Piña',
        correct: 'c'
    },
    {
        question: '¿Qué tiene Slo colgado de la pared encima de su monitor?',
        a: 'Una foto de Falete',
        b: 'Un póster de Metroid',
        c: 'Su título universitario de Físico Teórico',
        d: 'Un esqueleto tocando la guitarra',
        img: './pics/trinchera.jpg',
        author: 'Roberto Piña',
        correct: 'c'
    },
    {
        question: '¿Dónde nació Slobulus?',
        a: 'Cataluña',
        b: 'Andalucía',
        c: 'Murcia',
        d: 'Texas',
        img: './pics/slobulus-series.jpg',
        author: 'Alfon',
        correct: 'a'
    },
    {
        question: '¿Cuántos bits prometieron regalarle a Slo en Twitch si se pasaba un gimnasio sin morir ninguna vez?',
        a: '1.000',
        b: '2.000',
        c: '3.500',
        d: '5.000',
        img: './pics/pokemon.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: '¿Dónde nació Vassily, el genio de la carretera?',
        a: 'Rusia',
        b: 'Eslovaquia',
        c: 'Ucrania',
        d: 'Murcia',
        img: './pics/vassily.jpg',
        author: 'Davidbp_',
        correct: 'c'
    },
    {
        question: 'Si Slo hiciera un videojuego, ¿en qué universo lo ambientaría?',
        a: 'Terminator',
        b: 'FIFA',
        c: 'Robocop',
        d: 'Jurassic Park',
        img: './pics/universo.jpg',
        author: 'Alfon',
        correct: 'a'

    },
    {
        question: '¿A quién le dejaba los apuntes de clase Slobulus?',
        a: 'Al moco',
        b: 'Al bubillo',
        c: 'A la terminator',
        d: 'Al kevin',
        img: './pics/instituto.jpg',
        author: 'Jorgefp88',
        correct: 'd'
    },
    {
        question: '¿A qué sonido se refiere la expresión "sonido ancestral"?',
        a: 'Al sonido que hacen los juegos de Spectrum cuando están cargando',
        b: 'Al sonido que hacen los demonios del Doom',
        c: 'Al sonido que hace la cucharilla contra el vaso al remover el Nesquik',
        d: 'Al sonido de cuando tiras de la cisterna',
        img: './pics/slobulus-series.jpg',
        author: 'Roberto Piña',
        correct: 'c'
    },
    {
        question: '¿En qué día suele celebrarse el Fernando Almeida World Tour anual?',
        a: 'Día del trabajador (1 de mayo)',
        b: 'Halloween (31 de octubre)',
        c: 'Navidad (25 de diciembre)',
        d: 'San Valentín (14 de febrero)',
        img: './pics/almeida.jpg',
        author: 'Alfon',
        correct: 'd'
    },
    {
        question: '¿Cómo se llamaba la tortuga de Slo?',
        a: 'Porsche',
        b: 'Ferrari',
        c: 'Maserati',
        d: 'Seat',
        img: './pics/tortuga.jpg',
        author: 'Alfon',
        correct: 'a'
    },
    {
        question: '¿Quién tiene derecho a una tirada en la ruleta?',
        a: 'Los suscritos y los que donen mínimo 50 bits',
        b: 'Los que se hayan suscrito al menos una vez en los últimos 3 meses',
        c: 'Los suscritos y los que donen mínimo de 2.000 bits',
        d: 'Los suscritos y los que donen mínimo 100 bits',
        img: './pics/ruleta.jpg',
        author: 'Davidbp_',
        correct: 'd'
    },
    {
        question: '¿A quién se debe el nombre del Porzingi en la ruleta?',
        a: 'A un jugador ucraniano de petanca',
        b: 'A un jugador de poker ruso, famoso por las trilerías con las escaleras de color',
        c: 'A un jugador de baloncesto de los Knicks',
        d: 'A un mecánico gafe de la fórmula 1',
        img: './pics/ruleta.jpg',
        author: 'Davidbp_',
        correct: 'c'
    }

]