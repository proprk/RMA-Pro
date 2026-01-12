import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import Challenges from '../components/home/Challenges'
import Solution from '../components/home/Solution'
import ProgramEnhancements from '../components/home/ProgramEnhancements'
import ExpectedImpact from '../components/home/ExpectedImpact'
import Phase1 from '../components/home/Phase1'
import Phase2 from '../components/home/Phase2'
import Phase3 from '../components/home/Phase3'
import Phase4 from '../components/home/Phase4'
import DecisionPoint from '../components/home/DecisionPoint'
import Phase5 from '../components/home/Phase5'
import CompleteFlow from '../components/home/CompleteFlow'
import Footer from '../components/home/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Challenges />
            <Solution />
            <Phase1 />
            <Phase2 />
            <Phase3 />
            <Phase4 />
            <DecisionPoint />
            <Phase5 />
            <CompleteFlow />
            <ProgramEnhancements />
            <ExpectedImpact />
            <Footer />
        </>
    )
}

export default Home