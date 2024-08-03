import React from 'react';
import './NavSearch.css';

function NavSearch() {
  return (
    <div className='search-bar'>
        <form className='search-form d-flex align-items-center' method='POST' action="#">
            <input type="text" name='querry' placeholder='Search' title='Enter search keyword'/>
            <button type='submit' title='Search'><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default NavSearch