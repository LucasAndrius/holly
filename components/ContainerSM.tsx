export default function ContainerSM({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-7xl scroll-smooth my-10 px-5 ">
      {children}
    </div>
  );
}
