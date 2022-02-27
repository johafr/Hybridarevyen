import React from "react";

interface Props {
  history: History<any>;
}

const Home: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <body>
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse-main"
            >
              <span class="sr-only">Toggle navgiation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img src="images\header.png" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse-main">
            <ul class="nav navbar-nav navbar-right">
              <br />
              <br />
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home">
        <div class="landing-text">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p class="btn">Video</p>
          <div id="video"></div>
        </div>
      </div>

      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <a href="Index.html">
                <img src="images\ascend-no-background.png" />
              </a>
            </div>
            <div class="col-sm-6 text-center">
              <h1>Who are we?</h1>
              <hr />
              <p class="lead">
                Ascend NTNU is an aerial robotics team consisting of students
                from the Norwegian University of Science and Technology. Our
                goal is to become the best performing team at the International
                Aerial Robotics Competition, American Venue, and the AlphaPilot
                competition. We aim high, work hard, and create new and
                innovative solutions to some of the most challenging problems in
                cybernetics and autonomy as of today. Ascend NTNU was founded in
                spring 2015. In 2016, we competed and came third in IARC. We won
                the price for the most innovative drone in 2017.
              </p>

              <p class="lead">
                In 2018, mission 7 was completed, where we finished at third,
                and we won the prize for the most innovative drone, again! In
                2019 At mission 8, we won the awards for Best Technical
                Demonstration and Best System Design, and with that we also came
                in 1st overall in the American Venue! Currently, we are
                preparing for mission 9 in 2020! We are also attempting to
                qualify for the competition AlphaPilot.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <br />
              <br />
              <a href="https://www.kongsberg.com/who-we-are">
                <img
                  src="images\kongsberg-gjennomsiktig.png"
                  class="img-responsive"
                />
              </a>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>Kongsberg</h2>

              <p>
                Our main sponsor, Kongsberg, is an international,
                knowledge-based group that supplies high-technology systems and
                solutions to customers engaged in the oil and gas industry,
                merchant marine, and defence and aerospace industries.
              </p>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a href="https://www.equinor.com/en.html">
                <img
                  src="images\Equinor_PRIMARY_logo_RGB_RED.png"
                  class="img-responsive"
                />
              </a>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>Equianor</h2>
              <p>
                Equinor is an international, knowledge-based energy company
                pushing the boundaries of imagination and technology, solving
                challenges in the oil and gas industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="fixed"></div>

      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <br />
              <br />
              <br />
              <br />
              <h3>Alpha Pilot</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>

              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div class="col-sm-6">
              <br />
              <br />
              <br />
              <a href="alphapilot.html">
                <img src="images\alpha.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="container-fluid text-center">
        <div class="row">
          <div class="col-sm-4">
            <h3>Project manager</h3>
            <h4>Jo Aleksander Johansen</h4>
            <h4>
              <a href="tel: +47 906 11 317">+47 906 11 317</a>
            </h4>
            <br />
            <h4>
              <a href="mailto: jo.johansen@ascendntnu.no subject=subject text">
                jo.johansen@ascendntnu.no
              </a>
            </h4>
          </div>
          <div class="col-sm-4">
            <h3>Follow us on</h3>
            <a
              href="https://www.facebook.com/ascendntnu/"
              class="fa fa-facebook"
            ></a>
            <a href="https://github.com/AscendNTNU" class="fa fa-github"></a>
            <a
              href="https://www.instagram.com/ascendntnu/"
              class="fa fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/company/ascend-ntnu"
              class="fa fa-linkedin"
            ></a>
          </div>
          <div class="col-sm-4">
            <a href="Index.html">
              <img src="images\ascend-no-background.png" class="icon" />
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Table: {
      width: "80%",
      margin: "auto",
    },
  })
);

export default Home_new;
