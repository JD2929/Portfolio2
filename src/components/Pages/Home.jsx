import '../../styles/general.css';
import Photo from '../../images/PortfolioImage.png';

export default function Home() {
  return (
    <div>
      <h1 className='jdspecial'>Meet JD!</h1>
      <img src={Photo} alt="Photo of JD" />
      <p>
        Welcome! I am so pleased that you have come to find out more about me and my journey into the coding world.
      </p>
    </div>
  );
}
  