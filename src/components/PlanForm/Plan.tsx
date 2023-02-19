import { formatPrice } from '../../utils'
import { type PlanInfo } from '.'

type PlanProps = {
  name: string
  price: 9 | 12 | 15
  icon: React.ReactNode
  selected: boolean
  billingCycle: 'monthly' | 'yearly'
  updateFields: (fields: Partial<PlanInfo>) => void
}

function Plan({ name, price, selected, icon, billingCycle, updateFields }: PlanProps) {
  return (
    <li>
      <input
        className='peer hidden'
        type='radio'
        name='plan'
        id={name.toLowerCase()}
        value={name.toLowerCase()}
        checked={selected}
        onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
      />
      <label
        htmlFor={name}
        className='flex cursor-pointer rounded-lg border-1 border-[#D6D9E6] p-4 hover:border-[#483EFF] peer-checked:border-[#483EFF] peer-checked:bg-[#F8F9FF] md:flex-col'
      >
        {icon}
        <div className='ml-4 flex flex-col md:ml-0'>
          <span className='text-base font-bold capitalize md:mt-10'>{name}</span>
          <span className='pt-2 text-sm text-[#9699AA]'>{formatPrice(price, billingCycle)}</span>
          {billingCycle === 'yearly' && (
            <span className='text-#022959 pt-1 text-xs md:pt-[6px]'>2 months free</span>
          )}
        </div>
      </label>
    </li>
  )
}

export default Plan
