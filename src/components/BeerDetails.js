import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import axios from 'axios';
import {API_URL} from '../config';
import BeerDetailsCard from './BeerDetailsCard'
import {Spinner} from 'react-bootstrap'

export default function BeerDetails(props) {

    const [beer, setBeer] = useState([]);
    const id = props.match.params.beerId
 
    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
        .then((res) => {
            setBeer(res.data)
        })
    }, [id])

    return (
        <div>
            <Nav />
            {
                !beer.image_url ? <Spinner animation="border" variant="primary" role="status"></Spinner> : <BeerDetailsCard beer={beer}/>
            }
            
        </div>
    )
}
