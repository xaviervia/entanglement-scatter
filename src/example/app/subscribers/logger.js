import { connect } from 'redux-haiku'

const subscriber = ({ messages }) => {
  console.log('new message', messages)
}

const selector = (state) => state

export default connect(selector)(subscriber)
