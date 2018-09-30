import React, { Component } from 'react';
import { Transition } from 'react-spring';
import RawHtml from 'react-raw-html';
import ScrollAnchor from '../ScrollAnchor';
import styles from './index.module.scss';
import data from '../../data/HeroSection';

const messages = data.messages;
class AppHero extends Component {
  constructor() {
    super();
    this.state = {
      words: [messages[0]],
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (!document.hasFocus()) {
        return;
      }
      
      messages.push(messages.shift());
      this.setState(
        {
          words: this.state.words.concat(messages[0])
        },
        () => {
          this.setState({
            words: this.state.words.splice(1)
          });
        }
      );
    }, 2500);
  }

  render() {
    return (
      <div className={styles.AppHero}>
        <div className={styles.columns}>
          <div className={styles.colImage}>
            <img src={data.image} alt="It's me!" />
          </div>
          <div className={styles.colText}>
            <h2>
              <RawHtml.div>{data.heading}</RawHtml.div>
              <div className={styles.rotatorWrapper}>
                <span className={styles.rotatorPlaceholder}>{this.state.words[0]}</span>
                <Transition
                  keys={this.state.words.map(item => item)}
                  from={{
                    opacity: 0,
                    transform: "translateY(100%)"
                  }}
                  enter={{
                    opacity: 1,
                    transform: "translateY(0%)"
                  }}
                  leave={{
                    opacity: 0,
                    transform: "translateY(-100%)"
                  }}
                >
                  {this.state.words.map(item => transition => (
                    <span className={styles.rotator} style={transition}>{item}</span>
                  ))}
                </Transition>
              </div>
              {data.heading2}
            </h2>
            <div>
              <RawHtml.div>{data.bio}</RawHtml.div>
            </div>
          </div>
        </div>
        <ScrollAnchor to="#about" />
      </div>
    );
  }
}

export default AppHero;
