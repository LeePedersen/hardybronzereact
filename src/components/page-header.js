import '../css/page-header.css'

function PageHeader(props) {
  const title = props.title;
  return (
    <div className="page-header">
    <p className="title">{title}</p>
    <div className="line"/>
    </div>
  )
}

export default PageHeader;
