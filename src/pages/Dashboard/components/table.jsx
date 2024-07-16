export function Table() {
  return (
    <div className="card shadow-sm table-card">
      <div className="card-header">
        <div className="text-end">
          <form action="">
            <input type="search" className="table-search" />
          </form>
        </div>
      </div>
      <div className="card-body">
        <div class="table-responsive">
          <table class="table table-hover text-nowrap" id="productTable">
            <thead>
              <tr>
                <th scope="col">Görsel</th>
                <th scope="col">Ürün Adı</th>
                <th scope="col">Kategori</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
