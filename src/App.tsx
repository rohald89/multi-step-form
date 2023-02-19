import { FormEvent, useState } from 'react'
import AddonForm from './components/AddonForm'
import Container from './components/Container'
import InfoForm from './components/InfoForm'
import Navigation from './components/Navigation'
import PlanForm from './components/PlanForm'
import Sidebar from './components/Sidebar'
import SummaryForm from './components/SummaryForm'
import { useMultiStep } from './hooks/useMultiStep'

export type addon = 'service' | 'storage' | 'profile'

type FormData = {
  name: string
  email: string
  phone: string
  plan: 'arcade' | 'advanced' | 'pro'
  billingCycle: 'monthly' | 'yearly'
  addons: addon[]
  submitted: boolean
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  billingCycle: 'yearly',
  addons: [],
  submitted: false,
}

function App() {
  const [data, setData] = useState<FormData>(INITIAL_FORM_DATA)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStep([
    <InfoForm key={1} {...data} updateFields={handleInputChange} />,
    <PlanForm key={2} {...data} updateFields={handleInputChange} />,
    <AddonForm key={3} {...data} updateFields={handleCheckboxChange} />,
    <SummaryForm key={4} {...data} updateFields={setData} />,
  ])

  function handleInputChange(fields: Partial<FormData>) {
    console.log(fields)
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  function handleCheckboxChange(addon: addon) {
    console.log(addon)
    setData((prev) => {
      return {
        ...prev,
        addons: prev.addons.includes(addon)
          ? prev.addons.filter((a) => a !== addon)
          : [...prev.addons, addon],
      }
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setData({ ...data, submitted: true })
  }

  return (
    <div className='relative min-h-screen bg-[#EFF5FF] bg-mobile-nav bg-contain bg-no-repeat pt-24 md:grid md:place-items-center md:bg-none md:pt-0'>
      <Container>
        <Sidebar currentStepIndex={currentStepIndex} />
        <div className='flex flex-col justify-between md:w-11/12 md:max-w-[450px]'>
          <form className='' onSubmit={handleSubmit}>
            {step}
          </form>
          <Navigation back={back} next={next} isFirstStep={isFirstStep} isLastStep={isLastStep} />
        </div>
      </Container>
    </div>
  )
}

export default App
