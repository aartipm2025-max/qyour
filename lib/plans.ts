export type Plan = {
  id: string
  name: string
  price: number
  period: string
  pricePerMonth: number
}

export const PLANS: Plan[] = [
  { id: 'monthly',   name: 'Monthly',   price: 699,  period: '1 month',   pricePerMonth: 699  },
  { id: 'quarterly', name: 'Quarterly', price: 1799, period: '3 months',  pricePerMonth: 600  },
  { id: 'annual',    name: 'Annual',    price: 6299, period: '12 months', pricePerMonth: 525  },
]
