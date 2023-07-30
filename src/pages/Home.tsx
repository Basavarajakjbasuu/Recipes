import { FC, ReactElement } from 'react'
import { Hero, MobileNav, Sliders, Tabs, Tags } from '../components'

const Home: FC = (): ReactElement => {
  return (
    <>
      <MobileNav />
      <main>
        <Hero />
        <Tabs />
        <Sliders />
        <Tags />
      </main>
    </>
  )
}

export default Home