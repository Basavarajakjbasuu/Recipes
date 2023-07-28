import { FC, ReactElement } from 'react'
import { Header, MobileNav } from '../components'

const Home: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <MobileNav />
    </>
  )
}

export default Home