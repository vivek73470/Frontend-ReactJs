import React from 'react'
import styled from 'styled-components'
import FilterSort from '../Components/FilterSort'
import MusicAlbums from '../Components/MusicAlbums'

function MusicRecords() {
    return (
        <Wrapper>
            <WrapperFilterSort>
                <FilterSort />
            </WrapperFilterSort>
            <MusicAlbums />
        </Wrapper>
    )
}

const Wrapper = styled.div`
border: 1px solid red;
display:flex;
height:100vh;
`
const WrapperFilterSort = styled.div`
width:200px;
border:1px solid black;
`

export default MusicRecords
