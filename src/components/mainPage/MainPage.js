import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../hoc/Layout/Layout'


class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>
          MainPage
        </h1>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)