import Project from "./Project";

function Portfolio()
{
    return(
    <>        
    <h3 className="portfolio-h1">
    My Projects            
    </h3>

        <div className="portfolio-container">

        <Project source={'./Screenshot (315).png'} href={'https://dhruv-232.github.io/Weather-Dashboard/'} title={'Weather Dashboard'}/>
        <Project source={'./Screenshot (316).png'} href={'https://dhruv-232.github.io/Password-Generator/'} title={'Password Generator'}/>
        <Project source={'./Screenshot (317).png'} href={'https://swaplogs2.herokuapp.com/'} title={'SwapLogs'}/>
        <Project source={'./Screenshot (318).png'} href={'https://dhruv-232.github.io/Work-Day-Planner/'} title={'Work Day Scheduler'}/>
        <Project source={'./Screenshot (319).png'} href={'https://sleepy-plains-67185.herokuapp.com/notes'} title={'Note Taker'}/>
        <Project source={'./Screenshot (320).png'} href={'https://dhruv-232.github.io/Code-Refractor/'} title={'Horiseon Website'}/>
        </div>
    </>)
}

export default Portfolio;