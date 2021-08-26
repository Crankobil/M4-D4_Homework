import {Component} from 'react'
import {Form} from 'react-bootstrap'


class CommentArea extends Component {
setState

    render (){
        return(
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label text-dark>We would love to hear from you!</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        )
    }
}

export default CommentArea