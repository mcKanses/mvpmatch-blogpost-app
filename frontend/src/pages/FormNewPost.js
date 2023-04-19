import React from 'react'

const FormNewPost = () => {
  return (
    <form>
      <input type="text" placeholder="Title" minLength={2} required />
      <textarea></textarea>
      <input type="submit" />
    </form>
  )
}

export default FormNewPost