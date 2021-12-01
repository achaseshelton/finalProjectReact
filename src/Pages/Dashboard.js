import React from 'react'
import { Row } from 'react-bootstrap'

export default function Dashboard(props) {
    return (
        <>
          <Row className="text-center display-2 text-bold m-2">Welcome {props.user.data.user_data.name}</Row>
          <Row>        
          </Row>
        </>
    )
}
