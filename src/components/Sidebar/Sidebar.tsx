import StepLink from './StepLink'

function StepNavigation({ currentStepIndex }: { currentStepIndex: number }) {
  const steps = [
    {
      id: 1,
      title: 'Your info',
    },
    {
      id: 2,
      title: 'Select Plan',
    },
    {
      id: 3,
      title: 'Add-ons',
    },
    {
      id: 4,
      title: 'Summary',
    },
  ]
  return (
    <div className='fixed inset-0 flex h-[172px] items-start justify-center gap-4 bg-cover bg-no-repeat pt-8 md:static md:h-auto md:w-2/6 md:flex-col md:justify-start md:gap-8 md:rounded-wrapper-md md:bg-desktop-nav md:px-8 md:pt-10'>
      {steps.map((step) => (
        <StepLink key={step.id} step={step} active={step.id === currentStepIndex + 1} />
      ))}
    </div>
  )
}

export default StepNavigation
