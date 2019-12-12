import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css'

//TODO LUCAS: review the logic please :-)

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class CircularDeterminate extends React.Component {
    timer = null;

    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 23);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>

                <div className="spinnerContainer">
                    <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    size={100}
                    value={this.state.completed}
                    />
                </div>

            </div>
        );
    }
}

CircularDeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);
