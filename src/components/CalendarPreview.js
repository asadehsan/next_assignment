'use client';

import React, { useMemo } from 'react'
import { format } from 'date-fns'
import useRecurringDateStore from '../store'

const CalendarPreview = () => {
  const getRecurringDates = useRecurringDateStore(state => state.getRecurringDates)
  const startDate = useRecurringDateStore(state => state.startDate)
  const endDate = useRecurringDateStore(state => state.endDate)
  const recurrenceType = useRecurringDateStore(state => state.recurrenceType)
  const recurrenceInterval = useRecurringDateStore(state => state.recurrenceInterval)

  const recurringDates = useMemo(() => getRecurringDates(), [
    startDate, endDate, recurrenceType, recurrenceInterval, getRecurringDates
  ])

  return (
    <div>
      <h3>Recurring Dates Preview</h3>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index}>{format(date, 'MM/dd/yyyy')}</li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarPreview