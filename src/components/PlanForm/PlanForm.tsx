import Advanced from '../icons/Advanced'
import Arcade from '../icons/Arcade'
import Pro from '../icons/Pro'
import Plan from './Plan'

export type PlanInfo = {
  plan: 'arcade' | 'advanced' | 'pro'
  billingCycle: 'monthly' | 'yearly'
}

type PlanFormProps = PlanInfo & {
  updateFields: (fields: Partial<PlanInfo>) => void
}

const PLANS = [
  {
    id: 123,
    name: 'arcade',
    price: 9,
    icon: <Arcade />,
  },
  {
    id: 234,
    name: 'advanced',
    price: 12,
    icon: <Advanced />,
  },
  {
    id: 345,
    name: 'pro',
    price: 15,
    icon: <Pro />,
  },
]

function PlanForm({ plan, billingCycle, updateFields }: PlanFormProps) {
  return (
    <div className='flex flex-col gap-6 text-[#022959] md:mt-14'>
      <div className='flex flex-col gap-3 md:mb-4'>
        <h1 className='text-3xl font-bold text-[#022959]'>Select your plan</h1>
        <p className='text-base text-[#9699AA]'>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      {/* Radio buttons for plan selection  */}

      <ul className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4'>
        {PLANS.map(({ id, name, price, icon }) => (
          <Plan
            key={id}
            name={name}
            price={price as 9 | 12 | 15}
            icon={icon}
            selected={plan === name}
            billingCycle={billingCycle}
            updateFields={updateFields}
          />
        ))}
      </ul>

      <div className='rounded-lg bg-[#F8F9FF] py-4'>
        {/* Toggle billing Cycle */}
        <div className='flex items-center justify-center gap-6'>
          <button
            className={`cursor-pointer text-sm font-semibold
            ${billingCycle === 'monthly' ? 'text-[#022959]' : 'text-[#9699AA]'}`}
            onClick={() => updateFields({ billingCycle: 'monthly' })}
          >
            Monthly
          </button>
          <label
            htmlFor='default-toggle'
            className='relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full bg-[#022959]'
          >
            <input
              type='checkbox'
              value=''
              id='default-toggle'
              className='peer sr-only'
              onChange={(e) =>
                updateFields({
                  billingCycle: e.target.checked ? 'yearly' : 'monthly',
                })
              }
              checked={billingCycle === 'yearly'}
            />
            <div className="peer h-5 w-10 rounded-full after:absolute after:top-[7px] after:left-[7px] after:h-3.5 after:w-3.5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div>
          </label>
          <button
            className={`cursor-pointer text-sm font-semibold
            ${billingCycle === 'yearly' ? 'text-[#022959]' : 'text-[#9699AA]'}`}
            onClick={() => updateFields({ billingCycle: 'yearly' })}
          >
            Yearly
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanForm
