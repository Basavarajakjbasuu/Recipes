import { FC, ReactElement } from 'react'
import { Header, Hero, MobileNav } from '../components'

const Home: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <MobileNav />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home