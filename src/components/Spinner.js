import React from 'react'
import { Oval } from 'react-loader-spinner'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <Wrapper className='section'>
            <div className='spinner'>
                <Oval
                    type='Circles'
                    color="#00BFFF"
                    height={50}
                    width={200}
                    className=''
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

export default Spinner