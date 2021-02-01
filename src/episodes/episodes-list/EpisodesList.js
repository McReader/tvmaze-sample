import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import { RequestStatus } from "../../ui-lib/RequestStatus";

import { EpisodeListItem } from "./item/EpisodeListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export function EpisodesList({ episodes, requestStatus }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RequestStatus requestStatus={requestStatus}>
                {() => (
                    <GridList className={classes.gridList}>
                        {episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} />)}
                    </GridList>
                )}
            </RequestStatus>
        </div>
    );
}
