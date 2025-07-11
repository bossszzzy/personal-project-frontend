const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center">
      {children}
    </div>
  );
};

export default Layout;
