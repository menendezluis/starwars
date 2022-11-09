import NavBar from "../components/NavBar";
export default function Layout({ title, children }) {
  return (
    <div className="container mx-auto mb-8 px-8 bg-gray-900	">
      <NavBar title={title} />
      <h1 className="mt-8 text-white text-center text-3xl font-bold">
        {children}
      </h1>
    </div>
  );
}
