const Grid = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <>
      <section className="grid-container">
        <div className="instrument">
          <p>Kick</p>
        </div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
        <div className="step" onClick={handleClick}></div>
      </section>
    </>
  )
}

export default Grid
