// import imagenes
import LogoImg from '../src/assets/img/logoLegalia.svg'
import HeroImg from '../src/assets/img/hero.svg'
import ArrowIcon from '../src/assets/img/arrow-right.svg' 
import VisionImg from '../src/assets/img/vision.svg'
import ServicesImg from '../src/assets/img/services.svg'
import ContactImg from '../src/assets/img/contact.svg'
import FacebookIcon from '../src/assets/img/facebook.svg'
import WhatsAppIcon from '../src/assets/img/whatsapp.svg'
import InstagramIcon from '../src/assets/img/instagram.svg'
import VideoHome from '../src/assets/img/home.mp4'
export const header = {
  logo: LogoImg,
  btnText: 'Contáctanos'
}
export const nav = [
  { name: 'Mision', href:'#mision' },
  { name: 'Vision', href: '#vision' },
  { name: 'Servicios', href: '#servicios' }
]
export const hero = {
  video: VideoHome
}

export const mision = {
  title: 'Nuestra Misión',
  subtitle: 'Proporcionar servicios legales de alta calidad y asesoría jurídica personalizada a nuestros clientes, basados en la ética profesional, el compromiso y la excelencia, con el fin de proteger sus derechos e intereses, resolver conflictos y alcanzar soluciones efectivas a sus necesidades legales, aportando valor a la sociedad y construyendo relaciones duraderas y de confianza con nuestros clientes.',
  btnLink: '#vision',
  btnText: 'Vision',
  compText: '—  Visión - Catalogo de Servicios',
  image: HeroImg
}

export const vision = {
  title: 'Nuestra Visión',
  subtitle: 'Ser reconocidos como líderes en la prestación de servicios legales de alta calidad y excelencia, en constante evolución y mejora, con un enfoque en la satisfacción del cliente y la solución efectiva de sus necesidades jurídicas, destacándonos por nuestra ética profesional, compromiso y capacidad de innovación y adaptación a un entorno legal en constante cambio. Aspiramos a ser un despacho jurídico de referencia, que contribuya al desarrollo de la sociedad y que sea un lugar de trabajo inspirador y motivador para nuestros profesionistas a nivel nacional, dejando una marca en el hito hístorico del pais.',
  btnLink: 'Servicios',
  btnIcon: ArrowIcon,
  image: VisionImg
}

export const servicios = {
  title: 'Nuestros Servicios',
  subtitle: 'Asesoria Juridica',
  img: ServicesImg,
  cards: [
    { 
      name: 'Asuntos Agrarios',
      delay: 100 
    },
    { 
      name: 'Asuntos Mercantiles',
      delay: 200
    },
    { 
      name: 'Asuntos Corporativos',
      delay: 300 
    },
    { 
      name: 'Asuntos de la Construcción',
      delay: 400 
    },
    { 
      name: 'Asuntos Laborales',
      delay: 400 
    },
    { 
      name: 'Asuntos Civiles',
      delay: 400 
    },
    { 
      name: 'Asuntos Familiares',
      delay: 400 
    },
    { 
      name: 'Asuntos Penales',
      delay: 400 
    },
  ]

}
export const contacto = {
  title: 'Contactanos',
  form: {
    ph1: 'Ramon Perez',
    ph2: 'perez.ra10@correo.es',
    ph3: 'Cotizacion',
    ph4: 'Requiero informes sobre...',
    btnText: 'Enviar',
    smallText: 'Recuerda revisar tus datos!',
    logo: ContactImg
  },
}

export const footer = {
  title: 'Redes Sociales',
  address: 'Mariano Zúñiga 113 Col. El Hipico, Metepec, Mexico',
  social: [
    {icon: FacebookIcon , href: 'https://www.facebook.com/profile.php?id=100091816060022'},
    {icon: WhatsAppIcon, href: '#'},
    {icon: InstagramIcon, href: 'https://www.instagram.com/legaliadj/'},
  ]
}

export const copyright = {
  copyText: 'Copyright @ 2023 Legalia'
}