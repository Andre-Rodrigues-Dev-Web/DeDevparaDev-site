import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from './components/Menu'
import Banner from './components/Banner'
//Componentes
import{
  Template
} from './components/Template/style'


export default function Home() {
  return (
    <Template>
      <Head>
        <title>De Dev para Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu
        logonome="De Dev para Dev"
      />
      <Banner
        titleBanner="Aprenda tudo sobre a web de forma fácil e divertida"
        fraseBanner="No Dev para Dev você aprende a programar para web de uma forma bem divertida"
      />
    </Template>
  )
}
