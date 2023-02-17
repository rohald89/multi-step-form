type UserInfo = {
  name: string
  email: string
  phone: string
}

type InfoFormProps = UserInfo & {
  updateFields: (fields: Partial<UserInfo>) => void
}

function InfoForm({ name, email, phone, updateFields }: InfoFormProps) {
  return (
    <div className='flex flex-col gap-4 text-[#022959] md:mt-14'>
      <h1 className='text-3xl font-bold text-[#022959]'>Personal Info</h1>
      <p className='text-base text-[#9699AA]'>
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor='name' className='flex flex-col gap-2'>
        <span className=''>Name</span>
        <input
          className='rounded-lg px-4 py-[15px] text-base font-semibold leading-4 outline-none ring-1 ring-[#D6D9E6] focus:ring-[#483EFF]'
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </label>
      <label htmlFor='email' className='flex flex-col gap-2'>
        <span className=''>Email</span>
        <input
          className='rounded-lg px-4 py-[15px] text-base font-semibold leading-4 outline-none ring-1 ring-[#D6D9E6] focus:ring-[#483EFF]'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </label>
      <label htmlFor='phone' className='flex flex-col gap-2'>
        <span className=''>Phone</span>
        <input
          className='rounded-lg px-4 py-[15px] text-base font-semibold leading-4 outline-none ring-1 ring-[#D6D9E6] focus:ring-[#483EFF]'
          type='tel'
          name='phone'
          id='phone'
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </label>
    </div>
  )
}

export default InfoForm
