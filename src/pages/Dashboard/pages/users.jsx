import { Navbar } from "../components/navbar";
import { PageHeader } from "../components/PageHeader";
import { Sidebar } from "../components/sidebar";

export function Users() {
  return (
    <div className="dashboard-panel">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <PageHeader title="Kullanıclar" breadList={[['kullanicilar', 'Kullanıcılar']]}/>
      </div>
    </div>
  );
}
