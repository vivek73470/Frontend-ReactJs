import React from 'react'
import styled from 'styled-components'
import FilterSort from '../../Components/FilterSort/FilterSort'
import MusicAlbums from '../../Components/MusicAlbum/MusicAlbums'

function MusicRecords() {
    return (
        <>
        <div className='music-records-screen'>

            <div className='music-filter'>
            <FilterSort />
            </div>
            <div className='music-albums'>
            <MusicAlbums />
            </div>

        </div>
       
      
        </>
       
          
        
     
    )
}




export default MusicRecords
