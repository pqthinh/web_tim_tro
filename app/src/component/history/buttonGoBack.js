import { useHistory } from 'react-router-dom'

export default function ButtonGoBack({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}