type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <main className='mx-auto w-11/12 max-w-4xl rounded-wrapper-md bg-white px-6 py-8 shadow-wrapper md:flex md:h-full md:max-h-[600px] md:gap-24 md:rounded-wrapper-lg md:p-4'>
      {children}
    </main>
  )
}

export default Container
