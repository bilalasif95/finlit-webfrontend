// import CloseIcon from "@material-ui/icons/Close";
import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';
import Input from './Input';

const styles = () =>
  createStyles({
    fieldContainer: {
      '& span': {
        lineHeight: '2.5',
      },
      // "&-moz-box-shadow": "0px 3px 14px 1px rgba(74,74,74,0.2)",
      // "&-webkit-box-shadow": "0px 3px 14px 1px rgba(74,74,74,0.2)",
      background: 'white',
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
        border: '1px solid #d8d8d8',
        borderColor: '#d8d8d8',
        borderRadius: '4px',
        color: '#000',
        flex: '1',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        margin: '0 0 0.5rem',
        outline: 'none',
        padding: '0.75rem 1rem',
      },
      display: 'flex',
      flex: '1',
      // minHeight: "48px",
      minWidth: '100%',
      overflow: 'hidden',
    },
    limitText: {
      position: 'absolute',
      right: '13px',
    },
    tile: {
      backgroundColor: '#e4e4e4',
      borderRadius: '0.313rem',
      color: '#404041',
      display: 'flex',
      fontSize: '0.875rem',
      fontWeight: '550',
      justifyContent: 'space-between',
      lineHeight: '1.5',
      margin: '0.5rem 0.5rem 0.5rem 0',
      padding: '0 0.5rem 0 1rem',
    },
    iconClose: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#404041',
      fontSize: '1.75rem',
      padding: 0,
    },
  });

const Tile = props => (
  // {
  // render() {
  // const { tile } = this.props;
  // const { id } = this.props;
  // const { classes } = this.props;
  // return (
  <span className={props.classes.tile}>
    <span>{props.tile}</span>
    <div className={props.classes.icon}>
      <button
        type="button"
        onClick={() => props.removeTile(props.id)}
        className={props.classes.iconClose}
      >
        <IoIosClose />
      </button>
    </div>
    {/* <i className={classes.tile} onClick={() => this.props.removeTile(id)}></i> */}
  </span>
);
// );
// }
// };

Tile.propTypes = {
  tile: PropTypes.any,
  id: PropTypes.any,
  classes: PropTypes.any,
  removeTile: PropTypes.func,
};

// interface TagsState {
//   tiles: any;
//   tileIds: any;
//   currentValue: string;
// }

const CourseTag = withStyles(styles, { name: 'TagsComponent' })(
  class TagsComponent extends React.Component {
    static propTypes = {
      tags: PropTypes.any,
      classes: PropTypes.any,
      data: PropTypes.any,
    };

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
            tiles[newTileId] = tag.name;

            // reset the input value
            const currentValue = '';
            return this.setState({
              ...this.state,
              currentValue,
              tileIds,
              tiles,
            });
          })
        );
      }
      return 0;
    }

    addTile(tile) {
      // pull tiles array out of the state
      // see destructoring
      if (tile.length && Object.keys(this.state.tiles).length <= 10) {
        const { tiles, tileIds } = this.state;

        const newTileId = tileIds.length - 1 + 1;
        tileIds.push(newTileId);
        tiles[newTileId] = tile;

        // reset the input value
        const currentValue = '';

        // this is the same as saying tiles : tiles
        this.setState({
          ...this.state,
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
      this.setState({ ...this.state, tiles });
    }

    editLastTile() {
      const { tiles } = this.state;
      const lastTileValue = Object.keys(tiles)
        .slice(-1)
        .pop();
      // console.log('the last tile object is:', tiles[lastTileValue].text);
      // store last tile text value before deleting it
      const currentValue = tiles[lastTileValue];
      delete tiles[lastTileValue];
      this.setState({
        ...this.state,
        currentValue,
        tiles,
      });
    }

    render() {
      const { classes } = this.props;
      this.props.data(Object.values(this.state.tiles));
      console.log('state', this.state);

      return (
        <>
          {/* <p>
            Add Keyword to your store to help customers find you (Example-Vegan,
            Face Masks, Groceries)
          </p> */}
          <div className={classes.fieldContainer}>
            <Input
              addTile={this.addTile}
              editLastTile={this.editLastTile}
              tiles={this.state.tiles}
              value={this.state.currentValue}
              classes={classes}
            />
            <div className="tagCount">{this.state.tileIds.length}/10 Tags</div>
            {Object.keys(this.state.tiles).map(key => (
              <Tile
                key={key}
                id={key}
                tile={this.state.tiles[key]}
                removeTile={this.removeTile}
                classes={classes}
              />
            ))}
          </div>
        </>
      );
    }
  },
);

// AccountConfirm.displayName = "AccountConfirm";
export default CourseTag;
