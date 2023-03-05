import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { Login } from "../../auth/login/Login";
import { useAppSelector } from "../../apps/hook";
import "./VerUsuarios.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export const VerUsuarios = () => {
  const usersState = useAppSelector((state) => state.users.users);
  const is_Authenticated = useAppSelector(
    (state) => state.admin.is_Authenticated
  );

  const itemsPerPage = 5; // catidad de usuario a mostar po pagina
  const [currentPage, setCurrentPage] = useState(0); //estado de la pagina

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const itemsToDisplay = usersState.slice(offset, offset + itemsPerPage);

  return is_Authenticated ? ( ///esto condicion es para saber si el usuario esta aqutenticado poder mostrar la pagina //
    <>
      <Header />
      <MenuSidebar />
      <main className="container VerSusuarios">
        <section>
          {itemsToDisplay.map((user) => {
            return (
              <div key={user.id} className="card m-3">
                <div className="d-flex">
                  <i className="bi bi-person-circle fs-2"></i>
                  <h4
                    style={{
                      position: "relative",
                      top: "0.5rem",
                      left: "0.5rem",
                    }}
                  >
                    {user.id}
                  </h4>
                </div>
                <hr />
                <p className="d-flex">
                  {user.name} {user.last_name} {user.last_name2}
                </p>
                <p>{user.email}</p>
                <p>{user.sex}</p>
              </div>
            );
          })}
        </section>
        <ReactPaginate
          pageCount={Math.ceil(usersState.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </main>
    </>
  ) : (
    <Login />
  );
};
