
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
        <span className=" absolute -bottom-6 -right-5 h-14 w-14 "></span>
    </div>
  )
}

export default UniversityItem