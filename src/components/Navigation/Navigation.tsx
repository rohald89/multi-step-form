type NavigationProps = {
  back: () => void
  next: () => void
  isFirstStep: boolean
  isLastStep: boolean
  submitted: boolean
}

function Navigation({ back, next, isFirstStep, isLastStep, submitted }: NavigationProps) {
  if (submitted) return null
  return (
    <div className='fixed bottom-0 left-0 right-0 mt-auto flex items-center justify-between bg-white p-4 font-semibold md:static md:px-0'>
      {!isFirstStep && (
        <button type='button' onClick={back} className='text-[#9699AA] hover:text-[#022959]'>
          Go Back
        </button>
      )}
      {!isLastStep && (
        <button
          onClick={next}
          type='button'
          className='ml-auto rounded-lg bg-[#022959] py-4 px-6 text-white transition-colors hover:bg-[#164A8A]'
        >
          Next Step
        </button>
      )}
      {isLastStep && (
        <button
          onClick={next}
          className='ml-auto rounded-lg bg-[#483EFF] py-4 px-8 text-white transition-colors hover:bg-[#164A8A]'
        >
          Confirm
        </button>
      )}
    </div>
  )
}

export default Navigation
