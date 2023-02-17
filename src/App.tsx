import Container from './components/Container'
import StepNavigation from './components/StepNavigation'

function App() {
  return (
    <div className='relative grid min-h-screen place-items-center bg-[#EFF5FF]'>
      <Container>
        <StepNavigation />
        <section className=''>
          <h1 className='text-3xl'>Personal info</h1>
        </section>
      </Container>
    </div>
  )
}

export default App
