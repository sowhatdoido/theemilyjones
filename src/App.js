import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import SiteNavigation from './components/SiteNavigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageTop: true,
      visibleNav: true,
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState(
      reduceVisibleNav(
        reducePageTop(this.state)
      )
    );
  }

  render() {
    return (
      <div className="App">
        <SiteNavigation
          small={!this.state.pageTop}
          hidden={!this.state.visibleNav}
        />
        <Fade
          bottom
          duration={500}
        >
          <HeroSection />
        </Fade>
        <div id="about">
          <Fade
            bottom
            duration={500}
          >
            <AboutSection />
          </Fade>
        </div>
        <div id="work">
          <Fade
            bottom
            duration={500}
          >
            <WorkSection />
          </Fade>
        </div>
        <div id="contact">
          <Fade
            bottom
            duration={500}
          >
            <ContactSection />
          </Fade>
        </div>
        <SiteFooter />
      </div>
    );
  }
}

function reducePageTop(state) {
  if (window.scrollY !== 0) {
    return {
      ...state,
      pageTop: false,
    };
  } else{
    return {
      ...state,
      pageTop: true,
    };
  }
}

let prevScroll = 0;
function reduceVisibleNav(state) {
  const down = prevScroll < window.scrollY;
  prevScroll = window.scrollY;
  if (window.scrollY < 60 || !down) {
    return {
      ...state,
      visibleNav: true,
    };
  } else{
    return {
      ...state,
      visibleNav: false,
    };
  }
}

export default App;
