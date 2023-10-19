import '../styles/general.css'

export default function Form({
  label,
  name,
}) {
  return (
    <div className="form">

     
      < label className='jd-label'>
      {label}
      </label>
      < input type="text" name={name} />
    </div>
    

  );
}