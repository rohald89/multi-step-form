import { addon } from './App'

export default {
  plans: [
    {
      name: 'arcade',
      monthlyPrice: 9,
    },
    {
      name: 'advanced',
      monthlyPrice: 12,
    },
    {
      name: 'pro',
      monthlyPrice: 15,
    },
  ],
  addons: [
    {
      type: 'online' as addon,
      name: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
    },
    {
      type: 'storage' as addon,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
    },
    {
      type: 'profile' as addon,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
    },
  ],
}
