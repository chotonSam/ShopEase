export default function CategoryLayout({ children }) {
  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/assets/header.webp')]"></header>

      {children}
    </>
  );
}
