import { FC, ReactElement } from 'react'
import { Hero, MobileNav, Tabs } from '../components'

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