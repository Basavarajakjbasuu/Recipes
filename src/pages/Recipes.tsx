import { FC, ReactElement } from 'react'
import { Filter, MobileNav } from '../components'

const Recipes: FC = (): ReactElement => {
  return (
    <div>
      <MobileNav />
      <main>
        <Filter />
      </main>
    </div>
  )
}

export default Recipes