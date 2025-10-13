import { UserQuery } from "./components/UserQuery";
import { UsersCard } from "./components/UsersCard";

export default async function Subscribers() {
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Usuários</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Usuários registrados no Portifólio
            </p>
          </div>
        </section>
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <UserQuery />
        </section>
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <UsersCard />
        </section>
      </div>
    </div>
  );
}
