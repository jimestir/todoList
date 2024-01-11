import { useState } from 'react'

export function useForm(initialValue = {}) {
  const [formState, setFormState] = useState(initialValue)
  const onResetForm = () => {
    setFormState(initialValue)
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
