import products from '../../products'
import Confirmation from './Confirmation'

function SummaryForm({ plan, billingCycle, addons, change, submitted }) {
  console.log(plan, billingCycle, addons)

  if (submitted) return <Confirmation />
  return (
    <div className='flex flex-col gap-6 text-[#022959] md:mt-14'>
      <div className='flex flex-col gap-3 md:mb-4'>
        <h1 className='text-3xl font-bold '>Finishing up</h1>
        <p className='text-base text-[#9699AA]'>
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <section className='rounded-lg bg-[#f8f9ff] p-6 pt-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='font-bold capitalize'>
              {plan} ({billingCycle})
            </h2>
            <button onClick={() => change()}>Change</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SummaryForm
