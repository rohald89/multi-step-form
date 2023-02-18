type NavigationProps = {
  back: () => void
  next: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

function Navigation({ back, next, isFirstStep, isLastStep }: NavigationProps) {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between bg-white p-4 font-semibold md:static md:px-0'>
      {!isFirstStep && (
        <button onClick={back} className='text-[#9699AA] hover:text-[#022959]'>
          Go Back
        </button>
      )}
      {!isLastStep && (
        <button
          onClick={next}
          className='ml-auto rounded-lg bg-[#022959] py-4 px-6 text-white transition-colors hover:bg-[#164A8A]'
        >
          Next Step
        </button>
      )}
    </div>
  )
}

export default Navigation
