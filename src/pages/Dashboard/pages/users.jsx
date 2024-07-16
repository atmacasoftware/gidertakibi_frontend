import { Table } from "../components/table";
import { Navbar } from "../shared/navbar";
import { PageHeader } from "../shared/PageHeader";
import { Sidebar } from "../shared/sidebar";

export function Users() {
  return (
    <div className="dashboard-panel">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <PageHeader
          title="Kullanıclar"
          breadList={[["kullanicilar", "Kullanıcılar"]]}
        />
        <div className="content">
          <Table />
        </div>
      </div>
    </div>
  );
}
