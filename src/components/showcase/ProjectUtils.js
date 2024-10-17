import classes from "./Showcase.module.css"
import tz_logo from "../../assets/img/tz_logo.png"
import tz_demo from "../../assets/gifs/tz_demo.gif"

export const projectDirectory = {
    timezones: {
        tech: ['React', 'APIs', 'Mapbox API', 'JS DateTime'],
        date: "July 2024",
        logo: <img className={`${classes.icon}`} src={tz_logo} alt="timezones logo" />,
        demo: <img className={`${classes.demo}`} src={tz_demo} alt="timezones demo" />,
        theme: "Showcase_turquoise__lD1L+",
        link : "https://timezones-for-lovers.netlify.app/",
        gist: "https://gist.github.com/RoxanneTabuena/cd25aa73dd66b800e1ecb6046c44a6ad.js",
        repo: "https://github.com/RoxanneTabuena/timezones",
        description: "blahbitty"
    }
}
