import '../styles/general.css';
import resumePDF from'../resources/JDResume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Why hire me?</h1>

      <p>
        After almost 2 decades of teaching and running an alternative school, I am jumping onto a new career path. I am returning to coding. Something that I left behind in high school, moving on to other interests, and am now ready to learn, practice, and work in the coding industry.

        Twenty years of teaching twice-exceptional children have given me so many skills that lend themselves well to being a full-stack developer, here are just a few.
      </p>

      <p>
        I am great at paying attention to detail: coding is all about the details, and tiny changes can have enormous effects on the output.
      </p>
      <p>
        I am extremely patient: coding can be frustrating when the bug is winning and you are trying to find the solution, you need to stay calm and focused.
      </p>
      <p>
        I can work with a wide variety of people: coding isn’t all about the computer, you need to interact with other employees, managers, executives, and of course clients.
      </p>
      <p>
        I am strikingly creative: coding is a lot of problem solving and the solution often needs to be a creative one.
      </p>
      <p>

        I am working through edX and the University of Toronto’s continuing education department on their Full-Stack Development Bootcamp. This 13-week course is an intense introduction to the world of web development, showcasing both my coding skills and determination, perseverance, and ability to work through difficult situations.
      </p>
      <p>
        I am now ready and willing to work with your company to develop my skills while assisting your team productively.
      </p>
      <a download = "JDFullResume.pdf" href = {resumePDF}>Full Resume</a>
      
    
    </div>
  );
}