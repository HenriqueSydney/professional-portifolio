import { AdminSidebar } from "@/components/AdminSidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function Layout({ children }: Props) {
  return (
    <div className="flex w-full min-h-screen mt-18 gap-5">
      <AdminSidebar />
      <div className="flex justify-center w-full">{children}</div>
    </div>
  );
}
