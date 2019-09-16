import React, { Component } from 'react'
// import Header from "../Header/Header";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div id="Home">
        {/* <Header /> */}
        <div className="buttonContainer">
          <p></p>
          <p></p>
          <button className="tickets">Buy Tickets</button>
        </div>
        <div className="aboutContainer">
          <p>Welcome to the 2020 RMGS</p>
          <h1>About this event</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            viverra tellus in hac habitasse platea. Tellus in metus vulputate
            eu. Et magnis dis parturient montes nascetur ridiculus mus. Donec et
            odio pellentesque diam volutpat commodo sed. Facilisis gravida neque
            convallis a cras semper. Senectus et netus et malesuada fames ac
            turpis egestas. Tincidunt augue interdum velit euismod in
            pellentesque. Sed augue lacus viverra vitae. Ut tellus elementum
            sagittis vitae et leo. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Potenti nullam ac tortor vitae purus
            faucibus ornare. Tincidunt id aliquet risus feugiat in ante metus
            dictum. Egestas erat imperdiet sed euismod nisi porta lorem. Neque
            sodales ut etiam sit amet nisl.
          </p>
          <p>
            Ultricies mi eget mauris pharetra. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient. Ultrices in iaculis nunc sed.
            Eget lorem dolor sed viverra ipsum. Massa massa ultricies mi quis
            hendrerit dolor magna eget est. Vulputate sapien nec sagittis
            aliquam. A arcu cursus vitae congue. Parturient montes nascetur
            ridiculus mus mauris vitae. Commodo elit at imperdiet dui. Arcu
            felis bibendum ut tristique et egestas quis. Nam at lectus urna duis
            convallis convallis tellus id. Egestas sed tempus urna et pharetra.
            Ultrices in iaculis nunc sed augue. Pharetra massa massa ultricies
            mi quis hendrerit dolor magna. A lacus vestibulum sed arcu non odio
            euismod lacinia at. Donec massa sapien faucibus et molestie ac
            feugiat sed lectus.
          </p>
          {/* <a>Add to Calendar</a> */}
        </div>
        <div className="logisticsContainer">
          <div className="dateTimeCont">
            <h1>September Something</h1>
            <h1>Time time time</h1>
          </div>
          <div className="locationCont">
            <h1>Dallas, TX</h1>
            <p>
              Risus viverra adipiscing at in tellus integer feugiat. Amet purus
              gravida quis blandit turpis cursus in. A arcu cursus vitae congue
              mauris rhoncus aenean vel. Blandit libero volutpat sed cras
              ornare. Pulvinar pellentesque habitant morbi tristique senectus
              et. Tempor nec feugiat nisl pretium fusce id.
            </p>
            {/* <a>View Map</a> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
