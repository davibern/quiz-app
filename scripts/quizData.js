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
        question: '¿Cuál fue el primer juego del que hizo una serie en el canal de Slobulus?',
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
        a: 'Maldonado',
        b: 'Alonso',
        c: 'Senna',
        d: 'Kimi',
        img: './pics/f1.jpg',
        author: 'Josedk',
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
        question: '¿En qué año entro en escena American Slo?',
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
        question: '¿Cuál es la serie más larga en el rincón de Slobulus?',
        a: 'Dishonored',
        b: 'System Shock 2', 
        c: 'The Last of Us',
        d: 'Chrono cross',
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
        question: '¿Qué pegatina tiene el garaje en miniatura que construó el abuelo de Slo?',
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
        question: '¿Cuantas cucharadas "pequeñas" de azucar pone Slo en los batidos de platano y fresa?',
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
        question: '¿A que FPS multijugador jugó buena parte de las horas de la clase de informática del instituto Slo?',
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
        c: 'Policia Nacional',
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
        question: '¿Quien fue el primer jugador en ganar el Baston de Oro?',
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
        question: '¿Cuál de los siguientes jugadores te puede dejar sin stock si le fichas para tu equipo de abuelonchos?',
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
        question: '¿Qué deporte le gustaba al abuelo de Slo y veía los viernes por la noche en Canal+?',
        a: 'Fútbol',
        b: 'Petanca',
        c: 'NBA',
        d: 'Boxeo',
        img: './pics/boxeo.jpg',
        author: 'Davidbp_',
        correct: 'd'
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
    }

]