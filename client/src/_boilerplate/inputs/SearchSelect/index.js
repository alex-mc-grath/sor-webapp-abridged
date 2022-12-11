import React, { useEffect, useState } from 'react';
import { StyledSearchSelect } from './Style';

// Dummy data
const REQUEST_URL = 'https://jonasjacek.github.io/colors/data.json';

export const SearchSelect = () => {
  const [state, setState] = useState({
    data: null,
    search: '',
    color: '',
  });

  const [filtered, setFiltered] = useState(null);

  //   useEffect(() => {
  //     fetch(REQUEST_URL)
  //       .then((response) => response.json())
  //       .then((data) => setState({ data }));

  //     setFiltered(data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
  //   });

  // Search inputx
  const onInput = (e) => setState({ [e.target.id]: e.target.value });
  // Select the wrapper and toggle class 'focus'
  const onFocus = (e) => e.target.parentNode.parentNode.classList.add('focus');
  const onBlur = (e) => e.target.parentNode.parentNode.classList.remove('focus');
  // Select item
  const onClickItem = (item) =>
    setState({
      search: '',
      color: item,
    });

  let { data, search, color } = state;
  //   useEffect(() => {
  //     if ((data !== null, search !== null)) {

  //     }
  //   }, [data]);

  return (
    <StyledSearchSelect>
      <div className='wrapper'>
        <div className='search'>
          <input id='search' type='search' value={state.search} placeholder='Search here...' onChange={onInput} onFocus={onFocus} onBlur={onBlur} autocomplete='off' />
          <i class='fas fa-search'></i>
        </div>
        {search.length > 1 && filtered.length > 0 && (
          <ul className='list'>
            {filtered.map((item) => (
              <li onClick={() => onClickItem(item)}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
      {color && (
        <p className='result'>
          <b>Color:</b>
          {color.name}
          <span className='box' style={{ backgroundColor: color.hexString }} />
          {color.hexString}
        </p>
      )}
    </StyledSearchSelect>
  );
};

// class Search extends React.Component {
//   state = {
//     data: null,
//     search: '',
//     color: '',
//   };
//   // fetch data
//   componentDidMount() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((data) => setState({ data }));
//   }
//   // Search input
//   onInput = (e) => this.setState({ [e.target.id]: e.target.value });
//   // Select the wrapper and toggle class 'focus'
//   onFocus = (e) => e.target.parentNode.parentNode.classList.add('focus');
//   onBlur = (e) => e.target.parentNode.parentNode.classList.remove('focus');
//   // Select item
//   onClickItem = (item) =>
//     this.setState({
//       search: '',
//       color: item,
//     });

//   render() {
//     let { data, search, color } = this.state;
//     if (!data) {
//       return <p>Loading</p>;
//     }
//     let filtered = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
//     return (
//       <div>
//         <div className='wrapper'>
//           <div className='search'>
//             <input id='search' type='search' value={this.state.search} placeholder='Search a color by name...' onChange={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur} autocomplete='off' />
//             <i class='fas fa-search'></i>
//           </div>
//           {search.length > 1 && filtered.length > 0 && (
//             <ul className='list'>
//               {filtered.map((item) => (
//                 <li onClick={() => this.onClickItem(item)}>{item.name}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//         {color && (
//           <p className='result'>
//             <b>Color:</b>
//             {color.name}
//             <span className='box' style={{ backgroundColor: color.hexString }} />
//             {color.hexString}
//           </p>
//         )}
//       </div>
//     );
//   }
// }
