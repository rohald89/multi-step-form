import { type addon } from '../../App'
import { formatPrice } from '../../utils'

type AddonProps = {
  addon: {
    id: number
    type: addon
    name: string
    description: string
    price: number
  }
  billingCycle: 'monthly' | 'yearly'
  updateFields: (addon: addon) => void
}

function Addon({ addon, billingCycle, updateFields }: AddonProps) {
  return (
    <li>
      <label htmlFor={addon.type} className='addon flex items-center gap-4'>
        <input
          className='h-5 w-5 appearance-none rounded-sm bg-contain bg-center bg-no-repeat ring-1 ring-[#D6D9E6] checked:bg-[#483EFF] checked:bg-check checked:ring-[#483EFF]'
          type='checkbox'
          name={addon.type}
          id={addon.type}
          value={addon.type}
          onChange={(e) => {
            updateFields(e.target.name as addon)
          }}
        />
        <div className='space-y-1'>
          <h2 className='text-base'>{addon.name}</h2>
          <p className='text-sm text-[#9699AA]'>{addon.description}</p>
        </div>
        <span className='ml-auto text-sm text-[#483EFF]'>
          +{formatPrice(addon.price, billingCycle)}
        </span>
      </label>
    </li>
  )
}

export default Addon
