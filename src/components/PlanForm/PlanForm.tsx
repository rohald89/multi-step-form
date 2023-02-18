import Advanced from '../icons/Advanced'
import Arcade from '../icons/Arcade'
import Pro from '../icons/Pro'
import Plan from '../Plan/Plan'

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
    </div>
  )
}

export default PlanForm
