import { PageHeader } from "../../shared/PageHeader";

export default function UserEdit(authState, dispatch) {
  return (
    <>
      <PageHeader title="Hesabım" breadList={[["myaccount", "Hesabım"]]} />
      <div className="content">
        <div className="row">
            <div className="col-lg-6 col-sm-12"> 
            </div>
            <div className="col-lg-6 col-sm-12">
                <form>
                    
                </form>
            </div>
        </div>
      </div>
    </>
  );
}
