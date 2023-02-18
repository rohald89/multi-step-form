type PlanInfo = {
  plan: 'arcade' | 'advanced' | 'pro'
  billingCycle: 'monthly' | 'yearly'
}

type PlanFormProps = PlanInfo & {
  updateFields: (fields: Partial<PlanInfo>) => void
}

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
        <li>
          <input
            className='peer hidden'
            type='radio'
            name='plan'
            id='arcade'
            value='arcade'
            checked={plan === 'arcade'}
            onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
          />
          <label
            htmlFor='arcade'
            className='flex cursor-pointer flex-col rounded-lg border-1 border-[#D6D9E6] p-4 hover:border-[#483EFF] peer-checked:border-[#483EFF] peer-checked:bg-[#F8F9FF]'
          >
            <span className='text-base font-bold'>Arcade</span>
            <span className='text-sm text-[#9699AA]'>$9/mo</span>
          </label>
        </li>
        <li>
          <input
            className='peer hidden'
            type='radio'
            name='plan'
            id='advanced'
            value='advanced'
            checked={plan === 'advanced'}
            onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
          />
          <label
            htmlFor='advanced'
            className='flex cursor-pointer flex-col rounded-lg border-1 border-[#D6D9E6] p-4 hover:border-[#483EFF] peer-checked:border-[#483EFF] peer-checked:bg-[#F8F9FF]'
          >
            <span className='text-base font-bold'>Advanced</span>
            <span className='text-sm text-[#9699AA]'>$12/mo</span>
          </label>
        </li>
        <li>
          <input
            className='peer hidden'
            type='radio'
            name='plan'
            id='pro'
            value='pro'
            checked={plan === 'pro'}
            onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
          />
          <label
            htmlFor='pro'
            className='flex cursor-pointer flex-col rounded-lg border-1 border-[#D6D9E6] p-4 hover:border-[#483EFF] peer-checked:border-[#483EFF] peer-checked:bg-[#F8F9FF]'
          >
            <span className='text-base font-bold'>Pro</span>
            <span className='text-sm text-[#9699AA]'>$15/mo</span>
          </label>
        </li>
      </ul>
      {/* <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <input
            type='radio'
            name='plan'
            id='arcade'
            value='arcade'
            checked={plan === 'arcade'}
            onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
          />
          <label htmlFor='arcade' className='flex flex-col gap-2'>
            <span className='text-base font-bold'>Arcade</span>
            <span className='text-sm text-[#9699AA]'>For small teams or freelancers</span>
          </label>
        </div>
        <div className='flex items-center gap-4'>
          <input
            type='radio'
            name='plan'
            id='advanced'
            value='advanced'
            checked={plan === 'advanced'}
            onChange={(e) => updateFields({ plan: e.target.value as PlanInfo['plan'] })}
          />
          <label htmlFor='advanced' className='flex flex-col gap-2'>
            <span className='text-base font-bold'>Advanced</span>
            <span className='text-sm text-[#9699AA]'>For growing teams or small businesses</span>
          </label>
        </div>
      </div> */}
    </div>
  )
}

export default PlanForm
