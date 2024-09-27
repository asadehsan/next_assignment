'use client';

import React from 'react'
import useRecurringDateStore from '../store'

const RecurrenceOptions = () => {
  const recurrenceType = useRecurringDateStore(state => state.recurrenceType)
  const recurrenceInterval = useRecurringDateStore(state => state.recurrenceInterval)
  const setRecurrenceType = useRecurringDateStore(state => state.setRecurrenceType)
  const setRecurrenceInterval = useRecurringDateStore(state => state.setRecurrenceInterval)

  return (
    <div className="recurrence-options">
      <select value={recurrenceType} onChange={(e) => setRecurrenceType(e.target.value)}>
        <option value="none">No Recurrence</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {recurrenceType !== 'none' && (
        <input
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(parseInt(e.target.value) || 1)}
        />
      )}
    </div>
  )
}

export default RecurrenceOptions