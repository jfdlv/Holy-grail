function Left(props) {
  return (
    <>
      <left>
        <PlusMinus section="left" handle={props.handle}/>
        <div className="section">left: {props.data.left}</div>
        <Data data={props.data}/>
      </left>
    </>
  )
}