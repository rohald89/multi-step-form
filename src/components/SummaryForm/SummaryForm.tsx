import products from '../../products'
import { formatPrice } from '../../utils'
import Confirmation from './Confirmation'

function SummaryForm({ plan, billingCycle, addons, change, submitted }) {
  const chosenPlan = products.plans.filter((p) => p.name === plan)[0]
  console.log(addons)
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
        <div className='flex items-center justify-between border-b-1 pb-6'>
          <div>
            <h2 className='font-bold capitalize'>
              {plan} ({billingCycle})
            </h2>
            <button className='text-sm text-[#9699AA] underline' onClick={() => change()}>
              Change
            </button>
          </div>
          <span className='font-bold'>{formatPrice(chosenPlan.monthlyPrice, billingCycle)}</span>
        </div>
        <ul className='space-y-4 pt-4 text-sm text-[#9699aa]'>
          {addons.map((addon) => {
            console.log(products.addons)
            const addonDetails = products.addons.filter((a) => a.type === addon)[0]
            return (
              <li key={addon} className='flex items-center justify-between'>
                <span className=''>{addonDetails.name}</span>
                <span className='text-[#022959]'>
                  +{formatPrice(addonDetails.monthlyPrice, billingCycle)}
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default SummaryForm
