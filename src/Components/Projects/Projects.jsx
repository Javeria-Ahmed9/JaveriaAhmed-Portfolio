import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Recipe Book"
          coderef="https://github.com/Javeria-Ahmed9/MyReicpie-book.git"
          demoref="https://recipebookjav.netlify.app/"
        />
        <ProjectCard
          title="Expense Tracker"
          demoref="https://expense-tracker-app-javeriaahmed.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/ExpenseTracker-App.git"
        />
        <ProjectCard
          title="Shopping Website"
          demoref="https://shoppingwebsite3.netlify.app/"
          coderef="https://github.com/Javeria-Ahmed9/Shopping-Website.git"
        />
        <ProjectCard
          title="Weather App"
          demoref="https://weather-app-three-steel-23.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/WeatherApp.git"
        />
        <ProjectCard
          title="Shopping cart "
          demoref="https://ahmedshoppingcart.netlify.app"
          coderef="https://github.com/Javeria-Ahmed9/FirstReduxProject.git"
        />
        <ProjectCard
          title="To-Do-List"
          demoref="https://to-do-list-app-puce-mu.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/To-Do-list-app.git"
        />
        <ProjectCard
          title="Calculator"
          demoref="https://calculator-alpha-ruby-97.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/Calculator.git"
        />
        <ProjectCard
          title="RecordKeeper App"
          demoref="https://record-keeper-app.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/RecordKeeperApp.git"
        />
        <ProjectCard
          title="StopWatch"
          demoref="https://stop-watch-sable-mu.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/StopWatch.git"
        />
        <ProjectCard
          title="BMI Calculator"
          demoref="https://bmi-calculator-five-ashy.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/BMI-calculator.git"
        />
        <ProjectCard
          title="Counter"
          demoref="https://counter-rouge-ten.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/Counter.git"
        />
        <ProjectCard
          title="Tic Tac Toe"
          demoref="https://tic-tac-toe-gules-eight.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/Tic-Tac-Toe-.git"
        />
        <ProjectCard
          title="ColorPicker"
          demoref="https://color-picker-app1.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/ColorPicker.git"
        />
        <ProjectCard
          title="Digital Watch"
          demoref="https://digital-watch-cyan.vercel.app/"
          coderef="https://github.com/Javeria-Ahmed9/digitalWatch.git"
        />
      </div>
    </div>
  );
};

export default Projects;
