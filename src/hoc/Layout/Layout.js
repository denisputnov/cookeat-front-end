import React, { Fragment } from 'react'

const Layout = props => {
  return (
    <Fragment>
      <header>
        Header
      </header>

      { props.children }

      <footer>
        Footer
      </footer>
    </Fragment>
  )
}

export default Layout