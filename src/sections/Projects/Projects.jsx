import styles from './ProjectsStyles.module.css';
import fras from '../../assets/FRAS.png';
import chor from '../../assets/Chord.png';
import ambat from '../../assets/Ambatu.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chor}
          link="https://github.com/ronmagpantay1/chordefine.git"
          h3="ChorDefine"
          p="Guitar Chord Practice App"
        />
        <ProjectCard
          src={fras}
          link="https://github.com/paullooll/FaceRecognitionAttendanceSystem.git"
          h3="FRAS"
          p="Facial Recognition Attendance System"
        />
        <ProjectCard
          src={ambat}
          link="https://github.com/ronmagpantay1/cc206final.git"
          h3="Ambatu.help"
          p="AI Chatbot Assistant"
        />
      </div>
    </section>
  );
}

export default Projects;
