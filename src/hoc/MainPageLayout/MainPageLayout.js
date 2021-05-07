import React, { Fragment, useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Search from './Search/Search'

const MainPageLayout = props => {

  const [isSearchOpened, setSearchOpened] = useState(false)

  const openSearch = () => {
    setSearchOpened(true)
    setTimeout(() => {
      document.querySelector('#searchInput').focus()
    }, 300)
  }

  const closeSearch = () => {
    setSearchOpened(false)
    document.querySelector('#searchInput').blur()
  }

    return (
      <Fragment>
        <Search opened={isSearchOpened} closeSearch={closeSearch} />
        <Header openSearch={openSearch} />
  
        { props.children }
  
       <Footer />
      </Fragment>
    )

}

export default MainPageLayout