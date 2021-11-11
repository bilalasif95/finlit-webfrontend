import * as React from 'react';
import PropTypes from 'prop-types';
import { GoTag } from 'react-icons/go';

class Input extends React.Component {
  static propTypes = {
    tiles: PropTypes.any,
    addTile: PropTypes.func,
    editLastTile: PropTypes.func,
    value: PropTypes.any,
    classes: PropTypes.any,
  };

  name;

  tagForm;

  tagEvent(e) {
    const tag = this.name.value;
    const tagGroup = tag.split(' ');
    const { tiles } = this.props;
    const hasTiles = Object.keys(tiles).length > 0;

    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      tagGroup.map(res => this.props.addTile(res));
      this.tagForm.reset();
    }

    if (e.keyCode === 8 && hasTiles && tag === '') {
      e.preventDefault();
      this.props.editLastTile();
      // this trigger the default value eachtime we hit delete
      this.tagForm.reset();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.name.selectionStart = this.name.value.length;
      this.name.selectionEnd = this.name.value.length;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      // <>
      //   <p className={classes.limitText}>Maximum of 4</p>
      <div className={classes.inputWrapper}>
        <form className="tagForm"
          ref={input => {
            this.tagForm = input;
            return 0;
          }}
        >
          <input
            ref={input => {
              this.name = input;
              return 0;
            }}
            type="text"
            name="new-item"
            placeholder="Add a Tag..."
            autoComplete="off"
            // value={data.tags}
            defaultValue={this.props.value}
            onKeyDown={e => this.tagEvent(e)}
          />
          <GoTag className="tagIcon" />
        </form>
      </div>
      // </>
    );
  }
}

export default Input;
