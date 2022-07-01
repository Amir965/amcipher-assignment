import type { NextPage } from 'next'
import FooterSection from '../components/footer/footer-section'
import Nav from '../components/Nav/index'
import NewsLetterSection from '../components/NewsletterSection/NewsLetterSection'
import HeaderSection from '../components/Sections/HeaderSection'
import TopCategory from '../components/TopCategories/top-category'
import TopCategories from '../components/TopCategories/top-category'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <HeaderSection />
      <TopCategory />
      <NewsLetterSection />
      <FooterSection/>
    </div>
  )
}

export default Home
