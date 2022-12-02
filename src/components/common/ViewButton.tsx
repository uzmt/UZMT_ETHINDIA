import { Link } from "react-router-dom"


export const ViewButton = ({ to }: { to: string }) => {

  return (
    <>
    <Link to={to}>
        <div className="view-button">
            View more
        </div>
    </Link>
    </>
  )

}
