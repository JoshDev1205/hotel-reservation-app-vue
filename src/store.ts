import { defineStore } from 'pinia'

interface Hotel {
  name: string
  description: string
  id: number
  image: string
}

interface Dates {
  startDate: string
  endDate: string
}

interface Reservation {
  hotel: Hotel
  dates: Dates
}

export interface RootState {
  reservations: Reservation[]
}

const useStore = defineStore({
  id: 'mainStore',
  state: (): RootState => ({
    reservations: [],
  }),
  actions: {
    addReservation(hotel: Hotel, dates: Dates) {
      this.reservations = [...this.reservations, { hotel, dates }]
    },
  },
})

export default useStore
