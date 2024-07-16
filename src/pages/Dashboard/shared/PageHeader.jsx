import { Link } from "react-router-dom";

export function PageHeader({ title, breadList = [] }) {
  return (
    <div className="row page-header">
      <div className="col-6">
        <h4 className="page-title">{title}</h4>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard" className="#">
                Anasayfa
              </Link>
            </li>
            {breadList.map((item) => {
              return (
                <li key={item[0]} className="breadcrumb-item">
                  <Link to="/dashboard" className="#">
                    {item[1]}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
