// import React from 'react'
// import TextField from '@mui/material/TextField'
// import Autocomplete from '@mui/material/Autocomplete'
// import RaceCard from './RaceCard'

// const SearchBar = ({ races }) => {

//   const [raceSearch, setRaceSearch] = React.useState('')

//   const handleChange = (value) => {
//     const selectedRace = value
//     setRaceSearch(selectedRace)
//   }

//   return (
//     <div>
//       <div className='stacked-song-group'>
//         <div className='stacked-song-list'>
//           <Autocomplete
//             disablePortal
//             id='combo-box-demo'
//             options={races}
//             getOptionLabel={(races) => races.track + ' - ' + races.driver_name}
//             sx={{ width: '100%' }}
//             renderInput={(params) => <TextField {...params} label='Search for a track or driver' />}
//             onChange={(event, value, reason) => handleChange(value)}
//           />
//           <RaceCard races={raceSearch} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchBar;
