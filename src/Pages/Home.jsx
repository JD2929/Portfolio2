import '../styles/general.css';
import Photo from '../images/PortfolioImage.png';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <img src={Photo} alt="Photo of JD" className= "portfolioImage" />

      <div style={{ textAlign: 'center', flex: 1 }}>
        <h1 style={{ margin: 0 }} className="headings">Meet JD!</h1>
        <p>
          Welcome! I am so pleased that you have come to find out more about me and my journey into the coding world. It has been an interesting one.
        </p>
      </div>
    </div>
  );
}