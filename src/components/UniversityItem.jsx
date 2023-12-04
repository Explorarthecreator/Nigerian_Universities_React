
function UniversityItem({item}) {
  return (
    <div className="university-card">
        <div className="logo">{item.abbreviation[0].toUpperCase()}</div>
        <h3>
            {item.name}
        </h3>
        <p>
            {item.abbreviation}
        </p>
        <span></span>
    </div>
  )
}

export default UniversityItem