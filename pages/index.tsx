import type { NextPage} from 'next'

import Header from '../components/Header'
import TenderCard from '../components/TenderCard'
import SwipeButtons from '../components/SwipeButtons'



const Home: NextPage = () => {
  return (
  <>
<div className="home">
hey whatsapp
  <Header/>
  <TenderCard/>
  <SwipeButtons/>
</div>
  </>

  )
}

export default Home
