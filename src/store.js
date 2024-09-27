import { create } from 'zustand'
import { addDays, addWeeks, addMonths, addYears } from 'date-fns'

const useRecurringDateStore = create((set, get) => ({
  startDate: new Date(),
  endDate: null,
  recurrenceType: 'none',
  recurrenceInterval: 1,
  selectedDays: [],
  nthDay: null,

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSelectedDays: (days) => set({ selectedDays: days }),
  setNthDay: (day) => set({ nthDay: day }),

  getRecurringDates: () => {
    const { startDate, endDate, recurrenceType, recurrenceInterval } = get()
    let dates = [startDate]
    let currentDate = startDate

    while ((!endDate || currentDate <= endDate) && dates.length < 100) {
      switch (recurrenceType) {
        case 'daily':
          currentDate = addDays(currentDate, recurrenceInterval)
          break
        case 'weekly':
          currentDate = addWeeks(currentDate, recurrenceInterval)
          break
        case 'monthly':
          currentDate = addMonths(currentDate, recurrenceInterval)
          break
        case 'yearly':
          currentDate = addYears(currentDate, recurrenceInterval)
          break
        default:
          return dates
      }
      if (currentDate > startDate) {
        dates.push(currentDate)
      }
    }

    return dates
  }
}))

export default useRecurringDateStore