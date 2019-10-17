import 'isomorphic-fetch'

import BodyStyle, { ContainerButton, ContainerInput } from '../styles/body'
import { ErrorStyle, RequestingStyle } from '../styles/ui'
import React, { Fragment, useEffect, useState } from 'react'

import Button from './ui/button'
import Input from './ui/input'
import calculatePrice from '../utils/calculatePrice'
import config from '../config'
import trimDecimals from '../utils/trimDecimals'
import trimValueWithMilles from '../utils/trimValueWithMilles'
import { useInterval } from '../hooks/interval'

const Body = () => {
  const initialState = { successful: false, usdPrice: 0, requesting: false, error: false }
  const [quantity, setQuantity] = useState()
  const [totalPrice, setTotalPrice] = useState()
  const [dataAPI, setDataAPI] = useState(initialState)

  const {successful, usdPrice, requesting, error} = dataAPI

  const getTotalPrice = () => setTotalPrice(calculatePrice(quantity, usdPrice).toLocaleString())

  const {getNewDatams, accessKey, url} = config

  const fetchApi = async () => {
    try {
      setDataAPI({...initialState, requesting: true})
      const result = await fetch(`${url}${accessKey}`)
      const { rates: { USD } } = await result.json()
      setDataAPI({...initialState, requesting: false, successful: true, usdPrice: trimDecimals(USD) })
    } catch (e) {
      setDataAPI({...initialState, error: true})
    }
  }

  useInterval(async() => {
    await fetchApi()
  }, getNewDatams)

  useEffect(() => {
    (async () => {
      await fetchApi()
    })()
  }, [])

  const trimValue = (e) => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d+\.?\d{0,4}$/)) {
      setQuantity(amount)
    }
  }

  return (
    <BodyStyle>
      {successful &&
        <Fragment>
          <ContainerInput>
            <Input value={quantity}
              handleChange={trimValue}
              label="€"
              placeholder="Amount of euros to calculate"
              handleEnterPress={e => { (e.key === 'Enter') && setTotalPrice(getTotalPrice) }}
              focus
            />
            <Input value={trimValueWithMilles(totalPrice)} placeholder="USD value" label="$" disabled />
          </ContainerInput>
          <ContainerButton>
            <Button handleClick={() => {setTotalPrice(getTotalPrice)}} />
          </ContainerButton>
        </Fragment>
      }
      {requesting && <RequestingStyle>Calculate USD price <span role="img" aria-label="wait">⌛</span></RequestingStyle>}
      {error && <ErrorStyle>There were a problem getting the USD price <span role="img" aria-label="error">❌</span></ErrorStyle>}
    </BodyStyle>
  )
}

export default Body
