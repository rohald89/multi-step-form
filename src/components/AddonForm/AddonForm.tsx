import { addon } from '../../App'
import Addon from './Addon'

export type AddonInfo = {
  addon: 'online' | 'storage' | 'profile'
  billingCycle: 'monthly' | 'yearly'
}

type AddonFormProps = {
  billingCycle: 'monthly' | 'yearly'
  updateFields: (addon: addon) => void
}

const ADDONS = [
  {
    id: 321,
    type: 'online' as addon,
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 432,
    type: 'storage' as addon,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 543,
    type: 'profile' as addon,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
]

function AddonForm({ billingCycle, updateFields }: AddonFormProps) {
  return (
    <div className='flex flex-col gap-6 text-[#022959] md:mt-14'>
      <div className='flex flex-col gap-3 md:mb-4'>
        <h1 className='text-3xl font-bold text-[#022959]'>Pick add-ons</h1>
        <p className='text-base text-[#9699AA]'>Add-ons help enhance your gaming experience.</p>
      </div>
      <ul className='space-y-3'>
        {ADDONS.map((addon) => (
          <Addon
            key={addon.id}
            addon={addon}
            billingCycle={billingCycle}
            updateFields={updateFields}
          />
        ))}
      </ul>
    </div>
  )
}

export default AddonForm
