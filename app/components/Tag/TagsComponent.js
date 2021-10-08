// import CloseIcon from "@material-ui/icons/Close";
import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { IoIosClose } from 'react-icons/io';

const styles = () =>
  createStyles({
    fieldContainer: {
      '& span': {
        lineHeight: '2.5',
      },
      // "&-moz-box-shadow": "0px 3px 14px 1px rgba(74,74,74,0.2)",
      // "&-webkit-box-shadow": "0px 3px 14px 1px rgba(74,74,74,0.2)",
      background: 'white',
      border: '1px solid #d8d8d8',
      borderColor: '#d8d8d8',
      borderRadius: '4px',
      // boxShadow: "0px 3px 14px 1px rgba(74,74,74,0.2)",
      display: 'flex',
      flexWrap: 'wrap',
      // maxWidth: "600px",
      // minHeight: "48px",
      position: 'relative',
      // width: "600px",
    },
    icon: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      fontSize: '16px',
      lineHeight: '24px',
      marginLeft: '0.5rem',
    },
    inputWrapper: {
      '& form': {
        display: 'flex',
        flex: '1',
      },
      '& input': {
        '&::-webkit-input-placeholder': {
          color: '#3d3d3d99',
        },
        '&:foucs': {
          border: '1px solid #000',
        },
        border: 'transparent',
        borderRadius: '4px',
        color: '#000',
        flex: '1',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        margin: '0',
        outline: 'none',
        padding: '0.75rem 1rem',
      },
      display: 'flex',
      flex: '1',
      // minHeight: "48px",
      minWidth: '60px',
      overflow: 'hidden',
    },
    limitText: {
      position: 'absolute',
      right: '13px',
    },
    tile: {
      backgroundColor: '#f5f5f5',
      borderRadius: '3px',
      color: '#000',
      display: 'flex',
      fontSize: '0.875rem',
      justifyContent: 'space-between',
      lineHeight: '1.5',
      margin: '0.25rem 0 0.25rem 0.25rem',
      padding: '0 0 0 0.25rem',
    },
    iconClose: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
    },
  });

class Tile extends React.Component {
  render() {
    const { tile } = this.props;
    const { id } = this.props;
    const { classes } = this.props;
    return (
      <span className={classes.tile}>
        <span>{tile.name}</span>
        <div className={classes.icon}>
          <button
            onClick={() => this.props.removeTile(id)}
            className={classes.iconClose}
          >
            <IoIosClose />
          </button>
        </div>
        {/* <i className={classes.tile} onClick={() => this.props.removeTile(id)}></i> */}
      </span>
    );
  }
}
// interface TagsState {
//   tiles: any;
//   tileIds: any;
//   currentValue: string;
// }

const TagsComponent = withStyles(styles, { name: 'TagsComponent' })(
  class TagsComponent extends React.Component {
    constructor(props) {
      super(props);
      this.addTile = this.addTile.bind(this);
      this.removeTile = this.removeTile.bind(this);
      this.editLastTile = this.editLastTile.bind(this);
      this.state = {
        currentValue: '',
        tileIds: [],
        tiles: {},
      };
    }

    componentDidUpdate(prevProps) {
      if (prevProps.tags !== this.props.tags) {
        return (
          this.props.tags &&
          this.props.tags.map(tag => {
            const { tiles, tileIds } = this.state;

            const newTileId = tileIds.length - 1 + 1;
            tileIds.push(newTileId);
            tiles[newTileId] = { name: tag.name };

            // reset the input value
            const currentValue = '';
            this.setState({
              currentValue,
              tileIds,
              tiles,
            });
          })
        );
      }
    }

    addTile(tile) {
      // pull tiles array out of the state
      // see destructoring
      if (tile.length && Object.keys(this.state.tiles).length <= 3) {
        const { tiles, tileIds } = this.state;

        const newTileId = tileIds.length - 1 + 1;
        tileIds.push(newTileId);
        tiles[newTileId] = { name: tile };

        // reset the input value
        const currentValue = '';

        // this is the same as saying tiles : tiles
        this.setState({
          currentValue,
          tileIds,
          tiles,
        });
      }
    }

    removeTile(id) {
      // console.log('removeTile::', this.state.tiles[id]);
      const { tiles } = this.state;
      delete tiles[id];
      this.setState({ tiles });
    }

    editLastTile() {
      const { tiles } = this.state;
      const lastTileValue = Object.keys(tiles)
        .slice(-1)
        .pop();
      // console.log('the last tile object is:', tiles[lastTileValue].text);
      // store last tile text value before deleting it
      const currentValue = tiles[lastTileValue].name;
      delete tiles[lastTileValue];
      this.setState({
        currentValue,
        tiles,
      });
    }

    render() {
      const { classes } = this.props;
      this.props.data.tags = Object.values(this.state.tiles);
      return (
        <>
          {/* <p>
            Add Keyword to your store to help customers find you (Example-Vegan,
            Face Masks, Groceries)
          </p> */}
          <div className={classes.fieldContainer}>
            {Object.keys(this.state.tiles).map(key => (
              <Tile
                key={key}
                id={key}
                tile={this.state.tiles[key]}
                removeTile={this.removeTile}
                classes={classes}
              />
            ))}
            <Input
              addTile={this.addTile}
              editLastTile={this.editLastTile}
              tiles={this.state.tiles}
              value={this.state.currentValue}
              classes={classes}
            />
          </div>
        </>
      );
    }
  },
);

class Input extends React.Component {
  name;

  tagForm;

  tagEvent(e) {
    const tag = this.name.value;
    const tagGroup = tag.split(' ');
    const { tiles } = this.props;
    const hasTiles = Object.keys(tiles).length > 0;

    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      tagGroup.map(tag => this.props.addTile(tag));
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
      <>
        {/* <p className={classes.limitText}>Maximum of 4</p> */}

        <div className={classes.inputWrapper}>
          <form ref={input => (this.tagForm = input)}>
            <input
              ref={input => (this.name = input)}
              type="text"
              name="new-item"
              placeholder="Enter Tag"
              autoComplete="off"
              // value={data.tags}
              defaultValue={this.props.value}
              onKeyDown={e => this.tagEvent(e)}
            />
          </form>
        </div>
      </>
    );
  }
}

// AccountConfirm.displayName = "AccountConfirm";
export default TagsComponent;
