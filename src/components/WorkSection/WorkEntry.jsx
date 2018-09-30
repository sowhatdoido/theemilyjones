import React, {Component} from 'react';
import ReactModal from 'react-modal';
import RawHtml from 'react-raw-html';
import styles from './WorkEntry.module.scss';

class WorkEntry extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div
        className={styles.WorkEntry}
        onClick={(e) => {e.preventDefault(); this.toggleModal();}}
      >
        <h3 className={styles.heading}>{this.props.name}</h3>
        <p>{this.props.shortPosition || this.props.position}</p>
        <a href="#/">
          learn more
        </a>
        <ReactModal
          isOpen={this.state.modal}
          ariaHideApp={false}
          style={{
            content: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: 'none',
              borderRadius: 0,
            }
          }}
        >
          <button
            className={styles.close}
            onClick={() => {this.toggleModal();}}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className={styles.content}>
            <h2>{this.props.name}</h2>
            <p className={styles.info}>{this.props.position} <span className={styles.pink}>{'//'}</span> {this.props.stayPeriod}</p>
            <p className={styles.description}>{this.props.description}</p>
            <div className={styles.details}>
              <RawHtml.div>{this.props.copy}</RawHtml.div>
              <div className={styles.skills}>
                <span>the skills &amp; the tech</span>
                <ul>
                  {this.props.skills.map(e => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default WorkEntry;
