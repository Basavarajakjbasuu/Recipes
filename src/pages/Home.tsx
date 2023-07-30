import { FC, ReactElement } from 'react'
import { Hero, MobileNav, Sliders, Tabs } from '../components'

const Home: FC = (): ReactElement => {
  return (
    <>
      <MobileNav />
      <main>
        <Hero />
        <Tabs />
        <Sliders />
      </main>
    </>
  )
}

export default Home