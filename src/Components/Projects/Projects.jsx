import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Weather App',
    description: 'Real-time weather forecasts using OpenWeatherMap API with search by city.',
    tags: ['React', 'Axios', 'API', 'Tailwind'],
    demoref: 'https://weather-app-three-steel-23.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/WeatherApp.git',
    gradient: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  },
  {
    title: 'Shopping Cart',
    description: 'E-commerce cart with Redux state management, product listing and cart functionality.',
    tags: ['React', 'Redux', 'React Router', 'Bootstrap'],
    demoref: 'https://ahmedshoppingcart.netlify.app',
    coderef: 'https://github.com/Javeria-Ahmed9/FirstReduxProject.git',
    gradient: 'bg-gradient-to-br from-purple-600 to-pink-500',
  },
  {
    title: 'Expense Tracker',
    description: 'Track income and expenses with category filters and a running balance summary.',
    tags: ['React', 'Vite', 'Bootstrap', 'localStorage'],
    demoref: 'https://expense-tracker-app-javeriaahmed.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/ExpenseTracker-App.git',
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-500',
  },
  {
    title: 'Recipe Book',
    description: 'Browse and search recipes fetched from an external API with a clean card layout.',
    tags: ['React', 'Axios', 'API', 'Tailwind'],
    demoref: 'https://recipebookjav.netlify.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/MyReicpie-book.git',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    title: 'Record Keeper',
    description: 'CRUD app to manage and store records with add, edit and delete functionality.',
    tags: ['React', 'Vite', 'Bootstrap'],
    demoref: 'https://record-keeper-app.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/RecordKeeperApp.git',
    gradient: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  },
  {
    title: 'To-Do List',
    description: 'Task manager with add, complete and delete tasks, persisted in localStorage.',
    tags: ['React', 'Vite', 'Tailwind'],
    demoref: 'https://to-do-list-app-puce-mu.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/To-Do-list-app.git',
    gradient: 'bg-gradient-to-br from-violet-600 to-purple-500',
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate BMI with weight and height inputs, shows category and health advice.',
    tags: ['React', 'Tailwind', 'Bootstrap'],
    demoref: 'https://bmi-calculator-five-ashy.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/BMI-calculator.git',
    gradient: 'bg-gradient-to-br from-teal-600 to-cyan-500',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Two-player Tic Tac Toe game with win detection and board reset.',
    tags: ['React', 'Vite'],
    demoref: 'https://tic-tac-toe-gules-eight.vercel.app/',
    coderef: 'https://github.com/Javeria-Ahmed9/Tic-Tac-Toe-.git',
    gradient: 'bg-gradient-to-br from-rose-600 to-pink-500',
  },
];

const Projects = () => {
  return (
    <section id='Projects' className='px-6 md:px-20 py-24'>
      <p className='text-blue-400 text-sm tracking-widest uppercase mb-2'>What I Built</p>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-12'>Projects</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;