import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecord } from '../../Redux/action';
import { useLocation, useSearchParams } from 'react-router-dom';

function MusicAlbums() {
  const dispatch = useDispatch();
  const[searchParams]= useSearchParams();
  const musicRecords = useSelector((store) => store.musicRecords)
const location = useLocation();
// console.log(location)

  // whenever filters in FilterComponents changes, the music album should re-render with same filter


  useEffect (()=>{
    if(location || musicRecords.length === 0){
      const genre = searchParams.getAll("genre");
      const queryParams ={
        params:{
          genre: genre,
          _sort: searchParams.get("sortBy") && "year",
          _order: searchParams.get("sortBy"),
        },
      };
   
        dispatch(getMusicRecord(queryParams));
    }

  },[location.search]);
// every time when search is render then above logic is re-render


  return (
<>

  {musicRecords.length >0 && musicRecords.map((album)=>{
    return(
      <div key={album.id}>
        <div>{album.name}</div>
        <div><img src={album.img}/></div>
        <div>{album.genre}</div>
        <div>{album.year}</div>
        </div>
    )
  })}

</>
  )
}

export default MusicAlbums