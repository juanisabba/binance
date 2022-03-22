import { Container, makeStyles, Typography } from "@material-ui/core";
import binanceBackground from "../../images/foreground-image-light.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    display: "flex",
    minHeight: "calc(100vh - 60px)",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95vw",
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column-reverse',
      paddingBottom: '40px',
    },
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    height: "40%",
    maxWidth: "500px",
    justifyContent: "center",
    textAlign: "flex-start",
    [theme.breakpoints.down("md")]: {
      maxWidth: '80vw',
    },    
  },
  typography: {
    fontSize: '45px',
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontSize: '35px'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '27px'
    },
  },
  bannerImg: {
    width: '550px',
    [theme.breakpoints.down("sm")]: {
      width: '80vw'
    },
  },
  button: {
    backgroundColor: "#FCD535",
    width: "200px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    fontSize: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    border: "none",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '18px'
    },
  },
  ul: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
    width: "95vw",
    paddingBottom: '25px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      textAlign: 'center',
      paddingBottom: 0,
    },
  },
  li: {
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      paddingBottom: '25px',
      fontSize: '80%'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '70%'
    },

  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.container}
        >
          <div className={classes.tagline}>
            <Typography className={classes.typography}
            >
              Compra, haz trading y holdea más de 600 criptomonedas en Binance
            </Typography>
            <button className={classes.button}>Empezar</button>
          </div>
          <img src={binanceBackground} alt="" className={classes.bannerImg} />
        </div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <h1>76 000 millones de USD</h1>
            <p>de volumen de trading a 24 h en el exchange de Binance</p>
          </li>
          <li className={classes.li}>
            <h1>Más de 600</h1>
            <p>criptomonedas incluidas</p>
          </li>
          <li className={classes.li}>
            <h1>90 millones</h1>
            <p>de usuarios registrados que confían en Binance</p>
          </li>
          <li className={classes.li}>
            <h1>0,10 %,</h1>
            <p>las comisiones de transacción más bajas</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Banner;
