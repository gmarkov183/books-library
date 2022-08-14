export const Header = () => {
  return (
    <header>
      <nav>
        <div id="user">
          <a href="#">Logout</a>
        </div>
        <div id="guest">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
       
      </nav>

      <h1>
        <a className="home" href="#">
          Books Explosion
        </a>
      </h1>
    </header>
  );
};
