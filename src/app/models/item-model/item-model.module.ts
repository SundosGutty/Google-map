export interface Item {
  _id: string
  name: string
  phone: string
  email: string
  location: {lat : number, lng : number}
  tasks: Array<Object>
  selected: boolean
}
