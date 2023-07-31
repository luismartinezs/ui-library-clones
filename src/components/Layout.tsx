import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="container mx-auto mb-auto max-w-7xl flex-1 px-2 xl:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
