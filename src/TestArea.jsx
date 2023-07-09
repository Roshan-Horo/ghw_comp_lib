export default function TestArea({children}){
  return (
    <div style={{border: '1px solid red',padding: "1rem"}}>
      {
        children
      }
    </div>
  )
}