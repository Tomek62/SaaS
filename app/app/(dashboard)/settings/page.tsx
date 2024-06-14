import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";
import DeleteSiteForm from "@/components/form/delete-site-form";
import SettingsLayout from "./layout";

export default async function SiteSettingsIndex() {
  return (
    <SettingsLayout>
      <h1 className="font-cal text-3xl font-bold dark:text-white">
        Paramétres
      </h1>
      <div className="flex flex-col space-y-6">
        <Form
          title="Name"
          description="The name of your site. This will be used as the meta title on Google as well."
          helpText="Please use 32 characters maximum."
          inputAttrs={{
            name: "name",
            type: "text",
            defaultValue: "mon site",
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
            defaultValue: "merci",
            placeholder: "A blog about really interesting things.",
          }}
          handleSubmit={updateSite}
        />

        <DeleteSiteForm siteName={"mon site"} />
      </div>
    </SettingsLayout>
  );
}
