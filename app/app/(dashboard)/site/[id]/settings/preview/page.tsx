import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";
import IphoneMockup from "@/components/iphone-mockup";

export default async function SiteSettingsPreview({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.site.findUnique({
    where: {
      id: decodeURIComponent(params.id),
    },
  });

  return (
    <div className="flex flex-col space-y-6">
      <IphoneMockup children={<div>Preview</div>} />
    </div>
  );
}
