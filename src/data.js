// import imagenes
import LogoImg from '../src/assets/img/logoLegalia.png'
import HeroImg from '../src/assets/img/hero.jpg'
import ArrowIcon from '../src/assets/img/arrow-right.svg' 
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

}

export const mision = {
  title: 'Nuestra Misión',
  subtitle: 'Proporcionar servicios legales de alta calidad y asesoría jurídica personalizada a nuestros clientes, basados en la ética profesional, el compromiso y la excelencia, con el fin de proteger sus derechos e intereses, resolver conflictos y alcanzar soluciones efectivas a sus necesidades legales, aportando valor a la sociedad y construyendo relaciones duraderas y de confianza con nuestros clientes',
  btnLink: '#vision',
  btnText: 'Vision',
  compText: '— Misión, Visión y  Catalogo de Servicios',
  image: HeroImg
}

export const vision = {
  title: 'Nuestra Vision',
  subtitle: 'Ser reconocidos como líderes en la prestación de servicios legales de alta calidad y excelencia, en constante evolución y mejora, con un enfoque en la satisfacción del cliente y la solución efectiva de sus necesidades jurídicas, destacándonos por nuestra ética profesional, compromiso y capacidad de innovación y adaptación a un entorno legal en constante cambio. Aspiramos a ser un despacho jurídico de referencia, que contribuya al desarrollo de la sociedad y que sea un lugar de trabajo inspirador y motivador para nuestros profesionistas a nivel nacional, dejando una marca en el hito hístorico del pais',
  btnLink: 'Servicios',
  btnIcon: ArrowIcon,
  image: HeroImg
}

export const servicios = {
  title: 'Nuestros Servicios',
  catalogo: [
    { name: 'Licencia de Construción' },
    { name: 'Licencia de Uso de Suelo' },
    { name: 'Licencia de Demolición' },
    { name: 'Tramites relativos a construcción' },
  ]

}
export const contacto = {
  title: 'Contactanos',
  image: 'aqui va la image'
}

export const social = {
  title: 'Redes Sociales',
  redes: [
    {name: 'Facebook', href: ''},
    {name: 'WhatsApp', href: ''},
  ]
}
