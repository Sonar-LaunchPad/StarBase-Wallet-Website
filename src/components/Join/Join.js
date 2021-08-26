import React from 'react'
import Container from '../Container'

import twitter from './twitter@3x.png'
import github from './github@3x.png'
import telegram from './telegram@3x.png'
import reddit from './reddit@3x.png'

import './Join.scss'

function Join() {
  return (
    <Container clipped={false}>
      <div className="Section-head">
        <div className="Section-text">
          The StarBase Wallet <br />Community Welcomes You
        </div>
        <div className="Section-info">
          Keep up to date with StarBase related. You’ll be the first to know about new features, issues and more!
        </div>
        <div className="Section-join">
          <div className="Join-item">
            <a href="https://twitter.com/StarBasebyhs" target="_blank" rel="noopener noreferrer">
              <img className="Join-image" src={twitter} alt="Twitter" />
            </a>
          </div>
          <div className="Join-item">
            <a href="https://github.com/deploystarship/" target="_blank" rel="noopener noreferrer">
              <img className="Join-image" src={github} alt="github" />
            </a>
          </div>
          <div className="Join-item">
            <a href="https://t.me/StarBase_announcements" target="_blank" rel="noopener noreferrer">
              <img className="Join-image" src={telegram} alt="telegram" />
            </a>
          </div>
          <div className="Join-item">
            <a href="https://www.reddit.com/r/StarBaseWallet/" target="_blank" rel="noopener noreferrer">
              <img className="Join-image" src={reddit} alt="reddit" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Join

