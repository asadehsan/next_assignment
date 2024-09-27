'use client';

import React from 'react'
import { format } from 'date-fns'

const DatePicker = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="date"
        value={value ? format(value, 'yyyy-MM-dd') : ''}
        onChange={(e) => onChange(e.target.value ? new Date(e.target.value) : null)}
      />
    </div>
  )
}

export default DatePicker