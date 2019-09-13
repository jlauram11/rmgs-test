import React, { Component } from 'react'
import '../Collapsible/Collapsible.css'

class Collapsible extends Component {
  render() {
    let links = {
      podcasts: 'https://kodybateman.com/podcast/',
      events: 'https://www.sendoutcards.com/resources/sendoutcards-events/',
      sendoutcards: 'https://www.sendoutcards.com/app/catalog/',
    }

    return (
      <div className="menu">
        <div className="content">
          <a href={links.podcasts}>
            <ul className="collapsibleItem" id="item2">
              Podcasts
            </ul>
          </a>
          <a href={links.events}>
            <ul className="collapsibleItem" id="item3">
              Events
            </ul>
          </a>
          <a href={links.sendoutcards}>
            <ul className="collapsibleItem" id="item4">
              SendOutCards
            </ul>
          </a>
        </div>
      </div>
    )
  }
}

export default Collapsible
