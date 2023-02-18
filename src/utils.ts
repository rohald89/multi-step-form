export const formatPrice = (price: number, billingCycle: 'monthly' | 'yearly') => {
  if (billingCycle === 'monthly') return `$${price}/mo`
  return `$${price * 10}/yr`
}
