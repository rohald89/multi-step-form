type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <main className='mx-auto w-11/12 max-w-[940px] rounded-wrapper-md bg-white px-6 py-8 shadow-main md:flex md:h-full md:max-h-[600px] md:gap-10 md:rounded-wrapper-lg md:p-4 lg:gap-24'>
      {children}
    </main>
  )
}

export default Container
