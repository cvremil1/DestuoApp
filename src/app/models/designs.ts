


export interface DesignsData {
  data: Designs[]
  count: number
  message: string
  status: string
}

export interface Designs {
  id: number
  title: string
  description: string
  price: number
  imageurl: string
  addtoCart: boolean
}