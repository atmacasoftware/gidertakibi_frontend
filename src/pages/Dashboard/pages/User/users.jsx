import { useCallback, useState, useEffect, useMemo } from "react";
import { Table } from "../../components/Table/table";
import { Navbar } from "../../shared/navbar";
import { PageHeader } from "../../shared/PageHeader";
import { Sidebar } from "../../shared/sidebar";
import { loadUsers } from "./api";

export function Users() {
  const [userPage, setUserPage] = useState({
    content: [],
    last: false,
    first: false,
    number: 0,
  });
  const [apiProgress, setApiProgress] = useState(false);

  const getUsers = useCallback(async (page) => {
    setApiProgress(true);
    try {
      const response = await loadUsers(page);
      setUserPage(response.data);
    } catch {
    } finally {
      setApiProgress(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Ad", accessor: "first_name" },
      { Header: "Soyad", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Telefon", accessor: "mobile" },
      { Header: "Kullanıcı Tipi", accessor: "userType" },
    ],
    []
  );

  const data = userPage.content

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
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
