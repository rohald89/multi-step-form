function StepLink({ step, active }: { step: { id: number; title: string }; active: boolean }) {
  console.log(step)
  return (
    <div className='flex items-center gap-4 text-white'>
      <div
        className={`${
          active ? 'bg-blue-200 text-[#022959]' : 'border-1 border-white'
        } grid h-8 w-8 place-items-center rounded-full `}
      >
        {step.id}
      </div>
      <p className='hidden uppercase md:flex md:flex-col'>
        <span className='text-xs text-[#abbcff]'>Step {step.id}</span>
        <span className='text-sm font-bold tracking-wider'>{step.title}</span>
      </p>
    </div>
  )
}

export default StepLink
