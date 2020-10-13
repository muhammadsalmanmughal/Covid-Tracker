import React from "react";
import CountUp from "react-countup";
import "./Cards.css"
import "materialize-css/dist/css/materialize.min.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log("PROPS-->", confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div>
      {/* <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No. of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovred
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No. of recovred cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">No. of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid> */}

      <div className="row main-cards">
        <div className="col s12 m4 center-align ">
          <div className="card-panel   z-depth-3 infected">
          {/* <i className="large material-icons" >warning</i> */}
            <h3>Infected</h3>
            <h4>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </h4>
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
        </div>
        <div className="col s12 m4 center-align">
          <div className="card-panel z-depth-3 recovered">
            <h3>Recovred</h3>
            <h4 >
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </h4>
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
        </div>
        <div className="col s12 m4 center-align">
          <div className="card-panel z-depth-3 death">
            <h3>Deaths</h3>
            <h4 >
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </h4>
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
