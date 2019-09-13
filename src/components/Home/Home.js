import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

    UNSAFE_componentWillMount() {
        const script1 = document.createElement('script')
    
        script1.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js'
    
    
        document.body.appendChild(script1)
      }

    exampleCallback = () => {
        console.log('Order complete!');
    };

    createWidget = () => window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '70814591349',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-70814591349',
        onOrderComplete: this.exampleCallback
    });

    render() {
        return (
            <div className="Home">
                <div className="buttonContainer">
                    <button id="eventbrite-widget-modal-trigger-70814591349" type="button">Buy Tickets</button>
                </div>
                <div className="aboutContainer">
                    <p>Welcome to the 2020 RMGS</p>
                    <h1>About this event</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea. Tellus in metus vulputate eu. Et magnis dis parturient montes nascetur ridiculus mus. Donec et odio pellentesque diam volutpat commodo sed. Facilisis gravida neque convallis a cras semper. Senectus et netus et malesuada fames ac turpis egestas. Tincidunt augue interdum velit euismod in pellentesque. Sed augue lacus viverra vitae. Ut tellus elementum sagittis vitae et leo. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Potenti nullam ac tortor vitae purus faucibus ornare. Tincidunt id aliquet risus feugiat in ante metus dictum. Egestas erat imperdiet sed euismod nisi porta lorem. Neque sodales ut etiam sit amet nisl.</p>
                    <p>Ultricies mi eget mauris pharetra. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Ultrices in iaculis nunc sed. Eget lorem dolor sed viverra ipsum. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vulputate sapien nec sagittis aliquam. A arcu cursus vitae congue. Parturient montes nascetur ridiculus mus mauris vitae. Commodo elit at imperdiet dui. Arcu felis bibendum ut tristique et egestas quis. Nam at lectus urna duis convallis convallis tellus id. Egestas sed tempus urna et pharetra. Ultrices in iaculis nunc sed augue. Pharetra massa massa ultricies mi quis hendrerit dolor magna. A lacus vestibulum sed arcu non odio euismod lacinia at. Donec massa sapien faucibus et molestie ac feugiat sed lectus.</p>
                    <p>Est placerat in egestas erat imperdiet. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Eu nisl nunc mi ipsum faucibus vitae aliquet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Ultricies mi eget mauris pharetra. Mattis aliquam faucibus purus in massa tempor. Amet mauris commodo quis imperdiet massa tincidunt. Morbi leo urna molestie at elementum eu facilisis sed odio. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Purus sit amet luctus venenatis lectus magna fringilla. Leo integer malesuada nunc vel. Viverra mauris in aliquam sem. Lectus quam id leo in vitae turpis massa sed elementum. Orci phasellus egestas tellus rutrum tellus pellentesque eu.</p>
                    {/* <a>Add to Calendar</a> */}
                    <div className="logisticsContainer">
                        <div className="dateTimeCont">
                            <h1>September Something</h1>
                            <h1>Time time time</h1>
                        </div>
                        <div className="locationCont">
                            <h1>Dallas, TX</h1>
                            <p>Risus viverra adipiscing at in tellus integer feugiat. Amet purus gravida quis blandit turpis cursus in. A arcu cursus vitae congue mauris rhoncus aenean vel. Blandit libero volutpat sed cras ornare. Pulvinar pellentesque habitant morbi tristique senectus et. Tempor nec feugiat nisl pretium fusce id.</p>
                            {/* <a>View Map</a> */}
                        </div>
                    </div>         
                </div>
            </div>
        )
    }
}

export default Home;