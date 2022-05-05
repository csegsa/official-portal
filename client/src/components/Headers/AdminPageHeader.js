import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'
// core components
import { prepView } from './EventPageHeader'

const AdminPageHeader = () => {
  const pageHeader = React.createRef()

  React.useEffect(() => {
    prepView(pageHeader)
  })

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(' + require('assets/img/fabio-mangione.jpg').default + ')'
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Admin Portal</h1>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AdminPageHeader
