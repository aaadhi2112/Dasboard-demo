import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import NavSearch from '../../Components/NavSearch/NavSearch';
import NavNotice from '../../Components/NavNotice/NavNotice';
import NavAvatar from '../../Components/NavAvatar/NavAvatar';
import TotalSpentReport from '../../Components/TotalSpentReport/TotalSpentReport';
import WeeklyRevenueChart from '../../Components/WeeklyRevenueChart/WeeklyRevenueChart';
import DailyTrafficChart from '../../Components/DailyTrafficChart/DailyTrafficChart';
import YourPieChart from '../../Components/YourPieChart/YourPieChart';
import MyCalender from '../../Components/MyCalender/MyCalender';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import BarTop from '../../Components/BarTop/BarTop';



function Dashboard() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: '#e5fcf5'
  })

  const [moonClr, setMoonClr] = useState({
    color: 'rgb(155,155,155)'
  })
  const [darkSn, setDarkSn] = useState({
    color: 'rgb(147, 148, 149)',
    backgroundColor: 'white'
  })
  const [darkCom, setDarkCom] = useState({
    color: 'black',
    backgroundColor: 'white'
  })



  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setMoonClr({
        color: 'blueviolet'
      })
      setDarkSn({
        color: 'white',
        backgroundColor: 'rgb(59, 60, 60)'
      })
      setDarkCom({
        color: 'white',
        backgroundColor: 'rgb(59, 60, 60)'
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: '#e5fcf5'
      })
      setMoonClr({
        color: 'rgb(155,155,155)'
      })
      setDarkSn({
        color: 'rgb(147, 148, 149)',
        backgroundColor: 'white'
      })
      setDarkCom({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }

  // state to hold array items
  const [allItems, setAllItems] = useState([])

  // function creation
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/company')
    console.log(response.data);
    setAllItems(response.data)
  }
  console.log(allItems);

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>

    <div className='container3' style={myStyle}>

      <div className="topbar">
        <div className="pdmd">
          <p className='pd'>Pages / Dashboard</p>
          <h5 className='md'>Main Dashboard</h5>
        </div>
        <div className='navside' style={darkSn}>
          <NavSearch />
          <NavNotice />
          <div className='moondiv'>
            <button onClick={toggleStyle} style={moonClr}><i class="fa-solid fa-moon"></i></button>
          </div>
          <NavAvatar />
        </div>
      </div>

      <div className="bar1">
        <div className='bar1comdiv'>
        <div className=' row bar1com' style={darkCom}>
          <div className="col-4"><i class="fa-solid fa-chart-simple"></i></div>
          <div className="col-8" ><p>Earnings</p><h5>$350.4</h5></div>
        </div>
        <div className='row bar1com' style={darkCom}>
          <div className="col-4"><i class="fa-solid fa-dollar-sign"></i></div>
          <div className="col-8"><p>Spend this month</p><h5>$642.39</h5></div>
        </div>
        </div>

        <div className='bar1comdiv'>
        <div className='row bar1comsales' style={darkCom}>
          <div className="col-12"><p>Sales</p><h5>$574.34</h5><p><span style={{ color: "blue", fontSize: "11px" }}>+23%</span> since last month</p></div>
        </div>
        <div className='row bar1com' style={darkCom}>
          <div className="col-8"><p>Your balance</p><h5>$1000</h5></div>
          <div className="col-4"><img style={{ width: "40px", marginTop: "5px" }} src="https://static.vecteezy.com/system/resources/previews/022/109/084/non_2x/america-flag-round-shape-free-png.png" alt="" /></div>
        </div>
        </div>

        <div className='bar1comdiv'>
        <div className='row bar1com' style={darkCom}>
          <div className="col-4"><i class="fa-solid fa-check"></i></div>
          <div className="col-8"><p>New tasks</p><h5>154</h5></div>
        </div>
        <div className='row bar1com' style={darkCom}>
          <div className="col-4"><i class="fa-solid fa-file"></i></div>
          <div className="col-8"><p>Total projects</p><h5>2935</h5></div>
        </div>
        </div>

      </div>


      <div className="bar2">
        <div className="bar2com1" style={darkCom}>
          <div>
            <div className='tmon'><p><i class="fa-solid fa-calendar-days"></i> This month</p></div>
            <h4>$37.5K</h4>
            <p className='ts'>Total Spent <span style={{ color: "blue" }}> <i style={{ margin: "0px 0px 0px 10px" }} class="fa-solid fa-caret-up"></i> +2.45%</span></p>
            <p className='ot'><i class="fa-solid fa-circle-check"></i> On Track</p>

          </div>
          <div><TotalSpentReport/></div>
        </div>
        <div className="bar2com2" style={darkCom}>
          <h4>Weekly Revenue</h4>
          <div style={{ display: "flex", justifyContent: "center" }}><WeeklyRevenueChart /></div>
        </div>
      </div>

      <div className="bar3">
        <div className="bar3com1" style={darkCom}>

          <h3>Check Table</h3>

          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col" style={darkCom}>Name</th>
                <th scope="col" style={darkCom}>Progress</th>
                <th scope="col" style={darkCom}>Quantity</th>
                <th scope="col" style={darkCom}>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                allItems.map((item) => (
                  <tr>
                    <td style={darkCom}><p>{item.name}</p></td>
                    <td style={darkCom}><p>{item.progress}</p></td>
                    <td style={darkCom}><p>{item.quantity}</p></td>
                    <td style={darkCom}><p>{item.date}</p></td>
                  </tr>
                ))
              }
            </tbody>
          </table>



        </div>

        <div className="bar3com2" style={darkCom}>
          <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <p>Daily Traffic</p><p style={{ color: 'blue' }}><i style={{ margin: "0px 0px 0px 0px" }} class="fa-solid fa-caret-up"></i> +2.45%</p>
          </div>
          <h3>2.579 <span style={{ fontSize: "10px", color: "#9fa2a2" }}>visitors</span></h3>
          <div style={{ display: "flex", justifyContent: "center" }}><DailyTrafficChart /></div>
        </div>

        <div className="bar3com3" style={darkCom}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}><p style={{ fontWeight: '600', fontSize: '15px' }}>Your Pie Chart</p><p style={{ fontSize: "10px", color: "#9fa2a2" }}>Monthly <i style={{ margin: "0px 0px 0px 5px" }} class="fa-solid fa-caret-down"></i></p></div>
          <div style={{display:"flex",justifyContent:"center"}}><YourPieChart /></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='filesandsystem'>
              <div style={{ textAlign: "center" }}><p style={{ fontSize: "10px", fontWeight: "600" }}><i class="fa-solid fa-circle" style={{ marginRight: "5px", color: "blueviolet" }}></i>Your Files</p><p style={{ fontSize: "15px", fontWeight: "600", marginLeft: "15px" }}>63%</p></div>
              <div style={{ textAlign: "center" }}><p style={{ fontSize: "10px", fontWeight: "600" }}><i class="fa-solid fa-circle" style={{ marginRight: "5px", color: "#49fbe7" }}></i>System</p><p style={{ fontSize: "15px", fontWeight: "600", marginLeft: "20px" }}>25%</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bar4">
        <div className="bar4com1" style={darkCom}>
          <h3>Complex Table</h3>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col" style={darkCom}>Name</th>
                <th scope="col" style={darkCom}>Status</th>
                <th scope="col" style={darkCom}>Date</th>
                <th scope="col" style={darkCom}>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={darkCom}>Horizon UI Pro</th>
                <td style={darkCom}><i class="fa-solid fa-circle-check" style={{color:"green"}}></i> Approved</td>
                <td style={darkCom}>18 Apr 2022</td>
                <td>
                  <MDBProgress style={{marginTop:"10px",background:"#ccc8c8",borderRadius:"10px"}}>
                    <MDBProgressBar width={75} valuemin={0} valuemax={100} style={{background:"blueviolet"}}/>
                  </MDBProgress>
                </td>
              </tr>
              <tr>
                <th style={darkCom}>Horizon UI Free</th>
                <td style={darkCom}><i class="fa-solid fa-circle-xmark" style={{color:"red"}}></i> Disable</td>
                <td style={darkCom}>18 Apr 2022</td>
                <td>
                  <MDBProgress style={{marginTop:"10px",background:"#ccc8c8",borderRadius:"10px"}}>
                    <MDBProgressBar width={35} valuemin={0} valuemax={100} style={{background:"blueviolet"}}/>
                  </MDBProgress>
                </td>
              </tr>
              <tr>
                <th style={darkCom}>Marketplace</th>
                <td style={darkCom}><i class="fa-solid fa-circle-exclamation" style={{color:"yellow"}}></i> Error</td>
                <td style={darkCom}>20 May 2021</td>
                <td>
                  <MDBProgress style={{marginTop:"10px",background:"#ccc8c8",borderRadius:"10px"}}>
                    <MDBProgressBar width={85} valuemin={0} valuemax={100} style={{background:"blueviolet"}}/>
                  </MDBProgress>
                </td>
              </tr>
              <tr>
                <th style={darkCom}>Horizon UI Pro</th>
                <td style={darkCom}><i class="fa-solid fa-circle-check" style={{color:"green"}}></i> Approved</td>
                <td style={darkCom}>12 July 2021</td>
                <td>
                  <MDBProgress style={{marginTop:"10px",background:"#ccc8c8",borderRadius:"10px"}}>
                    <MDBProgressBar width={65} valuemin={0} valuemax={100} style={{background:"blueviolet"}}/>
                  </MDBProgress>
                </td>
              </tr>
            </tbody>
          </table>



        </div>

        <div className="bar4com2" style={darkCom}>
          <h4>Tasks</h4>
          <div className='tasksfull'>
            <div className='taskseach'>
              <input type="checkbox" /><p>Landing Page Design</p>
            </div>
            <div className='' style={{ margin: "12px 5px 0px 0px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='tasksfull'>
            <div className='taskseach'>
              <input type="checkbox" /><p>Dashboard Builder</p>
            </div>
            <div className='' style={{ margin: "12px 5px 0px 0px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='tasksfull'>
            <div className='taskseach'>
              <input type="checkbox" /><p>Mobile App Design</p>
            </div>
            <div className='' style={{ margin: "12px 5px 0px 0px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='tasksfull'>
            <div className='taskseach'>
              <input type="checkbox" /><p>Illustrations</p>
            </div>
            <div className='' style={{ margin: "12px 5px 0px 0px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='tasksfull'>
            <div className='taskseach'>
              <input type="checkbox" /><p>Promotional LP</p>
            </div>
            <div className='' style={{ margin: "12px 5px 0px 0px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
        </div>

        <div className="bar4com3" style={darkCom}>
          <MyCalender />
        </div>
      </div>


      <div className="bar5">
        <div className="bar5com1" style={darkCom}>
          <div className="bar5com1top">
            <div className='bsnslogoandtext'>
              <div><i class="fa-solid fa-fire-flame-curved"></i></div>
              <div><p>Business Design</p><h3>New lession is avaliable</h3></div>
            </div>
            <h2>What do you need to know to create better products?</h2>
          </div>
          <div className="bar5com1bottom">
            <span><i class="fa-regular fa-clock" style={{ color: "lightgreen" }}></i> 85 mins</span><span style={{ marginLeft: "30px" }}><i class="fa-regular fa-circle-play" style={{ color: "red" }}></i> Vedio format</span>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25%" }}>

              <div className='flex -space-x-1 overflow-hidden'>
                <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8" alt="" />
                <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="bar5com2" style={darkCom}>
          <div className='teammem'><h4>Team members</h4><i style={{ cursor: "pointer", color: "blueviolet" }} class="fa-solid fa-circle-plus"></i></div>

          <div className='memdiv'>
            <div className='row'>
              <div className='col-4'>
                <img src='https://th.bing.com/th/id/OIP.cp9FIltcCWx8ziIu_i6SFwHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3'
                  alt='' style={{ width: '40px', height: '38px' }} className='rounded-circle' />
              </div>
              <div className='col-8 memdetails'>
                <h3>Bane Parkson</h3>
                <p>Creative Director</p>
              </div>
            </div>
            <div className='' style={{ margin: "5px 5px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='memdiv'>
            <div className='row'>
              <div className='col-4'>
                <img src='https://images.squarespace-cdn.com/content/v1/57a2406c3e00be43a0605f34/1582514151380-UMZTN2YPQUXAFTTDVY3P/IMG_1671_pp.jpg'
                  alt='' style={{ width: '40px', height: '38px' }} className='rounded-circle' />
              </div>
              <div className='col-8 memdetails'>
                <h3>Christina Beck</h3>
                <p>Product Designer</p>
              </div>
            </div>
            <div className='' style={{ margin: "5px 5px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
          <div className='memdiv'>
            <div className='row'>
              <div className='col-4'>
                <img src='https://th.bing.com/th/id/OIP.QBUq_FNDWUwbwiR09wxMbQAAAA?w=208&h=256&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                  alt='' style={{ width: '40px', height: '38px' }} className='rounded-circle' />
              </div>
              <div className='col-8 memdetails'>
                <h3>Jason Statham</h3>
                <p>Graphic Designer</p>
              </div>
            </div>
            <div className='' style={{ margin: "0px 5px", cursor: "pointer" }}><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>

        </div>

        <div className="bar5com3" style={darkCom}>
          <img width={"80px"} src="https://static.vecteezy.com/system/resources/previews/015/698/681/original/touch-id-icon-illustration-in-flat-design-style-fingerprint-sign-for-security-interface-png.png" alt="fngrprint" />
          <h3>Control card with security in-app with a tap</h3>
          <p>Discover our cards benefits, with one tap .</p>
          <button>Cards</button>
        </div>

        <div className="bar5com4" style={darkCom}>
          <img className='starbucks' src="https://th.bing.com/th/id/R.2c8fd78fddb5e026041e9d4139748e2b?rik=JxEMX83mEvg9hQ&riu=http%3a%2f%2fwww.slate.com%2fcontent%2fdam%2fslate%2fblogs%2fmoneybox%2f2014%2f06%2f20%2fstarbucks_coffee_prices_they_re_going_up%2f89765584-starbucks-coffee-cup-and-beans-are-seen-in-this-photo.jpg.CROP.cq5dam_web_1280_1280_jpeg.jpg&ehk=K5bNA4Oabfb9f4NGli9y2%2fvF2%2fjwRn0uaXDgp7Di0F4%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <img className='starbuckslogo' src="https://www.pngplay.com/wp-content/uploads/9/Starbucks-Logo-Transparent-Free-PNG.png" alt="" />
          <h3>Starbucks</h3>
          <p><i class="fa-solid fa-burger"></i>10% cashback & off</p>
        </div>
      </div>




      <Footer />
    </div>
    </>
  )
}

export default Dashboard