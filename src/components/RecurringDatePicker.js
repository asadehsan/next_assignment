'use client';

import React from 'react'
import useRecurringDateStore from '../store'
import DatePicker from './DatePicker'
import RecurrenceOptions from './RecurrenceOptions'
import CalendarPreview from './CalendarPreview'

const RecurringDatePicker = () => {
  const startDate = useRecurringDateStore(state => state.startDate)
  const endDate = useRecurringDateStore(state => state.endDate)
  const setStartDate = useRecurringDateStore(state => state.setStartDate)
  const setEndDate = useRecurringDateStore(state => state.setEndDate)

  return (
    <div>
      <h2>Recurring Date Picker</h2>
      <DatePicker label="Start Date" value={startDate} onChange={setStartDate} />
      <DatePicker label="End Date" value={endDate} onChange={setEndDate} />
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  )
}

export default RecurringDatePicker