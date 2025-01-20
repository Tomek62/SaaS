import { ReactNode } from "react";

export default function WelcomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-3/4 max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">{children}</div>
    </div>
  );
}
