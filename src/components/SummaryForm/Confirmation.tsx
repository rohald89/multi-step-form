import ThankYou from '../icons/ThankYou'

const Confirmation = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 text-center md:mb-4'>
      <ThankYou />
      <h1 className='text-3xl font-bold '>Thank you!</h1>
      <p className='text-base text-[#9699AA]'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}
export default Confirmation
