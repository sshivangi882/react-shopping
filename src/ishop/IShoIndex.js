import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IShopHome from "./IShopHome";

export default function IShopIndex() {
  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2 mt-2">
        <h1>ISHOP -Online Store</h1>
      </header>
      <section className="mt-2 row">
        <BrowserRouter>
          <nav className="col-3">
            <div>
              <Link>Home</Link>
            </div>
            <div>
              <Link>Register</Link>
            </div>
            <div>
              <Link>Login</Link>
            </div>
            <div>
              <Link>Dashboard</Link>
            </div>
          </nav>

          <main className="col-9">
            <Routes>
              <Route path="/" element={<IShopHome />} />
              <Route path="home" element={<IShopHome />} />
              {/* <Route path="Indexhome" element={<IShopHome />} /> */}
            </Routes>
          </main>
        </BrowserRouter>
      </section>
    </div>
  );
}
