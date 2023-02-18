import { FormEvent, useState } from 'react'
import AddonForm from './components/AddonForm'
import Container from './components/Container'
import InfoForm from './components/InfoForm'
import PlanForm from './components/PlanForm'
import StepNavigation from './components/StepNavigation'
import SummaryForm from './components/SummaryForm'
import { useMultiStep } from './hooks/useMultiStep'

type addon = 'service' | 'storage' | 'profile'

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
  billingCycle: 'monthly',
  addons: [],
  submitted: false,
}

function App() {
  const [data, setData] = useState<FormData>(INITIAL_FORM_DATA)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStep([
    <InfoForm key={1} {...data} updateFields={handleInputChange} />,
    <PlanForm key={2} {...data} updateFields={setData} />,
    <AddonForm key={3} {...data} updateFields={setData} />,
    <SummaryForm key={4} {...data} updateFields={setData} />,
  ])

  function handleInputChange(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  //   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, checked } = e.target
  //     if (checked) {
  //       setData({ ...data, addons: [...data.addons, name as addon] })
  //     } else {
  //       setData({ ...data, addons: data.addons.filter((addon) => addon !== name) })
  //     }
  //   }

  function handleCycleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setData({ ...data, billingCycle: value as 'monthly' | 'yearly' })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setData({ ...data, submitted: true })
  }

  return (
    <div className='relative grid min-h-screen place-items-center bg-[#EFF5FF]'>
      <Container>
        <StepNavigation />
        <form onSubmit={handleSubmit}>{step}</form>
      </Container>
    </div>
  )
}

export default App
