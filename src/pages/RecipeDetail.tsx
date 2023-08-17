import { Details, MobileNav } from "../components"


const RecipeDetail = () => {
  return (
    <main className="detail-page-main">
      <article className="article container detail-page">
        <Details />

        <MobileNav />
      </article>
    </main>
  )
}

export default RecipeDetail