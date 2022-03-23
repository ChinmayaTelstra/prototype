import React, { useEffect , useState} from 'react'
import DefaultLayout from './DefaultLayout'
import axios from 'axios'
import { Col, Input, Row } from 'antd'

function API() {
    const [meals , setmeals] = useState([])
    const [dupmeals , setdupmeals] = useState([])
    useEffect(() => {

        async function getData(){

            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=RXWN7kqL5g3sxcBG27yzLvwhX1iHCTXc&limit=10&rating=g')

                setmeals(response.data.data)
                setdupmeals(response.data.data)
                console.log(response)
            } catch (error) {
                console.log(error)
            }

        }

        getData()

    }, [])

    function searchItems(value){

        var filteredItems = dupmeals.filter(meal=>meal.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

        setmeals(filteredItems)

    }

    return (
        <DefaultLayout>

            <div className='m-2'>
                <Input style={{width:'30%' , marginLeft:50}} placeholder='Search Title' onChange={(e)=>{searchItems(e.target.value)}}/>
                <Row gutter={16} justify='center' className='mt-5'>
                    {meals.map(meal=>{
                        return <Col lg={5} sm={24} className='text-center bs m-3'>
                            <b><p>{meal.type}</p></b>
                            <img src={meal.images.downsized.url} alt="" height="200" />
                            <p><b>Title : </b>{meal.title}</p>
                        </Col>
                    })}
                </Row>
            </div>

        </DefaultLayout>
    )
}

export default API