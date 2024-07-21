export function NavbarSearch() {
  return (
    <form className="d-flex navbar-search" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Arama yapınız..."
        aria-label="Search"
      />
    </form>
  );
}
