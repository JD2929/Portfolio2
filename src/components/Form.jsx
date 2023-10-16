import '../styles/general.css'

export default function Form ({
label,
name,
})
{
    return (
        <div className="form"> 
    
<form>
  <label>
   {label}
    <input type="text" name={name} />
  </label>
</form>
</div>
);
}