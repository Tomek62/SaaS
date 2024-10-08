import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";
import DeleteSiteForm from "@/components/form/delete-site-form";

export default async function SiteSettingsIndex({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.site.findUnique({
    where: {
      id: decodeURIComponent(params.id),
    },
    include: { restaurant: true },
  });

  return (
    <div className="flex flex-col space-y-6">
      <Form
        title="Name"
        description="The name of your site. This will be used as the meta title on Google as well."
        helpText="Please use 32 characters maximum."
        inputAttrs={{
          name: "name",
          type: "text",
          defaultValue: data?.name!,
          placeholder: "My Awesome Site",
          maxLength: 32,
        }}
        handleSubmit={updateSite}
      />

      <Form
        title="Description"
        description="The description of your site. This will be used as the meta description on Google as well."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: data?.description!,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Vos menus et produits"
        description="Ici vous pouvez ajouter une réduction pour votre site."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: data?.description!,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Réduction"
        description="Ici vous pouvez ajouter une réduction pour votre site."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: data?.description!,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Vos coordonnées"
        description="Ajoutez vos coordonnées pour que vos clients puissent vous contacter."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "coordinates",
          type: "text",
          defaultValue: {address:data?.restaurant?.address!,phoneNumber:data?.restaurant?.phoneNumber!,email:data?.restaurant?.email!},
        }}
        handleSubmit={updateSite}
      />
      <DeleteSiteForm siteName={data?.name!} />
    </div>
  );
}
