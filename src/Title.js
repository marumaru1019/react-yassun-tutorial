export const Title = ( {title, ...props} ) => {
  const content = props.content
  return (
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}