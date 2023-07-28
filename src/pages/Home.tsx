import { FC, ReactElement } from 'react'
import { Header, Hero, MobileNav, Tabs } from '../components'

const Home: FC = (): ReactElement => {
  return (
    <>
      <MobileNav />
      <main>
        <Hero />
        <Tabs />
      </main>
    </>
  )
}

export default Home