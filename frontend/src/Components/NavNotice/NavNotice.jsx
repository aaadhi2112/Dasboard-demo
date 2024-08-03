import React from 'react';
import './NavNotice.css';

function NavNotice() {
  return (
    
    <li className="nav-item dropdown" style={{listStyle:"none"}}>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
      <i class="fa-solid fa-bell"></i>
      <span className='badge-number' style={{backgroundColor:"blueviolet"}}>4</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>You have 3 new notifications
          <a href="#"><span className='badge rounded-pill p-2 ms-2' style={{backgroundColor:"blueviolet"}}>View all</span></a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li className="notification-item">
          <div>
            <h4>John Smith</h4>
            <p>This is a demo message with no content</p>
            <p>3 min. ago</p>
          </div>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li className="notification-item">
          <div>
            <h4>John Smith</h4>
            <p>This is a demo message with no content</p>
            <p>1 hour. ago</p>
          </div>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li className="notification-item">
          <div>
            <h4>John Smith</h4>
            <p>This is a demo message with no content</p>
            <p>3 hour. ago</p>
          </div>
        </li>
        <li><hr className="dropdown-divider" /></li>

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
        

      </ul>
    </li>
  )
}

export default NavNotice